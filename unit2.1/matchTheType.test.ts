
describe("value testing", () => {
    test("strings are string", () => {
      expect("Hello World").toBe("Hello World");
      expect(stringCheck("HI")).toBeTruthy();
      expect(stringCheck("This is programming")).toBeTruthy();
      expect(stringCheck(456)).toBeFalsy();
    });
    test("numbers are numbers", () => {
      expect(3.14159).toBe(3.14159);
      expect(numberCheck(3.14)).toBeTruthy();
      expect(numberCheck(10+5)).toBeTruthy();
      expect(numberCheck("Hello World")).toBeFalsy();
    });
    test("booleans are booleans", () => {
      expect(false).toBe(false);
      expect(booleanCheck(true)).toBeTruthy();
      expect(booleanCheck(10<5)).toBeTruthy();
      expect(booleanCheck("false")).toBeFalsy();
    });
  });
  
  function numberCheck(x) {
    return typeof x == "number";
  }
  function stringCheck(x) {
    return typeof x == "string";
  }
  function booleanCheck(x) {
    return typeof x == "boolean";
  }