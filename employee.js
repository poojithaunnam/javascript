var v = {
    id: 1,
    name: 'poojitha',
    city: 'bangalore',
    pincode: 560073,
    display: function () {
        console.log('demo text');
    }
};
console.log('json implementation....');
console.log('name is ${v.name} and city is ${v.city}');
var Manager = /** @class */ (function () {
    function Manager(id, name, city, pincode) {
        this.id = id;
        this.name = name;
        this.city = city;
        this.pincode = pincode;
    }
    Manager.prototype.display = function () {
        console.log('hi this is ${this.name} and i am in ${this.city}');
    };
    return Manager;
}());
console.log('object implementation-----');
var emplloyee = new Manager(1, 'poojitha', 'bangalore', 560073);
emplloyee.display();
