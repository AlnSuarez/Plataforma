class Task{

    constructor(nameTask, dateTask){
        this.nameTask;
        this.dateTask;
    }

    get NameTask(){
        return this.nameTask;
    }

    get dateTask(){
        return this.dateTask;
    }

    set nameTask(value){
        this.nameTask=value;
    }

    set dateTask(value){
        this.dateTask=value;
    }

}