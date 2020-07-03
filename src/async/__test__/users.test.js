import axios from "axios";
import getUsers from "../users";
jest.mock("axios");
describe("users", () => {
  test("should get users data with mock axios get", () => {
    // TODO 13: add async test with manual mock
    const users = [{ name: "Bob" }];
    const resp = { data: users };
    axios.get.mockResolvedValue(resp);
    getUsers().then(data => expect(data).toEqual(users));
  });
});
