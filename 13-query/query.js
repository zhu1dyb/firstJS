const object = {
    search: "Вася",
    take: 10,
}
function stringToPaste (object) {
    const keys = Object.keys(object)
    return `// ${keys[0]}=${object[keys[0]]}&${keys[1]}=${object[keys[1]]}`
}
console.log(stringToPaste(object))

