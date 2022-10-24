import { Camera } from "expo-camera";
import { Audio } from "expo-av";
import { View, Button, SafeAreaView } from "react-native";
import { launchCameraAsync, useCameraPermissions, useMicroPhonePermissions, PermissionStatus } from 'expo-image-picker';

export default () => {
    const [cameraPermissionInformation, requestPermission] = useCameraPermissions();
    const [microPhonePermissionInformation, requestpermission_MIC] = useMicroPhonePermissions();

    async function verifyPermissions() {
        console.log(cameraPermissionInformation.status);
        if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
            const permissionResponse = await requestPermission();

            return permissionResponse.granted;
        }

        if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
            Alert.alert("Insufficient Permissions!", "You need to grant camera permissions to use this app.");
            return false;
        }

        return true;
    }

    async function takeImageHandler() {
        const hasPermission = await verifyPermissions();

        if (!hasPermission) {
            return;
        }

        const image = await launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.5
        });

        //setPickedImage(image.uri);
        //onTakeImage(image.uri);
    }


    async function verifyPermissions_MIC() {
        console.log(microPhonePermissionInformation.status);
        if (microPhonePermissionInformation.status === PermissionStatus.UNDETERMINED) {
            const permissionResponse = await requestpermission_MIC();

            return permissionResponse.granted;
        }

        if (microPhonePermissionInformation.status === PermissionStatus.DENIED) {
            Alert.alert("Insufficient Permissions!", "You need to grant camera permissions to use this app.");
            return false;
        }

        return true;
    }

    async function reacordHandler_MIC() {
        const hasPermission = await verifyPermissions_MIC();

        if (!hasPermission) {
            return;
        }

    }


    return (
        <SafeAreaView>
            <View>
                <Button
                    onPress={() => {
                        Camera.requestCameraPermissionsAsync().then((status) => {
                            // audio permission request is only shown for half a second in build mode and is automatically denied permission
                            Audio.requestPermissionsAsync().then((status) => {
                                console.log("ok");
                            });
                        });
                    }}
                    title="Test"
                />

                <Button title="Take Picture" onPress={takeImageHandler}/>
                <Button title="Recorde" onPress={reacordHandler_MIC}/>
            </View>
        </SafeAreaView>
    );
};
