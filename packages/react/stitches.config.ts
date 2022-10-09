import { createStitches } from '@stitches/react';

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } = createStitches({
    media: {
        bp1: '(min-width: 480px)',
    },
    theme: {
        colors: {
            gray400: 'gainsboro',
            gray500: 'lightgray',
        },
    },
    utils: {
        // marginX: (value: CSSProperties['marginLeft']) => ({ marginLeft: value, marginRight: value }),
    },
});
