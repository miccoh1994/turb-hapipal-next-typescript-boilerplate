import Glue from "@hapi/glue";
import Exiting from "exiting";
import Manifest from "./manifest";

export const deployment = async ({ start }: { start?: boolean }) => {
  const manifest = Manifest.get("/", process.env) as unknown as Glue.Manifest;
  const server = await Glue.compose(manifest, { relativeTo: __dirname });
  if (start) {
    await Exiting.createManager(server).start();
    server.log(["start"], `Server started at ${server.info.uri}`);
    return server;
  }

  await server.initialize();

  return server;
};

if (require.main === module) {
  deployment({ start: true });

  process.on("unhandledRejection", (err) => {
    throw err;
  });
}
