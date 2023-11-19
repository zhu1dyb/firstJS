const query = {
    search: 'Вася',
    take: 10,
};

function queryToString(query) {
    const queriesArray = [];
    for (const key in query) {
        console.log(key)
        queriesArray.push(`${key}=${query[key]}`);
    }
    return  "//" + queriesArray.join('&');
}

// console.log(queryToString(query));




const object = {
    search: "Вася",
    take: 10,
}

function stringToPaste2 (obj) {
const entr = Object.entries(obj);
const queriesArr = [];
for(const [key,val] of entr) {
    queriesArr.push(`${key}=${val}`)
}
return "//" + queriesArr.join("&")

}
console.log(stringToPaste2(object))


