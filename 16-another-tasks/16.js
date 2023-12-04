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
                priority: Number(prompt("Введите приоритет")),
                description: prompt("Введите дескрипцию")
            }
        )

        return this
        
    },
    deleteTitleWithId: function(idOfTitle) {
       for(let i = 0; i < this.tasks.length; i++){
            if(this.tasks[i].id == idOfTitle) 
                this.tasks.splice(i, 1)
            }
        return this
    },
    refreshNameOfTitileById: function(idOfTitleToRefresh, nameOfTitle) {
        for(let i = 0; i < this.tasks.length; i++) {
            if(this.tasks[i].id == idOfTitleToRefresh) {
                this.tasks[i].title = nameOfTitle
            }
        }
        return this
    },
    sortByPriority: function() {
        this.tasks.sort((a, b) => a.priority - b.priority);
        return this;
    }
}
// toDoList.addTitle()
// console.log(toDoList.addTitle())
// console.log(toDoList.deleteTitleWithId(prompt("Укажите id по которому удалить")))
// console.log(toDoList.refreshNameOfTitileById(prompt("Введите id для обновления имени"), "Cделать дз"))
// console.log(toDoList.sortByPriority())


const  newTasks = {
    tasks: 
    [{
    title: "Замена масла",
    id: 1,
    priority: 1,
    description: "Мишлен колеса",
    }],
}

toDoList.addTitle.call(newTasks); 
toDoList.addTitle.call(newTasks);

toDoList.deleteTitleWithId.call(newTasks, 1);

toDoList.refreshNameOfTitileById.apply(newTasks, [2, "Погулять"])

console.log(toDoList.sortByPriority.bind(newTasks)())

