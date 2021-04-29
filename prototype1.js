
// function 자동차(색상,네비게이션){
//     this.색상=색상
//     this.네비게이션=네비게이션
// }
// 자동차.prototype = {
//     휠: "4",
//     drive: function(){
//         console.log('drive')
//     }
// };

// let 아반떼 = new 자동차('블루','true');
// let 소나타 = new 자동차('레드','false');
// let 제네시스 = new 자동차('검정','true');

// class User2{
//     constructor(name,age){
//         this.name = name
//         this.age = age
//     }
//     showName(){
//         console.log(this.name)
//     }
// }

// const dogoo = new User2('dogoo',20)

// class Car{
//     constructor(color){
//         this.color = color;
//         this.whells = 4;
//     }

//     driver(){
//         console.log('drive')
//     }

//     stop(){
//         console.log('stop')
//     }
// }

// class avante extends Car{
//     constructor(color){
//         super(color)
//     }

//     showName(){
//         console.log('avante')
//     }
// }

// const 아반떼 = new avante('blue');

function car(){
}
car.prototype.driver = function(){
    console.log('drive')
}
car.prototype.stop = function(){
    console.log('stop')
}

function avante(color){
    this.color = color
    this.wheels = '4'
}

avante.prototype.showName = function(){
        console.log('avante')
    }

자동차 = new car()
아반떼 = new avante('blue')

아반떼.__proto__.__proto__ = car.prototype







// function Animal () {

// }

// Animal.prototype.bark = function () {
// 	console.log(this.barkSound);
// }
// Animal.prototype.getName = function () {
// 	console.log(this.animalName);
// }

// function Dog () {
// 	// 추가한 코드, Animal의 prototype을 원래 Object의 prototype 있던 자리에 넣습니다
// 	// this.__proto__.__proto__ = Animal.prototype;

// 	this.barkSound = "bowwow";
// 	this.animalName = "dog";
// }

// var volt = new Dog();
// var volt2 = new Animal();
// volt.__proto__.__proto__ = volt2.__proto__