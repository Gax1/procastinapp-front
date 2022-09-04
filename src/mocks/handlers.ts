import { rest } from "msw";

const apiUrl = process.env.REACT_APP_APIURL;

export const handlers = [
  rest.post(`${apiUrl}/users/login`, async (req, res, ctx) => {
    const mockTokenResponse = {
      user: {
        username: "test-user",
        id: "test-id",
        token: "test-token",
      },
    };

    const error = {
      message: "user or password invalid",
    };

    const { username } = await req.json();
    const status = username === "" ? 400 : 201;
    const response = username === "" ? error : mockTokenResponse;

    return res(ctx.status(status), ctx.json(response));
  }),
];
