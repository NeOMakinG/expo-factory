import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import { useFocusEffect } from '@react-navigation/native';

export default function Loading({ navigation }): React.ReactElement {
    useFocusEffect(
        React.useCallback(() => {
            navigation.navigate('Root');
        }, []),
    );

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
