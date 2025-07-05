
import { getMonth } from "../getMonth";


import  from '../getTimeStamp';
// src/getTimeStamp.test.ts
jest.mock("../getMonth");

describe('getTimeStamp() getTimeStamp method', () => {
    // Happy Paths
    describe('Happy paths', () => {
        beforeEach(() => {
            jest.clearAllMocks();
        });

        it('should return the correct formatted timestamp for a typical date and time', () => {
            // This test aims to verify that getTimeStamp returns the expected string for a standard date and time.
            const mockDate = new Date(2023, 4, 15, 13, 45, 30); // May 15, 2023, 13:45:30
            (getMonth as jest.Mock).mockReturnValue('May');
            jest.spyOn(global, 'Date').mockImplementation(() => mockDate as unknown as string);

            const result = getTimeStamp();

            expect(result).toBe('15-May-2023 at 13-45-30');
            expect(getMonth).toHaveBeenCalledWith(4);

            (global.Date as jest.Mock).mockRestore();
        });

        it('should call getMonth with the correct month index', () => {
            // This test aims to ensure getMonth is called with the correct zero-based month index.
            const mockDate = new Date(2022, 10, 8, 9, 5, 7); // November 8, 2022, 09:05:07
            (getMonth as jest.Mock).mockReturnValue('November');
            jest.spyOn(global, 'Date').mockImplementation(() => mockDate as unknown as string);

            getTimeStamp();

            expect(getMonth).toHaveBeenCalledWith(10);

            (global.Date as jest.Mock).mockRestore();
        });

        it('should format single-digit day, hour, minute, and second without leading zeros', () => {
            // This test aims to verify that single-digit values are not zero-padded in the output.
            const mockDate = new Date(2021, 0, 3, 4, 5, 6); // January 3, 2021, 04:05:06
            (getMonth as jest.Mock).mockReturnValue('January');
            jest.spyOn(global, 'Date').mockImplementation(() => mockDate as unknown as string);

            const result = getTimeStamp();

            expect(result).toBe('3-January-2021 at 4-5-6');

            (global.Date as jest.Mock).mockRestore();
        });
    });

    // Edge Cases
    describe('Edge cases', () => {
        beforeEach(() => {
            jest.clearAllMocks();
        });

        it('should handle the earliest possible date (Unix epoch start)', () => {
            // This test aims to verify correct formatting for the Unix epoch start date.
            const mockDate = new Date(1970, 0, 1, 0, 0, 0); // January 1, 1970, 00:00:00
            (getMonth as jest.Mock).mockReturnValue('January');
            jest.spyOn(global, 'Date').mockImplementation(() => mockDate as unknown as string);

            const result = getTimeStamp();

            expect(result).toBe('1-January-1970 at 0-0-0');

            (global.Date as jest.Mock).mockRestore();
        });

        it('should handle the last day of the year and last second', () => {
            // This test aims to verify correct formatting for December 31 at 23:59:59.
            const mockDate = new Date(2020, 11, 31, 23, 59, 59); // December 31, 2020, 23:59:59
            (getMonth as jest.Mock).mockReturnValue('December');
            jest.spyOn(global, 'Date').mockImplementation(() => mockDate as unknown as string);

            const result = getTimeStamp();

            expect(result).toBe('31-December-2020 at 23-59-59');

            (global.Date as jest.Mock).mockRestore();
        });

        it('should propagate error if Date constructor throws', () => {
            // This test aims to verify that an error thrown by Date is propagated.
            jest.spyOn(global, 'Date').mockImplementation(() => { throw new Error('Date error'); });

            expect(() => getTimeStamp()).toThrow('Date error');

            (global.Date as jest.Mock).mockRestore();
        });

        it('should propagate error if getMonth throws', () => {
            // This test aims to verify that an error thrown by getMonth is propagated.
            const mockDate = new Date(2022, 5, 10, 12, 0, 0);
            (getMonth as jest.Mock).mockImplementation(() => { throw new Error('getMonth error'); });
            jest.spyOn(global, 'Date').mockImplementation(() => mockDate as unknown as string);

            expect(() => getTimeStamp()).toThrow('getMonth error');

            (global.Date as jest.Mock).mockRestore();
        });
    });
});