const object = {
    search: "Вася",
    take: 10,
}
function stringToPaste (object) {
    const keys = Object.keys(object)
    return `// ${keys[0]}=${object[keys[0]]}&${keys[1]}=${object[keys[1]]}`
}
console.log(stringToPaste(object))



function stringToPaste2 (obj) {
const entr = Object.entries(obj);
return `// ${entr[0][0]}=${entr[0][1]}&${entr[1][0]}=${entr[1][1]}`
}
console.log(stringToPaste2(object))