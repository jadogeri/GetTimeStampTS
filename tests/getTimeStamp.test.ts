
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
      (getMonth as jest.Mock).mockReturnValue('January');

      // Mock the Date object
      const mockDate = new Date(2023, 0, 15, 10, 30, 45);
      jest.spyOn(global, 'Date').mockImplementation(() => mockDate);

      const result = getTimeStamp();
      expect(result).toBe('15-January-2023 at 10-30-45');
    });

 it('should call getMonth with the correct month index', () => {
      // This test aims to ensure getMonth is called with the correct zero-based month index.
      const mockDate = new Date(2022, 0, 8, 9, 5, 7); // November 8, 2022, 09:05:07
      (getMonth as unknown as jest.Mock).mockReturnValue('January');
      jest.spyOn(global, 'Date').mockImplementation(() => mockDate as unknown as Date);

      getTimeStamp();

      expect(getMonth).toHaveBeenCalledWith(0);

      (global.Date as unknown as jest.Mock).mockRestore();
  });

    it('should propagate error if Date constructor throws', () => {
        // This test aims to verify that an error thrown by Date is propagated.
        jest.spyOn(global, 'Date').mockImplementation(() => { throw new Error('Date error'); });

        expect(() => getTimeStamp()).toThrow('Date error');

        (global.Date as unknown  as jest.Mock).mockRestore();
    });

      it('should propagate error if getMonth throws', () => {
          // This test aims to verify that an error thrown by getMonth is propagated.
          const mockDate = new Date(2022, 5, 10, 12, 0, 0);
          (getMonth as jest.Mock).mockImplementation(() => { throw new Error('getMonth error'); });
          jest.spyOn(global, 'Date').mockImplementation(() => mockDate as unknown as Date);

          expect(() => getTimeStamp()).toThrow('getMonth error');

          (global.Date as unknown as jest.Mock).mockRestore();
      });
  });

});