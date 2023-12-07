
// // console.log("hello javscript");


// // let obj ={
// //     name:"harry",
// //     age :30,
// //     greeting : function () {
// //         console.log("name :",this.name);
// //         console.log("age :",this.age);
// //     }
// // }
// // console.log("obj :",obj);

// // obj.greeting();


// // //constructor function
// // function person (name,age,mark)


// // const person1 = new person ("john",30);
// // console.log("person1 :",person1);
// // person1.greeting();

// // const person2 = new person ("mahe",40);
// // console.log("person2 :",person2);
// // person2.greeting();

// // //updating individual objectes
// // person2.place ="ERKLM"
// // console.log("person2.place :", person2.place);


// // person.prototype.getMark = function (){
// //     return this.mark;
// // }
// // console.log("mark of the person1 :",person1.getMark());
// // console.log("mark of the person2 :",person2.getMark());
// // }


// // {

// // let obj ={
// //     name:"volkswagan",
// //     colour :"red",
// //     greeting :function(){
// //         console.log("name :",this.name);
// //         console.log("colour :",this.colour);
// //     }
// // }
// // console.log("obj :",obj);

// // obj.greeting();



// // function car(name,colour){
// //     this.name ="mazda",
// //     this.colour ="black"
// //     this.greeting = function(){
// //         console.log("name :",this.name);
// //         console.log("age :",this.colour);
// //     }

// // }
// // const car1 = new car ("mercedez","black");
// // console.log("car1 :",car1);
// // car1.greeting();

// // const car2 = new car ("nizzan","blue");
// // console.log("car2 :",car2);
// // car2.greeting();
// // }

// //using classes

// {
// class person {
//     name;
//     age;
//     mark;

//     constructor(name,age,mark){
//         this.name = name;
//         this.age=age;
//         this.mark=mark;
//     }
//     greeting(){
//         console.log("name : ",this.name);
//         console.log("age :",this.age);
//         console.log("mark :",this.mark);
//     }

// }
// class Animal{
//     constructor(name){
//         this.name = name;

//     }
//     walk(){
//         console.log("Animal walking...");
//     }
// }

// class Dog extends Animal{
//     nickName;
//     constructor(name,nickName) {
//         super(name);
//         this.nickName = nickName;
//     }
//     walk() {
//         console.log("Dog walking...");
//     }
// }

// let myAnimal = new Animal ("monkey");
// console.log("myAnimal : ",myAnimal);
// myAnimal.walk();

// let myDog = new Dog("parent of arjun","Arjun");
// console.log("myDog :",myDog);
// myDog.walk();
// }

// class car{
//     constructor(name,colour,year){
//         this.name = name;
//         this.colour =colour;
//         this.year =year;

//     }
//     greeting(){
//         console.log("Animal walking...");
//     }
// }

// class Dog extends Animal{
//     nickName;
//     constructor(name,nickName) {
//         super(name);
//         this.nickName = nickName;
//     }
//     walk() {
//         console.log("Dog walking...");
//     }
// }

// let myAnimal = new Animal ("monkey");
// console.log("myAnimal : ",myAnimal);
// myAnimal.walk();

// let myDog = new Dog("parent of arjun","Arjun");
// console.log("myDog :",myDog);
// myDog.walk();


// //gettings and setters
// class cars{
//     constructor(name){
//        this.name = name;
//     }
//     // without using getteres abd setters
//     setColor(colour){
//         this.color=color;

//     }
//     getcolor(){
//         return this.color = color;

// }
// //using getters and setters
// set setColor(color){}




class Button{
    constructor(content){
        this.button=document.createElement('button');
        this.button.innertHTML = content;
        document.body.appendChild(this.button);}
        


set width(width){
    this.button.style.width = width +"px";
}
set height(height){
    this.button.style.height = height+"px";
}
get width(){
    return this.button.style.width;
}

get height(){
    return this.button.style.height;
}
onClick(fn){
    this.button.onclick = fn;
}

}


let myButton = new Button('click here');
console.log("myButton :", myButton);


myButton.width=200;
myButton.height=50;


console.log("Button width :",myButton.width);
console.log("Button height :",myButton.height);


myButton.onclick(function(){
    console.log("My button clicked....");
});


class yelowButton extends Button {
    onClick(fn){
        this.button.onclick = function(){
            this.button.style.background = "yellow";
            fn();
        
        }.bind( this);
    }

}


letMyyellowButton = new yelowButton("Yellow Button");
console.log("myYellowButton :",myYellowButton);


myYellowButton.width = 300;
myYellowButton.height =75;

console.log("myYellowButton width :",myYellowButton.width);
console.log("myYellowButton height :",myYellowButton.height);

myYellowButton.onClick(function(){
    console.log("Button clicked...");
})


