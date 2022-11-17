const isAlpha = /^[a-z]+$/gi;
const isNumeric = /^[0-9]+$/;

export const getString = string => string.match(/[A-Za-z]+/g)[0];
export const getNumber = string => string.match(/\d+/g)[0];

export const getFullSemester = semester => {
  const semesterMap = {
    f: "Fall",
    w: "Winter",
    s: "Spring",
    su: "Summer"
  };

  return semesterMap[semester] || semester;
};

export const getFullYear = year => (year.length === 2 ? `20${year}` : year);

export const parseString = (deptCourse, semYear) => {
  // ex: 2019Fall or 20Su etc
  const isValidYearSem = /\d{2}(\d\d){0,1}(\s){0,1}(fall|spring|winter|summer|su|f|w|s){1}$/gi;
  // ex: Fall2020 or Su18 etc
  const isValidSemYear = /(fall|spring|winter|summer|su|f|w|s){1}(\s){0,1}\d{2}(\d\d){0,1}$/gi;
  // ex: CS111 or CS:111 or CS-111 etc
  const isValidDeptCourse = /^[A-Za-z]{1,}(?:[\s|:|-]){0,1}[0-9]{1,}/g;

  if (
    isValidDeptCourse.test(deptCourse) &&
    (isValidSemYear.test(semYear) || isValidYearSem.test(semYear))
  ) {
    const dept = getString(deptCourse);
    const semester = getFullSemester(getString(semYear).toLowerCase());
    const course = getNumber(deptCourse);
    const year = getFullYear(getNumber(semYear));

    return { dept, course, semester, year };
  }
  return false;
};

/**
 * Method parseExtraString to parse the course string with three values
 * For Example:
 * 1. CS-111 Fall 2019
 * 2. CS 111 F19
 * 3. CS:111 2018 Fall
 * @param {*} value1 (Either departmentCourse or department)
 * @param {*} value2 (Either course number or year or semester)
 * @param {*} value3 (Either semesteryear or year or semester)
 */
export const parseExtraString = (value1, value2, value3) => {
  if (isAlpha.test(value1) && isNumeric.test(value2)) {
    return parseString(`${value1}${value2}`, value3);
  }
  return parseString(value1, `${value2}${value3}`);
};

export const validateSearchString = searchStr => {
  if (!isAlpha.test(searchStr)) {
    const brokenList = searchStr.split(" ");
    const listLength = brokenList.length;

    if (listLength <= 4) {
      switch (listLength) {
        case 2:
          // ex: CS111 F19 or CS:111 19Fall etc.
          return parseString(...brokenList);
        case 3:
          // ex: CS-111 Fall 2019 or CS 111 F19 etc.
          return parseExtraString(...brokenList);
        case 4:
          // ex: cs 111 Spring 20 or Math 1231 2020 Su etc.
          const [value1, value2, value3, value4] = brokenList;

          return parseString(`${value1}${value2}`, `${value3}${value4}`);
        default:
          break;
      }
    }
  }
  return false;
};
