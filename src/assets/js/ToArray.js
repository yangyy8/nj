
export function ToArray(data) {
    var returnValue = new Array();
    for (var key in data) {
        returnValue.push({dm: key, mc: data[key]});
    }
    return returnValue;
};
export function ToData(data) {
    var returnValue = new Array(data);
    // for (var key in data) {
    //     returnValue.push({dm: key.dm, mc: key.mc});
    // }
    return returnValue;
};
