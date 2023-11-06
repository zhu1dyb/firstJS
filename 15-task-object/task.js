"use strict"

const toDoList = {
    tasks: 
    [{
    title: "Замена колес",
    id: 1,
    priority: 1
    }],

    addTitle: function() {
        let idOfT = this.tasks.length + 1;
        this["tasks"].push(
            {
                title: prompt("Введите название задачи"),
                id: idOfT,
                priority: Number(prompt("Введите приоритет"))
            }
        )

        return this
        
    },
    deleteTitleWithId: function(idOfTitle) {
       for(let i = 0; i < toDoList.tasks.length; i++){
            if(toDoList.tasks[i].id == idOfTitle) 
                toDoList.tasks.splice(i, 1)
            }
        return this
    },
    refreshNameOfTitileById: function(idOfTitleToRefresh, nameOfTitle) {
        for(let i = 0; i < toDoList.tasks.length; i++) {
            if(toDoList.tasks[i].id == idOfTitleToRefresh) {
                toDoList.tasks[i].title = nameOfTitle
            }
        }
        return this
    },
    sortByPriority: function() {
        this.tasks.sort((a, b) => a.priority - b.priority);
        return this;
    }
}
toDoList.addTitle()
console.log(toDoList.addTitle())
console.log(toDoList.deleteTitleWithId(prompt("Укажите id по которому удалить")))
console.log(toDoList.refreshNameOfTitileById(prompt("Введите id для обновления имени"), "Cделать дз"))
console.log(toDoList.sortByPriority())
