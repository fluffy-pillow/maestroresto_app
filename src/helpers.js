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

export {isset}