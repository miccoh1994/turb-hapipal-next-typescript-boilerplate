const Button = {
  // Styles for the base style
  baseStyle: {
    borderRadius: '8px',
    background: 'brand.yellow',
    backgroundColor: 'brand.yellow',
    borderColor: 'brand.yellow',
    color: 'brand.blue',
    height: '45px',
    lineHeight: '45px',
    textAlign: 'center',
    minWidth: '130px',
    _hover: {
      background: 'brand.blue',
      backgroundColor: 'brand.blue',
      color: 'brand.yellow',
      border: '1px solid',
    },
  },
  // Styles for the visual style variations
  variants: {
    inverse: {
      background: 'brand.blue',
      backgroundColor: 'brand.blue',
      color: 'brand.yellow',
      border: '1px solid',
      height: '45px',
      _hover: {
        background: 'brand.yellow',
        backgroundColor: 'brand.yellow',
        color: 'brand.blue',
      },
    },
    inverseWhite: {
      background: 'white',
      backgroundColor: 'white',
      color: 'brand.blue',
      borderColor: 'brand.blue',
      border: '1px solid',
      height: '45px',
      _hover: {
        background: 'brand.blue',
        backgroundColor: 'brand.blue',
        color: 'white',
      },
    },
    danger: {
      background: 'red',
      backgroundColor: 'red',
      color: 'white',
      colorScheme: 'red',
      _hover: {
        background: 'red.200',
        backgroundColor: 'red.200',
        color: 'white',
      },
    },
  },
  // The default `size` or `variant` values
};

export default Button;
