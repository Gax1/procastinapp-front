import { rest } from "msw";
import { Task } from "../interfaces/interfaces";

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
  rest.get(`${apiUrl}/tasks/my-day`, async (req, res, ctx) => {
    const task: Task[] = [
      {
        date: "09/05/2022",
        description: "test-description",
        id: "test-id",
        img: "test-img",
        importance: "very",
        owner: "test-idOwner",
        title: "title-test",
      },
    ];

    const error = {
      message: "Error-test",
    };

    const id = await req.url.searchParams.get("id");

    const status = id === "" ? 404 : 200;
    const response = id === "" ? error : task;

    return res(ctx.status(status), ctx.json(response));
  }),
];
