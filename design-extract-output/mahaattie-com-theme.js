// React Theme — extracted from https://www.mahaattie.com
// Compatible with: Chakra UI, Stitches, Vanilla Extract, or any CSS-in-JS

/**
 * TypeScript type definition for this theme:
 *
 * interface Theme {
 *   colors: {
    primary: string;
    secondary: string;
    background: string;
    foreground: string;
    neutral50: string;
    neutral100: string;
    neutral200: string;
    neutral300: string;
 *   };
 *   fonts: {
    body: string;
    mono: string;
 *   };
 *   fontSizes: {
    '10': string;
    '16': string;
    '48': string;
    '54.4': string;
    '46.72': string;
    '40.8525': string;
    '26.752': string;
    '26.5728': string;
    '25.216': string;
    '22.144': string;
    '19.072': string;
 *   };
 *   space: {
    '1': string;
    '32': string;
    '36': string;
    '64': string;
    '71': string;
    '84': string;
    '92': string;
 *   };
 *   radii: {
    xs: string;
    full: string;
 *   };
 *   shadows: {
    sm: string;
 *   };
 *   states: {
 *     hover: { opacity: number };
 *     focus: { opacity: number };
 *     active: { opacity: number };
 *     disabled: { opacity: number };
 *   };
 * }
 */

export const theme = {
  "colors": {
    "primary": "#1d2944",
    "secondary": "#e4e8ec",
    "background": "#1d2944",
    "foreground": "#000000",
    "neutral50": "#000000",
    "neutral100": "#8492ae",
    "neutral200": "#ffffff",
    "neutral300": "#c1c1c1"
  },
  "fonts": {
    "body": "'aktiv-grotesk', sans-serif",
    "mono": "'ibm-plex-mono', monospace"
  },
  "fontSizes": {
    "10": "10px",
    "16": "16px",
    "48": "48px",
    "54.4": "54.4px",
    "46.72": "46.72px",
    "40.8525": "40.8525px",
    "26.752": "26.752px",
    "26.5728": "26.5728px",
    "25.216": "25.216px",
    "22.144": "22.144px",
    "19.072": "19.072px"
  },
  "space": {
    "1": "1px",
    "32": "32px",
    "36": "36px",
    "64": "64px",
    "71": "71px",
    "84": "84px",
    "92": "92px"
  },
  "radii": {
    "xs": "2px",
    "full": "300px"
  },
  "shadows": {
    "sm": "rgb(128, 128, 128) 0px 0px 5px 0px"
  },
  "states": {
    "hover": {
      "opacity": 0.08
    },
    "focus": {
      "opacity": 0.12
    },
    "active": {
      "opacity": 0.16
    },
    "disabled": {
      "opacity": 0.38
    }
  }
};

// MUI v5 theme
export const muiTheme = {
  "palette": {
    "primary": {
      "main": "#1d2944",
      "light": "hsl(222, 40%, 34%)",
      "dark": "hsl(222, 40%, 10%)"
    },
    "secondary": {
      "main": "#e4e8ec",
      "light": "hsl(210, 17%, 95%)",
      "dark": "hsl(210, 17%, 76%)"
    },
    "background": {
      "default": "#1d2944",
      "paper": "#e4e8ec"
    },
    "text": {
      "primary": "#000000",
      "secondary": "#e4e8ec"
    }
  },
  "typography": {
    "fontFamily": "'aktiv-grotesk', sans-serif",
    "h1": {
      "fontSize": "40.8525px",
      "fontWeight": "600",
      "lineHeight": "45.8502px"
    },
    "h2": {
      "fontSize": "26.5728px",
      "fontWeight": "600",
      "lineHeight": "26.5728px"
    }
  },
  "shape": {
    "borderRadius": 2
  },
  "shadows": [
    "rgb(128, 128, 128) 0px 0px 5px 0px"
  ]
};

export default theme;
