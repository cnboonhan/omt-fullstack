import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as iam from 'aws-cdk-lib/aws-iam';

export class OmtAwsStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const omt_db = new dynamodb.Table(this, 'OmtTable', {
      partitionKey: { name: 'code', type: dynamodb.AttributeType.STRING },
      removalPolicy: cdk.RemovalPolicy.RETAIN,
      readCapacity: 1,
      writeCapacity: 1,
      billingMode: dynamodb.BillingMode.PROVISIONED,
    });

    const omt_update_iam = new iam.Role(this, 'OmtUpdateRole', {
      assumedBy: new iam.ServicePrincipal('lambda.amazonaws.com'),
      managedPolicies: [
        iam.ManagedPolicy.fromAwsManagedPolicyName('AmazonDynamoDBFullAccess'),
      ]
    });

    const omt_update_lambda = new lambda.Function(this, 'OmtUpdateFunction', {
      runtime: lambda.Runtime.NODEJS_20_X,
      code: lambda.Code.fromAsset('omt_update_lambda.zip'),
      handler: 'index.handler',
      role: omt_update_iam,
      environment: {
        TABLE_NAME: omt_db.tableName,
      },
    });

    const omt_update_lambda_url = new lambda.FunctionUrl(this, 'OmtUpdateFunctionUrl', {
      function: omt_update_lambda,
      authType: lambda.FunctionUrlAuthType.NONE,
    });

    new cdk.CfnOutput(this, 'OmtUpdateFunctionUrlExport', {
      value: omt_update_lambda_url.url,
    })

    const omt_retrieval_iam = new iam.Role(this, 'OmtRetrievalRole', {
      assumedBy: new iam.ServicePrincipal('lambda.amazonaws.com'),
      managedPolicies: [
        iam.ManagedPolicy.fromAwsManagedPolicyName('AmazonDynamoDBReadOnlyAccess'),
      ]
    });

    const omt_retrieval_lambda = new lambda.Function(this, 'OmtRetrievalFunction', {
      runtime: lambda.Runtime.NODEJS_20_X,
      timeout: cdk.Duration.seconds(10),
      code: lambda.Code.fromAsset('omt_retrieval_lambda.zip'),
      handler: 'index.handler',
      role: omt_retrieval_iam,
      environment: {
        TABLE_NAME: omt_db.tableName,
      },
    });

    const omt_retrieval_lambda_url = new lambda.FunctionUrl(this, 'OmtRetrievalFunctionUrl', {
      function: omt_retrieval_lambda,
      authType: lambda.FunctionUrlAuthType.NONE,
    });

    new cdk.CfnOutput(this, 'OmtRetrievalFunctionUrlExport', {
      value: omt_retrieval_lambda_url.url,
    })
  }
}
