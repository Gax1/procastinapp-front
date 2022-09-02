import axios from "axios";
import { UserRepository } from "./UsersRepository";

describe("Given a sendLogin method", () => {
  const apiUrl = process.env.REACT_APP_APIURL as string;

  describe("When its called with an user", () => {
    test("Then it should return a status 200", async () => {
      const mockTokenResponse = {
        user: {
          token: "test-token",
        },
      };
      const loginUser = {
        username: "",
        password: "test-password",
      };
      const repoUsers = new UserRepository(apiUrl);

      const data = await repoUsers.sendLogin(loginUser);

      await expect(data).toStrictEqual(mockTokenResponse);
    });
  });
});
describe("Given a userRepository", () => {
  const user = new FormData();
  user.append(
    "user",
    JSON.stringify({ username: "pepe", password: "1234", img: "asdasdasd" })
  );
  describe("When the method send registration is called", () => {
    test("Then it should call the axios.post method", async () => {
      const userRepo = new UserRepository("");
      axios.post = jest.fn().mockResolvedValue({ data: user });

      const data = await userRepo.sendRegistration(user);

      expect(data).toStrictEqual(user);
    });
    describe("When it return an error", () => {
      test("Then it should return an error", async () => {
        const userRepo = new UserRepository("");
        const error = "error";

        axios.post = jest.fn().mockRejectedValue(error);

        const data = await userRepo.sendRegistration(user);

        expect(data).toStrictEqual(error);
      });
    });
  });
});
