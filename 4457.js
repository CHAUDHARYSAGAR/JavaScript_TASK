const obj = {
    name : 'sagar',
    address : function () {
        city = 'aliagrh'
    },
    udef : undefined,
    date : new Date(),

    list : [
        {
            age : 21
        }
    ],

    test : {
        1: {
            2: {
                name: 'test'
            }
        }
    }
}


function copy(obj) {

    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    if (obj instanceof Date) {
        return new Date(obj);
    }

    let newObject = Array.isArray(obj) ? [] : {};

    for (const key in obj) {
        newObject[key] = copy(obj[key])
    }
    return newObject;
}  
let newObject = copy(obj);
obj.test[1][2].name = 'working'

console.log(JSON.stringify(obj));
console.log(JSON.stringify(newObject))