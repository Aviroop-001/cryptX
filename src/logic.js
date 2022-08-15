
// InternationalCurrencySystem
export const convertToICS = (labelValue) =>{
    return Math.abs(Number(labelValue)) >= 1.0e+9

    ? (Math.abs(Number(labelValue)) / 1.0e+9).toFixed(2) + "B"
    : Math.abs(Number(labelValue)) >= 1.0e+6

    ? (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(2) + "M"
    : Math.abs(Number(labelValue)) >= 1.0e+3

    ? (Math.abs(Number(labelValue)) / 1.0e+3).toFixed(2) + "K"
    : Math.abs(Number(labelValue));
}

export const toDateTime = (secs) => {
    var t = new Date(1970, 0, 1); // Epoch
    t.setSeconds(secs/1000);
    return t;
}

export const getDateTime = (secs) =>{
    var t = new Date(1970, 0, 1); // Epoch
    t.setSeconds(secs/1000);
    var day = t.getDate() + "";
    var month = (t.getMonth() + 1) + "";
    var year = t.getFullYear() + "";
    return `${day}/${month}/${year}`;
}