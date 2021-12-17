interface Emp{
    name:string;
    age:number;
    salary?:number;
}

var emp={'name':'poojitha','age':22,'salary':25000,'city':'bangalore'};

console.log(emp.name);

var emp1:Emp={'name':'poojitha','age':22,'salary':25000};

var emp2:Emp={'name':'poojitha','age':22};

console.log('---------')
console.log('Employee name :'+emp1.name);
console.log('Employee age :'+emp1.age);
console.log('Employee salary :'+emp1.salary);


console.log('---------')
console.log('Employee name :'+emp2.name);
console.log('Employee age :'+emp2.age);
console.log('Employee salary :'+emp2.salary);