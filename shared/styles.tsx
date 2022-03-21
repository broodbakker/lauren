import { css } from 'styled-components';

import { grommet } from "grommet/themes";
import { deepMerge } from 'grommet/utils';

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  mobile: "600px",
  tablet: '1000px',
  laptop: '1200px',
  laptopL: '1440px',
  desktop: '2560px'
}

export const customTheme = deepMerge(grommet, {
  global: {
    breakpoints: {
      small: {
        value: 600
      },
      medium: {
        value: 1000
      },
      large: {
        value: 1200
      },
    },
    colors: {
      // Setting new colors
      brand: '#00C781',
      primary: '#00C781',
      primaryDark: "#00873D",
      primaryLight: "#effff9",
      secondary: "#F1B33C",
      tertiary: "#00739D",
      iconColor: "dark-2",
      iconColorLight: "light-2",
      buttonColor: "dark-2",
      headingColor: "dark-2",
      fontColor: "#343434",
      navbarColor: "light-1",

      borderColor: "light-4",
      bgProductColor: "#f8fffc",
      bgGreen: "#b1ffe3",
      // backgroundSearch: "#faf6fe",
      // secondaryLight: "#faf6fe",
      // tertiary: '#DDDDDD',
      // fontColor: "#343434",
      // linkColor: "#111",
      // HeadingColor: "#222222",
      // borderColor: "#EDEDED",
      // borderColorLight: "#adadad",
      // borderColorDark: "#222222",
      // backgroundGrey: "#EDEDED",
      // backgroundNavColor: "#2503521f",
      // focus: '#F1B33C',
      // backgroundDark: "#222222",


      // focus: "teal",
      // myColor: "#",
      // "background-contrast": {
      //   dark: "#FFFFFF14",
      //   light: "white"
      // },
      // "active-background": "background-contrast",
      // "active-text": "red",
      // icon: "text",
      // text: {
      //   dark: "white",
      //   light: "purple"
      // }
    }
  },
  button: {
    default: {
      color: "white",
      border: undefined,
      font: {
        weight: 700,
      },
      padding: {
        horizontal: "10px",
        vertical: "10px"
      }
    },
    secondary: {
      color: "white",
      border: undefined,
      font: {
        weight: 700,
      },
      padding: {
        horizontal: "10px",
        vertical: "10px"
      }
    },
    size: {
      small: {
        border: { radius: "0px", }
      },
      medium: {
        border: { radius: "0px", }
      },
      large: {
        border: { radius: "0px", }
      }
    },
    hover: {
      default: {
        background: {
          color: "secondary"
        },
        color: "white"
      },
      secondary: {
        background: {
          color: "primary"
        },
        color: "white"
      },

    },
  },
});


export const GLOBALSTYLE = {
  breakpoint: {
    maxMobileS: `(max-width: ${size.mobileS})`,
    maxmobileM: `(max-width: ${size.mobileM})`,
    maxmobileL: `(max-width: ${size.mobileL})`,
    maxmobile: `(max-width: ${size.mobile})`,
    maxtablet: `(max-width: ${size.tablet})`,
    maxlaptop: `(max-width: ${size.laptop})`,
    maxlaptopL: `(max-width: ${size.laptopL})`,
    maxdesktop: `(max-width: ${size.desktop})`,
    maxdesktopL: `(max-width: ${size.desktop})`,
    minMobileS: `(min-width: ${size.mobileS})`,
    minmobileM: `(min-width: ${size.mobileM})`,
    minmobileL: `(min-width: ${size.mobileL})`,
    minmobile: `(min-width: ${size.mobile})`,
    mintablet: `(min-width: ${size.tablet})`,
    minlaptop: `(min-width: ${size.laptop})`,
    minlaptopL: `(min-width: ${size.laptopL})`,
    mindesktop: `(min-width: ${size.desktop})`,
    mindesktopL: `(min-width: ${size.desktop})`
  },

  colors: {
    // Setting new colors
    brand: '#250352',
    primary: '#250352',
    secondary: "#F1B33C",
    secondaryLight: "#f8d99d",
    tertiary: '#DDDDDD',
    fontColor: "#343434",
    linkColor: "#111",
    HeadingColor: "#222222",
    borderColor: "#EDEDED",
    backgroundGrey: "#EDEDED",
    backgroundNavColor: "#2503521f",

  }
}

// Global style variables
export const background = {
  app: '#F6F9FC',
  appInverse: '#7A8997',
  positive: '#E1FFD4',
  negative: '#FEDED2',
  warning: '#FFF5CF',
};

export const color = {
  // Palette
  primary: '#250352', // coral
  secondary: '#F1B33C',
  secondaryLight: "#f8d99d",// ocean
  tertiary: '#DDDDDD',
  orange: '#FC521F',
  gold: '#FFAE00',
  green: '#66BF3C',
  seafoam: '#37D5D3',
  purple: '#6F2CAC',
  ultraviolet: '#2A0481',

  // Monochrome
  lightest: '#FFFFFF',
  lighter: '#F8F8F8',
  light: '#F3F3F3',
  mediumlight: '#EEEEEE',
  medium: '#DDDDDD',
  mediumdark: '#999999',
  dark: '#666666',
  darker: '#444444',
  darkest: '#333333',
  border: 'rgba(0,0,0,.1)',
  // Status
  positive: '#66BF3C',
  negative: '#FF4400',
  warning: '#E69D00',
};

export const spacing = {
  padding: {
    small: 10,
    medium: 20,
    large: 30,
  },
  borderRadius: {
    small: 5,
    default: 10,
  },
};

export const typography = {
  type: {
    primary: '"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
    code: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
  },
  weight: {
    regular: '400',
    bold: '700',
    extrabold: '800',
    black: '900',
  },
  size: {
    s1: '12',
    s2: '14',
    s3: '16',
    m1: '20',
    m2: '24',
    m3: '28',
    l1: '32',
    l2: '40',
    l3: '48',
    code: '90',
  },
};

export const breakpoint = 600;
export const pageMargin = 5.55555;

export const pageMargins = css`
  padding: 0 ${spacing.padding.medium}px;
  @media (min-width: ${breakpoint * 1}px) {
    margin: 0 ${pageMargin * 1}%;
  }
  @media (min-width: ${breakpoint * 2}px) {
    margin: 0 ${pageMargin * 2}%;
  }
  @media (min-width: ${breakpoint * 3}px) {
    margin: 0 ${pageMargin * 3}%;
  }
  @media (min-width: ${breakpoint * 4}px) {
    margin: 0 ${pageMargin * 4}%;
  }
`;


