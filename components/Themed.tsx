import * as React from 'react';
import {
    Text as DefaultText,
    View as DefaultView,
    TextInput as DefaultTextInput,
    TouchableOpacity as DefaultButton,
} from 'react-native';

import Colors from '../constants/Colors';
import Global from '../constants/Global';
import useColorScheme from '../hooks/useColorScheme';

export function useThemeColor(props: { light?: string; dark?: string }, colorName: any) {
    const theme = useColorScheme();
    const colorFromProps = props[theme];

    if (colorFromProps) {
        return colorFromProps;
    }

    return Colors[theme][colorName];
}

type ThemeProps = {
    lightColor?: string;
    darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];
export type ButtonProps = ThemeProps & DefaultButton['props'];
export type TextInputProps = ThemeProps & DefaultTextInput['props'];

export function Text(props: TextProps) {
    const { style, lightColor, darkColor, ...otherProps } = props;
    const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

    return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
    const { style, lightColor, darkColor, ...otherProps } = props;
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

    return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export function Button(props: ButtonProps) {
    const { style, title, ...otherProps } = props;
    const customBackgroundColor = useThemeColor({ light: '#000', dark: '#fff' }, 'background');
    let color = useThemeColor({}, 'buttonText');
    let isText = false;

    if (style && style['backgroundColor'] === 'transparent') {
        color = useThemeColor({}, 'text');
        isText = true;
    }

    return (
        <DefaultButton
            style={[{ backgroundColor: customBackgroundColor, color }, !isText ? Global.button : null, style]}
            {...otherProps}
        >
            <Text style={[{ color }, Global.buttonText]}>{title}</Text>
        </DefaultButton>
    );
}

export function TextInput(props: TextInputProps) {
    const { style, lightColor, darkColor, ...otherProps } = props;
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');
    const borderColor = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
    const color = useThemeColor({}, 'text');

    return <DefaultTextInput style={[{ backgroundColor, borderColor, color }, Global.input, style]} {...otherProps} />;
}
