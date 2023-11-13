const object = {
    search: "Вася",
    take: 10,
}
function stringToPaste (object) {
    const keys = Object.keys(object)
    return `// ${keys[0]}=${object[keys[0]]}&${keys[1]}=${object[keys[1]]}`
}
// console.log(stringToPaste(object))



function stringToPaste2 (obj) {
search = obj.search;
take = obj.take;
return `// search=${search}&take=${take}`
}
console.log(stringToPaste2(object))