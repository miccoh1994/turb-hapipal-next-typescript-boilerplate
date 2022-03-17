import Dotenv from "dotenv";
import Confidence from "@hapipal/confidence";
import Toys from "@hapipal/toys";
import Glue from "@hapi/glue";
// Pull .env into process.env
Dotenv.config({ path: `${__dirname}/.env` });

// Glue manifest as a confidence store
const manifest = new Confidence.Store({
  server: {
    host: "localhost",
    port: {
      $param: "PORT",
      $coerce: "number",
      $default: 3000,
    },
    debug: {
      $filter: "NODE_ENV",
      $default: {
        log: ["error", "start"],
        request: ["error"],
      },
      production: {
        request: ["implementation"],
      },
    },
  },
  register: {
    plugins: [
      {
        plugin: "../lib", // Main plugin
        options: {},
      },
      {
        plugin: {
          $filter: "NODE_ENV",
          $default: "@hapipal/hpal-debug",
          production: Toys.noop,
        },
      },
      {
        plugin: "@hapipal/schwifty",
        options: {
          $filter: { $env: "NODE_ENV" },
          $default: {
            migrateOnStart: false, //change back to false
            knex: {
              client: "mysql2",
              connection: {
                user: process.env.SQL_USER,
                port: process.env.SQL_PORT,
                host: process.env.SQL_HOST,
                database: process.env.SQL_DB,
                password: process.env.SQL_PASSWORD,
              },
            },
          },
          production: {
            migrateOnStart: true,
            knex: {
              client: "mysql2",
              connection: {
                user: process.env.SQL_USER,
                port: process.env.SQL_PORT,
                host: process.env.SQL_HOST,
                database: process.env.SQL_DB,
                password: process.env.SQL_PASSWORD,
              },
            },
          },
        },
      },
    ],
  },
});

export default manifest;
