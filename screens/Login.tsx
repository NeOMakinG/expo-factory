import React from 'react';
import { StyleSheet, KeyboardAvoidingView, Platform, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { View, TextInput, Button } from '../components/Themed';
import Global from '../constants/Global';

export default function Login({ navigation }: any): React.ReactElement {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    return (
        <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'} style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.inner}>
                    <TextInput placeholder="Username" value={username} onChangeText={setUsername} />
                    <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
                    <Button title="Sign in" onPress={() => console.log(username, password)} />
                    <Button
                        title="Retour"
                        style={{ backgroundColor: 'transparent' }}
                        onPress={() => navigation.goBack()}
                    />
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: Global.container,
    inner: Global.inner,
});
