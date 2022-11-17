import {
    getString,
    getNumber,
    getFullSemester,
    getFullYear,
    validateSearchString,
    parseString,
    parseExtraString
  } from "../Utils/Helper";
  
  describe("Testing Helper.js", () => {
    it("getString returns only string in the given string", () => {
      expect(getString("Fall2019")).toEqual("Fall");
      expect(getString("2020Spring")).toEqual("Spring");
      expect(getString("2020-Spring")).toEqual("Spring");
    });
  
    it("getNumber returns only number in the given string", () => {
      expect(getNumber("Fall2019")).toEqual("2019");
      expect(getNumber("2020Winter")).toEqual("2020");
    });
  
    it("parses Semester and Year String", () => {
      expect(getFullSemester("f")).toBe("Fall");
      expect(getFullSemester("Summer")).toBe("Summer");
      expect(getFullSemester("Fall")).toBe("Fall");
      expect(getFullYear("20")).toBe("2020");
      expect(getFullYear("2020")).toBe("2020");
    });
  
    it("validates given string", () => {
      expect(validateSearchString("Hello world")).toBeFalsy();
      expect(validateSearchString("CS111 F19")).toBeTruthy();
      expect(validateSearchString("CS 111 F19")).toBeTruthy();
      expect(validateSearchString("cs:111 fall")).toBeFalsy();
      const expectedObject = {
        dept: "CS",
        course: "111",
        year: "2020",
        semester: "summer"
      };
      expect(validateSearchString("CS 111 20 Summer")).toEqual(expectedObject);
    });
  
    it("parse course String and return false when string is invalid", () => {
      expect(parseString("cs", "F19")).toBeFalsy();
      expect(parseString("Hello", "World")).toBeFalsy();
      expect(parseString("125", "Fall2019")).toBeFalsy();
      expect(parseString("CS:111", "Fall")).toBeFalsy();
      expect(parseString("HelloWorld", "")).toBeFalsy();
    });
  
    it("parse course String and return object when string is valid", () => {
      expect(parseString("cs111", "F19")).toBeTruthy();
      const expectedObject = {
        course: "111",
        dept: "cs",
        semester: "fall",
        year: "2019"
      };
      expect(parseString("cs:111", "2019Fall")).toEqual(expectedObject);
      expect(parseString("Math203", "Su20")).toBeTruthy();
    });
  
    it("parse extra string", () => {
      expect(parseExtraString("CS111", "2019", "Fall")).toBeTruthy();
      expect(parseExtraString("Math", "1234", "F20")).toBeTruthy();
      expect(parseExtraString("Hello", "world", "")).toBeFalsy();
    });
  });
  