
import { getMonth } from "../src/getMonth";
import { getTimeStamp } from '../src/getTimeStamp';


// Import the function to test
// Mock the getMonth function
jest.mock("../src/getMonth", () => {
  const originalModule = jest.requireActual("../src/getMonth");
  return {
    __esModule: true,
    ...originalModule,
    getMonth: jest.fn(),
  };
});
describe('getTimeStamp() getTimeStamp method', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Happy paths', () => {
    it('should return the correct timestamp for a typical date', () => {
      // Mock the getMonth function to return a specific month
      getMonth.mockReturnValue('January');

      // Mock the Date object
      const mockDate = new Date(2023, 0, 15, 10, 30, 45);
      jest.spyOn(global, 'Date').mockImplementation(() => mockDate);

      const result = getTimeStamp();
      expect(result).toBe('15-January-2023 at 10-30-45');
    });

  });


});