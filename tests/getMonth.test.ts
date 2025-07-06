
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

    it('should return the correct month for a middle index (e.g., 5)', () => {
      // Test that the function returns the correct month for a middle index
      expect(getMonth(5)).toBe(months[5]);
    });

    it('should return the correct month for all valid indices from 0 to 11', () => {
      // Test that the function returns the correct month for all valid indices
      for (let i = 0; i <= 11; i++) {
        expect(getMonth(i)).toBe(months[i]);
      }
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

    it('should throw RangeError if index is less than 0', () => {
      // Test that the function throws a RangeError for index less than 0
      expect(() => getMonth(-1)).toThrow(RangeError);
      expect(() => getMonth(-1)).toThrow('the index must be between 0 and 11');
    });

    it('should throw RangeError if index is greater than 11', () => {
      // Test that the function throws a RangeError for index greater than 11
      expect(() => getMonth(12)).toThrow(RangeError);
      expect(() => getMonth(12)).toThrow('the index must be between 0 and 11');
    });

    it('should throw RangeError if index is a float within range', () => {
      // Test that the function throws a RangeError for a float index within valid range
      expect(() => getMonth(5.5)).toThrow(RangeError);
      expect(() => getMonth(5.5)).toThrow('the index cannot be of type float');
    });

    it('should throw RangeError if index is a float out of range', () => {
      // Test that the function throws a RangeError for a float index out of valid range
      expect(() => getMonth(-0.1)).toThrow(RangeError);
      expect(() => getMonth(-0.1)).toThrow('the index must be between 0 and 11');
    });

    it('should throw RangeError if index is not a number (string)', () => {
      // Test that the function throws a RangeError for a string input
      // @ts-ignore
      expect(() => getMonth('5')).toThrow(RangeError);
      // @ts-ignore
      expect(() => getMonth('5')).toThrow('the value is not a number');
    });

    it('should throw RangeError if index is not a number (boolean)', () => {
      // Test that the function throws a RangeError for a boolean input
      // @ts-ignore
      expect(() => getMonth(true)).toThrow(RangeError);
      // @ts-ignore
      expect(() => getMonth(true)).toThrow('the value is not a number');
    });

    it('should throw RangeError if index is NaN', () => {
      // Test that the function throws a RangeError for NaN input
      // @ts-ignore
      expect(() => getMonth(NaN)).toThrow(RangeError);
      // @ts-ignore
      expect(() => getMonth(NaN)).toThrow('the index must be between 0 and 11');
    });

    it('should throw RangeError if index is Infinity', () => {
      // Test that the function throws a RangeError for Infinity input
      // @ts-ignore
      expect(() => getMonth(Infinity)).toThrow(RangeError);
      // @ts-ignore
      expect(() => getMonth(Infinity)).toThrow('the index must be between 0 and 11');
    });

    it('should throw RangeError if index is -Infinity', () => {
      // Test that the function throws a RangeError for -Infinity input
      // @ts-ignore
      expect(() => getMonth(-Infinity)).toThrow(RangeError);
      // @ts-ignore
      expect(() => getMonth(-Infinity)).toThrow('the index must be between 0 and 11');
    });  

  });
});