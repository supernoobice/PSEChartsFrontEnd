
/**
 * It abbreviates the correct letters for thousands (k) millions (M) etc
 * @param {number} number 
 */
export const abbreviateNumber = (number) => {
    var SI_SYMBOL = ["", "k", "M", "B", "T", "P", "E"];

    // what tier? (determines SI symbol)
    var tier = Math.log10(number) / 3 | 0;

    // if zero, we don't need a suffix
    if(tier == 0) return number;

    // get suffix and determine scale
    var suffix = SI_SYMBOL[tier];
    var scale = Math.pow(10, tier * 3);

    // scale the number
    var scaled = number / scale;

    // format number and add suffix
    return scaled.toFixed(1) + suffix;
}

/**
 * Formats number with commas and decimal places
 * @param {number} value 
 */
export const numberFormat = (value) => {
    return parseFloat(value).toFixed(2);
}