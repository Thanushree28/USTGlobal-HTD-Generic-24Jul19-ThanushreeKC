/*==================================Variables=============================================*/
// let myName = 'Thanu';
// let company;
// company = 'testyantra';
// company = 23;
// console.log(company);
// console.log(myName);
/*===============================Union====================================*/
// let sample : number|boolean;
// sample = 10;
// sample = true;
// console.log(sample);
/*================================arrays=================================*/
// let myArray:string[] = ['abcd','abcd'];
// console.log(myArray);
/*==================================tuple=================================*/
// let myTuple:[string,number,boolean] = ['abc',567,true];
/*=====================================enum=============================*/
// enum colors{
//     red ='Danger',
//     green = 'success',
//     yellow ='primary',
//     black='dark'
// }
// console.log(colors.black);
/*=======================================class=================================*/
// class Person {
//     name :string;
//     age : number;
//     constructor(personName : string,personAge :number){
//         this.name = personName;
//         this.age = personAge;
//     }
// }
// let p1= new Person('Ragini',34);  /*object creation*/
// console.log(person.name);
// console.log(person.age);
/*===========================nullable types============================*/
// let myName = 'raj';
// myName = null;
/*==========================another way of initializing================*/
// class Car {
//     brand : string = 'BMW'
// static model: string = 'x5'
// }
// let bmwcar = new Car();
// console.log(bmwcar.brand);
// console.log(Car.model)
/*===============================class==============================*/
// class Car{
//     constructor(public brand: string ,public model:string){
//     }
// }
// let bmwCar = new Car('BMW','x5')
// console.log(bmwCar.brand);
// console.log(bmwCar.model)
/*============================object creation===========================*/
// let benzCar: Car = {
//     brand :'benz',
//     model : '0002, }
// console.log(benzCar.brand);
// console.log(benzCar.model)
/*=======================inheritance========================================*/
// class Person{
//     constructor(public name: string, public age:number){
//     }
// }
// class Student extends Person{
//     constructor(public myName: string,public myAge:number, public USN:number){
//         super(myName,myAge);
//     }
// }
// let p1 = new Person('Dinga',23);
// let s1 = new Student('Dingi',34,988643232);
// console.log(p1.name);
// console.log(p1.age);
// console.log(s1.name);
// console.log(s1.age)
/*=======================object creation in angular===========================*/
// /*==========================interface================================*/
// interface Student{
//     name:string;
//     age:number;
//     printDetails() : void;
// }
// class Person implements Student{
//     name = 'Thanu';
//     age =23;
//     printDetails(){
//         console.log('Name is'+this.name);
//         console.log('Age is'+this.age);
//     }
// }
// let person1 = new Person();
// person1.printDetails();
// let s1 : Student={
//     name:'xyz',
//     age:23,
//     printDetails : () => {
//         console.log('name is '+name );
//     }
// }
/*======================Generics=====================*/
// function getArray(items:string[]){
//     return new Array().concat(items);
// }
// console.log(getArray(['acs','bbhd','hfh']));
// function getArray(items) {
//     return new Array().concat(items);
// }
// var numArray = getArray([123, 658, 657]);
// var strArray = getArray(['mnfjfe', 'hhhgyf', 'jhg']);
// numArray.push(2);

