#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { OmtAwsStack } from '../lib/omt-aws-stack';

const app = new cdk.App();

new OmtAwsStack(app, 'OmtAwsStack', {
  env: { account: '520379171860', region: 'ap-southeast-1' },
});