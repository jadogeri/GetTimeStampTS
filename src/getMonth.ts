import { months } from "./months";

/**
 * Retrieves the month name corresponding to the given 0-indexed month index.
 * @param {number} index - The 0-indexed month index (0 for January, 11 for December).
 * @returns {string} The name of the month.
 * @throws {RangeError} If the index is not between 0 and 11.
 */ 
export const getMonth = (index) =>{
    if( index < 0 || index > 11){
        throw new RangeError("the index must be between 0 and 11");
    }
    if(!Number.isInteger(index)){
        throw new RangeError("the index cannot be of type float");

    }
    if(typeof index !== 'number'){
        throw new RangeError("the value is not a number");
    }
    if(index == undefined){
        throw new RangeError("the value is undefined");
    }
    return months[index]
}
    