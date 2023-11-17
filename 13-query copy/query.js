const object = {
    search: "Вася",
    take: 10,
}

function stringToPaste2 (obj) {
const entr = Object.entries(obj);
let result = ``;
    console.log(entr)
    for(let i = 0; i < entr.length; i++) {
        result += `${entr[i][0]}=${entr[i][1]}&`
    }
    result = result.split("")
    resDel = result.splice(-1)
    result = result.join("")
    return result
}
// console.log(stringToPaste2(object))



const query = {
    search: 'Вася',
    take: 10,
};

function queryToString(query) {
    const queriesArray = [];
    for (const key in query) {
        queriesArray.push(`${key}=${query[key]}`);
    }
    return  "//" + queriesArray.join('&');
}

console.log(queryToString(query));