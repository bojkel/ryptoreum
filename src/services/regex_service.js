exports.numberWithCommas = (rawNumber) => {
    return rawNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}