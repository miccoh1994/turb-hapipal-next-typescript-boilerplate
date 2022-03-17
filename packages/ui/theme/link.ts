const Link = {
  // Styles for the base style
  baseStyle: {
    borderRadius: '8px',
    background: 'white',
    backgroundColor: 'white',
    color: 'brand.blue',
    height: '45px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
  },
  // Styles for the visual style variations
  variants: {
    selected: {
      color: 'brand.yellow',
    },
    inline: {
      height: 'auto',
      width: 'max-content',
      margin: 0,
      color: 'blue',
      display: 'unset',
      transitionProperty: 'common',
      transitionDuration: 'fast',
      transitionTimingFunction: 'ease-out',
      cursor: 'pointer',
      textDecoration: 'none',
      outline: 'none',
      _hover: {
        textDecoration: 'underline',
      },
      _focus: {
        boxShadow: 'outline',
      },
    },
    button: {
      borderRadius: '8px',
      background: 'brand.yellow',
      backgroundColor: 'brand.yellow',
      borderColor: 'brand.yellow',
      color: 'brand.blue',
      _hover: {
        background: 'brand.blue',
        backgroundColor: 'brand.blue',
        color: 'brand.yellow',
        border: '1px solid',
        borderColor: 'brand.yellow',
      },
      height: '45px',
      lineHeight: '100%',
      textAlign: 'center',
      minWidth: '130px',
    },
    'button-inverse': {
      borderRadius: '8px',
      background: 'brand.blue',
      backgroundColor: 'brand.blue',
      border: '1px solid',
      borderColor: 'brand.yellow',
      color: 'brand.yellow',
      _hover: {
        background: 'brand.yellow',
        backgroundColor: 'brand.yellow',
        color: 'brand.blue',
      },
      height: '45px',
      lineHeight: '100%',
      textAlign: 'center',
      minWidth: '130px',
    },
  },
  // The default `size` or `variant` values
};

export default Link;
