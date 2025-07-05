
import { months } from "../src/months";

import  {getMonth} from '../src/getMonth';
// src/getMonth.test.js
describe('getMonth() getMonth method', () => {
  // Happy path tests
  describe('Happy paths', () => {
    test('should return "January" for index 0', () => {
      // Test the function with index 0, expecting "January"
      expect(getMonth(0)).toBe(months[0]);
    });

    test('should return "December" for index 11', () => {
      // Test the function with index 11, expecting "December"
      expect(getMonth(11)).toBe(months[11]);
    });

    test('should return "June" for index 5', () => {
      // Test the function with index 5, expecting "June"
      expect(getMonth(5)).toBe(months[5]);
    });
  });

  // Edge case tests
  describe('Edge cases', () => {
    test('should throw RangeError for index -1', () => {
      // Test the function with index -1, expecting a RangeError
      expect(() => getMonth(-1)).toThrow(RangeError);
    });

    test('should throw RangeError for index 12', () => {
      // Test the function with index 12, expecting a RangeError
      expect(() => getMonth(12)).toThrow(RangeError);
    });

    test('should throw RangeError for non-integer index', () => {
      // Test the function with a non-integer index, expecting a RangeError
      expect(() => getMonth(5.5)).toThrow(RangeError);
    });

  });
});