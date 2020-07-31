import * as React from 'react';

import { Text, TextProps } from './Themed';

export default function MonoText(props: TextProps): React.ReactElement {
    const { style } = props;

    return <Text {...props} style={[style, { fontFamily: 'space-mono' }]} />;
}
