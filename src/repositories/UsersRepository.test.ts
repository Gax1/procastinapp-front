import axios from "axios";
import { UserRepository } from "./UsersRepository";

describe("Given a userRepository", () => {
  const userRepo = new UserRepository("");
  const user = new FormData();
  user.append(
    "user",
    JSON.stringify({ username: "pepe", password: "1234", img: "asdasdasd" })
  );
  describe("When the method send registration is called", () => {
    test("Then it should call the axios.post method", async () => {
      axios.post = jest.fn().mockResolvedValue({ data: user });

      const data = await userRepo.sendRegistration(user);

      expect(data).toStrictEqual(user);
    });
    describe("When it return an error", () => {
      test("Then it should return an error", async () => {
        const error = "error";

        axios.post = jest.fn().mockRejectedValue(error);

        const data = await userRepo.sendRegistration(user);

        expect(data).toStrictEqual(error);
      });
    });
  });
});
