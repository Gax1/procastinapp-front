import { rest } from "msw";

const apiUrl = process.env.REACT_APP_APIURL;

const mockTokenResponse = {
  user: {
    token: "test-token",
  },
};

export const handlers = [
  rest.post(`${apiUrl}/users/login`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockTokenResponse));
  }),
];
