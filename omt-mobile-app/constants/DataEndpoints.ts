export const RetrievalEndpoint = "https://hroo3yirudk7233rzbwd4w44zu0nrrna.lambda-url.ap-southeast-1.on.aws/"
export const UpdateEndpoint = "https://kreyl3bt3j6etis7jychh3htqe0qvlqi.lambda-url.ap-southeast-1.on.aws/"
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getData = async (omtData: any, setOmtData: (arg0: any) => void) => {
    try {
        const jsonValue = await AsyncStorage.getItem('omtData');
        const jsonValueNotNull = jsonValue != null ? JSON.parse(jsonValue) : null;
        if (JSON.stringify(jsonValueNotNull) !== JSON.stringify(omtData)) {
            setOmtData(jsonValueNotNull);
            console.log("Modal data updated.")
        }
    } catch (e) {
        console.log(e)
    }
};