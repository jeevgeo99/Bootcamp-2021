class Student{  
    constructor(){ 
        var name;
        var marks;

    }

    getName(){
        return this.name;
    }

    setName(name){
        this.name=name;
    }

    getMark(){
        return this.marks;
    }

    setMarks(marks){
        this.marks=marks;
    }
}

var std=new Student();
std.setName("Jeevan");
std.setMarks("45");

console.log(std.getName()+" " + std.getMark());
