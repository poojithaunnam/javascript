interface  Address{
    city:string;
    pincode:number;


}

interface Employee  extends Address{
    id:number;
    name:string;
    display?();
}

var v:Employee={
    id: 1,
    name: 'poojitha',
    city: 'bangalore',
    pincode :560073,
    display: function (): void {
        console.log('demo text')
    }
};

console.log('json implementation....')
console.log('name is ${v.name} and city is ${v.city}')

class Manager implements Employee{
    id: number;
    name :string;
    city: string;
    pincode : number;

    constructor (id: number, name:string, city:string, pincode: number){
        this.id = id;
        this.name = name;
        this.city = city;
        this.pincode = pincode;
    }
display(): void {
    console.log('hi this is ${this.name} and i am in ${this.city}');

}

}

console.log('object implementation-----')
var emplloyee:Manager= new Manager(1,'poojitha','bangalore',560073);
emplloyee.display();