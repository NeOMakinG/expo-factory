import { StatusBar } from 'expo-status-bar';
import React from 'react';
import * as Localization from 'expo-localization';
import { View } from 'react-native';
import i18n from 'i18n-js';
import * as firebase from 'firebase';
import { Provider } from 'react-redux';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import fr from './translations/fr-FR';
import en from './translations/en-GB';
import firebaseConfig from './constants/firebase';
//import store from './stores/store';

i18n.translations = {
    'fr-FR': fr,
    'en-GB': en,
};

i18n.locale = Localization.locale;

firebase.initializeApp(firebaseConfig);

export default function App(): React.ReactElement | null {
    const isLoadingComplete = useCachedResources();
    const colorScheme = useColorScheme();

    if (!isLoadingComplete) {
        return null;
    }

    return (
        <View>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
        </View>
    );
}
