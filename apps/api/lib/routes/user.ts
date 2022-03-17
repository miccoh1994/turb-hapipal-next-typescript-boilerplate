import { ServerRoute } from "@hapi/hapi";

const userRoutes: ServerRoute = {
  path: "/",
  method: "GET",
  handler: async (req, h) => {
    const { User } = req.models();
    const data = await User.query().select("*");

    return h.response(data);
  },
};

export default userRoutes;
