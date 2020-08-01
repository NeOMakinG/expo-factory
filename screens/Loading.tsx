import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';

export default function Loading({ navigation }): React.ReactElement {
    useEffect(() => {
        navigation.navigate('Root');
    }, []);

    return (
        <View style={styles.container}>
            <Text>Loading</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
