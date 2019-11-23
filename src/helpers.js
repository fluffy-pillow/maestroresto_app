function pad (number, length) {
    let str = "" + number
    while (str.length < length) {
        str = '0'+str
    }
    return str
}

const timezoneOffset = () =>  {
    let offset = new Date().getTimezoneOffset()
    offset = ((offset < 0 ? '+' : '-') +
        pad(parseInt(Math.abs(offset / 60)), 2) + ":" +
        pad(Math.abs(offset % 60), 2))
    return offset
}

const empty = (obj) => {
    return obj.length === 0
}

const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600)
    const m = Math.floor((seconds % 3600) / 60)
    const s = seconds % 60
    return [h, m > 9 ? m : h ? '0' + m : m || '0', s > 9 ? s : '0' + s]
        .filter(a => a)
        .join(':')
}

const isset = (obj, path) => {
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

export {isset, timezoneOffset, empty, formatTime}