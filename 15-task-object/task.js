"use strict"

const toDoList = {
    title1: 
    {
    title: "Замена колес",
    id: 1,
    priority: 1
    },
    addTitle: function(theTitle) {
            let nameTheTitle = prompt("Введите ключ title")
            this[nameTheTitle] = {
            title: theTitle,
            id: Number(prompt("Введите id")),
            priority: Number(prompt("Введите приоритет"))
        }
        return this
        
    },
    deleteTitleWithId: function(idOfTitle) {
        for(let key in this) {
            if(this[key].id == idOfTitle) {
                delete this[key]
            }
        }
        return this
    },
    refreshNameOfTitileById: function(idOfTitleToRefresh, nameOfTitle) {
        for(let key in this) {
            if(this[key].id == idOfTitleToRefresh) {
                this[key].title = nameOfTitle
            }
        }
        return this
    },
    sortByPriority: function() {
        const keys = Object.keys(this);
        const titleKeys = keys.filter(key => key.includes("title"));
        const sortedKeys = titleKeys.sort((a, b) => this[a].priority - this[b].priority);
        const sortedList = sortedKeys.map(key => this[key]);
        return sortedList;
    }
}
toDoList.addTitle("Помыть окна")
toDoList.addTitle("Собрать шкаф")
toDoList.addTitle("Заменить батарейку")
toDoList.deleteTitleWithId(prompt("Укажите id по которому удалить"))
toDoList.refreshNameOfTitileById(prompt("Введите id для обновления имени"), "Cделать дз")
toDoList.sortByPr4iority()

