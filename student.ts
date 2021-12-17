class student{
    id:number;
    name:string;
    marks:number;

    constructor(id: number,name: string,marks: number){
        this.id=id;
        this.name=name;
        this.marks=marks;
    }

    verify(): void {
        if(this.marks >= 35){
            console.log('student name is ${this.name} and passed  in ${this.subject}');
        }
        else 
        {
            console.log('failed');
        }
    }
}

class teacher extends student{
    subject: string;
    constructor(id: number,name: string,marks: number,subject: string){
        super(id,name,marks);
        this.subject=subject;
    }
}
var std:student=new teacher(1, 'poojitha' , 75,'maths');
std.verify();

//console.log('student marks is :'+std.marks);