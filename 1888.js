function assertObjectsEqual(obj1, obj2) {
    if (objectsEqual(obj1, obj2)) {
        return 'Passed';
    } else {
        return `FAILED Expected ${JSON.stringify(obj2)}, but got ${JSON.stringify(obj1)}`;
    }

    function objectsEqual(obj1, obj2) {
        const keysOfObj1 = Object.keys(obj1);
        const keysOfObj2 = Object.keys(obj2);

        if (keysOfObj1.length !== keysOfObj2.length) {
            return false;
        }

        for (let key of keysOfObj1) {
            if (typeof obj1[key] === 'object' && obj1[key] !== null) {
                if (!objectsEqual(obj1[key], obj2[key])) {
                    return false;
                }
            } else if (obj1[key] !== obj2[key]) {
                return false;
            }
        }

        return true;
    }
}

const expected = { foo: 6, bar: {name : "sagar"} };
const actual = { bar: {name : "sagar"}, foo: 6 };
console.log(assertObjectsEqual(actual, expected));
