function checkNumber(number, errorMessage) {
    if (typeof number !== 'number') {
        throw new Error(errorMessage + number);
    }
}

function formatPercentage(numerator, denominator) {
    checkNumber(numerator, 'Illegal numerator:');
    checkNumber(denominator, 'Illegal denominator:');
    if (denominator === 0) {
        throw new Error('Denominator is zero!');
    }
    if (numerator > denominator) {
        throw new Error('Numerator is greater than denominator!');
    }
    return Math.floor(100 * (numerator / denominator)) + '%';
}




