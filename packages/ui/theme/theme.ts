import {
  extendTheme,
  withDefaultColorScheme,
  withDefaultProps,
} from "@chakra-ui/react";
import Button from "./button";
import Input from "./input";
import Link from "./link";
import PageTitle from "./pagetitle";
import Text from "./text";
import Select from "./select";
const FormLabel = {
  baseStyle: {
    fontWeight: "bold",
    fontSize: "small",
  },
};
// for the position backgrounds use this gradient
// bgGradient={`linear(white 1%, ${positionColors[children - 1] ?? 'white'} 99%)`}
export const theme = extendTheme(
  {
    components: { Button, Input, Link, Text, PageTitle, Select, FormLabel },
    colors: {
      brand: {
        red: "#E41C1C",
        green: "#0DCA09",
        blue: "#00223C",
        yellow: "#FFD000",
        gold: "#E5BB00",
        silver: "#C0C0C0",
        bronze: "#CD7F32",
        gradient: "linear(to-r, gray.300, #04223B)",
      },
    },
  },
  withDefaultColorScheme({ colorScheme: "brand" }),
  withDefaultProps({
    defaultProps: {
      colorScheme: "brand",
    },
  })
);
