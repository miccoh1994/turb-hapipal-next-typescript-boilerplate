import { Plugin } from "@hapi/hapi";
import HauteCouture from "@hapipal/haute-couture";

import Package from "../package.json";

export const plugin: Plugin<{}> = {
  pkg: Package,
  register: async (server, options) => {
    // Custom plugin code can go here

    await HauteCouture.compose(server, options);
  },
};
