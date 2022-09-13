import { rest } from "msw";
import { Task } from "../interfaces/interfaces";
import { dateFormater } from "../utils/dateFormater";

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
      data: new Error(),
    };

    const id: string | null = await req.url.searchParams.get("id");
    const date = await req.url.searchParams.get("date");

    const status = id === "" ? 404 : 200;
    let response: any = id === "" ? error : task;
    response = date === "" ? [] : task;

    return res(ctx.status(status), ctx.json({ tasks: response }));
  }),
  rest.post(`${apiUrl}/tasks/my-day`, async (req, res, ctx) => {
    const newtask = {
      date: dateFormater(new Date()),
      description: "test-description",
      id: "test-id",
      img: "test-img",
      importance: "very",
      owner: "test-idOwner",
      title: "title-test",
    };
    const taskWithOutDate = {
      date: "09/20/22",
      description: "test-description",
      id: "test-id",
      img: "test-img",
      importance: "very",
      owner: "test-idOwner",
      title: "title-test",
    };
    const error = {
      message: "Error",
    };

    const request: any = await req;

    const title = request._body.get("title");
    const description = request._body.get("description");

    let status = title === null ? 400 : 201;
    let response = title === null ? error : newtask;
    response = description === null ? newtask : taskWithOutDate;
    status = description === null ? status : 201;

    return res(ctx.status(status), ctx.json({ task: response }));
  }),
  rest.delete(`${apiUrl}/tasks/my-day`, async (req, res, ctx) => {
    const responseOk = { Message: "Tasks has been succesfully deleted" };
    const responseBad = new Error("Error deleting the task");

    const id: string | null = await req.url.searchParams.get("id");

    const status = id === "" ? 404 : 201;
    const response = id === "" ? responseBad : responseOk;

    return res(ctx.status(status), ctx.json(response));
  }),
  rest.get(`${apiUrl}/tasks/my-task/test-id`, async (req, res, ctx) => {
    const response = {
      myTask: {
        date: "09/05/2022",
        description: "test-description",
        id: "test-id",
        img: "test-img",
        importance: "very",
        owner: "test-idOwner",
        title: "title-test",
      },
    };

    return res(ctx.status(200), ctx.json(response));
  }),
  rest.get(`${apiUrl}/tasks/my-task/`, async (req, res, ctx) => {
    return res(ctx.status(404), ctx.json({ message: "Error in the request" }));
  }),
  rest.put(`${apiUrl}/tasks/my-day/`, async (req, res, ctx) => {
    const error = {
      message: "Error",
    };
    const editedTask = {
      date: dateFormater(new Date()),
      description: "test-description",
      id: "test-id",
      img: "test-img",
      importance: "very",
      owner: "test-idOwner",
      title: "title-test",
    };

    const request: any = await req;

    const title = request._body.get("title");
    let status = title === null ? 400 : 201;
    let response = title === null ? error : editedTask;
    return res(ctx.status(status), ctx.json({ task: response }));
  }),
];
