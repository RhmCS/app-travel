const { getData } = require("../src/client/js/getData");

test("Testing the getData() function", () => {
  expect(getData).toBeDefined();
});
