export const pad = () => (number, length) => {
    let str = "" + number
    while (str.length < length) {
        str = '0'+str
    }
    return str
}

export const isset = () => (obj, path) => {
    let stone;

    path = path || '';

    if (path.indexOf('[') !== -1) {
        throw new Error('Unsupported object path notation.');
    }
    path = path.split('.');

    do {
        if (obj === undefined) {
            return false;
        }

        stone = path.shift();

        if (!obj.hasOwnProperty(stone)) {
            return false;
        }

        obj = obj[stone];

    } while (path.length);

    return true;
}

export const getTimezoneOffset = (state) => state.timezoneOffset
