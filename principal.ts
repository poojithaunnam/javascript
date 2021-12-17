import { student} from './student';

class principal extends student {
    constructor(id: number, name: string, marks:number) {
        super(id, name, marks);
    }
}

var pp: principal = new  principal(1,'poojitha',73);
console.log(pp.name); 