import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import fr from './translations/fr-FR';
import en from './translations/en-GB';
import * as firebase from 'firebase';
import firebaseConfig from './constants/firebase';

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
        <SafeAreaProvider>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
        </SafeAreaProvider>
    );
}
