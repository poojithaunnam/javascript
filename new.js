function new1(){
    this.name="this is demo text";
    console.log(this.name);
    console.log(this.name.toLocaleLowerCase());
    console.log(this.name.toUpperCase());
    this.name=this.name.concat('welcome');
    console.log(this.name);
    console.log(this.name.slice(0,18));
    console.log(this.name.substr(7,10));
    this.name=this.name.replace('welcome','DEMO');
    console.log(this.name);
    console.log(this.name.lastIndexOf('DEMO'));
    console.log(this.name.startsWith("this"));
    console.log(this.name.endsWith('DEMO'));
}

new1();