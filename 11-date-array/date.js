let arrDates = ["10-02-2022", "тест", "11/32/2023", "00/11/2023", "11/12/2023", "41/12/2023"];
function FilterDates_MapDates (array) {
    const filterDates = array.filter((el) => {
        if (!isNaN(el[0])) {
            return array
        } 
    }).filter((ele) => {
        if (ele[0] != 0 || ele[1] != 0) {
            return array
        }
    }).filter((element) => {
        if (element[3] < 3) {
            return array
        }
    }).filter((elems) => {
        if (elems[0] <= 3) {
            return array
        }
    })
        let arr = filterDates[1].split("/")
        let arr1 = filterDates[0].split("-")
        let newArr = [];
         newArr.push(arr, arr1)
        let res = newArr.flat(2)
        let temp = res[0];
         res[0] = res[1]
         res[1] = temp
        let newArrFirstData = []
         newArrFirstData.push(res[0], res[1], res[2])
        let newArrSecondData = []
         newArrSecondData.push(res[3], res[4], res[5])
        let joinedArrFirstDate = newArrFirstData.join("-")
        let joinedArrSecondDate = newArrSecondData.join("-")
        let resDates = []
         resDates.push(joinedArrFirstDate, joinedArrSecondDate)
    return resDates
}
console.log(FilterDates_MapDates(arrDates))
