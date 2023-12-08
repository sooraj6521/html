
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




// class Button{
//     constructor(content){
//         this.button=document.createElement('button');
//         this.button.innertHTML = content;
//         document.body.appendChild(this.button);}
        


// set width(width){
//     this.button.style.width = width +"px";
// }
// set height(height){
//     this.button.style.height = height+"px";
// }
// get width(){
//     return this.button.style.width;
// }

// get height(){
//     return this.button.style.height;
// }
// onClick(fn){
//     this.button.onclick = fn;
// }

// }


// let myButton = new Button('click here');
// console.log("myButton :", myButton);


// myButton.width=200;
// myButton.height=50;


// console.log("Button width :",myButton.width);
// console.log("Button height :",myButton.height);


// myButton.onclick(function(){
//     console.log("My button clicked....");
// });


// class yelowButton extends Button {
//     onClick(fn){
//         this.button.onclick = function(){
//             this.button.style.background = "yellow";
//             fn();
        
//         }.bind( this);
//     }

// }


// letMyyellowButton = new yelowButton("Yellow Button");
// console.log("myYellowButton :",myYellowButton);


// myYellowButton.width = 300;
// myYellowButton.height =75;

// console.log("myYellowButton width :",myYellowButton.width);
// console.log("myYellowButton height :",myYellowButton.height);

// myYellowButton.onClick(function(){
//     console.log("Button clicked...");
// })


{
    class Paragraph{
        constructor(content){
                   this.paragraph=document.createElement('p');
                  this.paragraph.innerHTML = content;
                  document.body.appendChild(this.paragraph);}
    
    set margin(margin){
        this.paragraph.style.margin = margin + "px";
    }

    set padding(padding){
        this.paragraph.style.padding = padding + "px";
    }

    set fontSize(fontSize){
        this.paragraph.style.fontSize = fontSize + "px";
    }

    set lineHeight(lineHeight){
        this.paragraph.style.lineHeight = lineHeight + "px";
    }

    
}

let myParagraph = new Paragraph("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper tempor erat quis sodales. Aenean semper, risus eu cursus mollis, libero magna efficitur lacus, eu semper quam odio a diam. Vestibulum dapibus dui quis turpis fermentum pharetra quis a massa. Maecenas vitae metus a diam sagittis placerat. Curabitur luctus ut ligula id ornare. Fusce euismod, diam at facilisis lacinia, lacus massa lacinia velit, eget mattis eros odio et leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;");

console.log("myParagraph :",myParagraph);




myParagraph.margin = 50;
myParagraph.padding = 40;
myParagraph.fontSize = 30;
myParagraph.lineHeight =50;

class Paragraph2 extends Paragraph{

    set fontcolor(fontcolor){
        this.paragraph.style.color = fontcolor
    }
    set background(background){
        this.paragraph.style.background = background
    }

}

let newparagraph = new Paragraph2 ("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper tempor erat quis sodales. Aenean semper, risus eu cursus mollis, libero magna efficitur lacus, eu semper quam odio a diam. Vestibulum dapibus dui quis turpis fermentum pharetra quis a massa. Maecenas vitae metus a diam sagittis placerat. Curabitur luctus ut ligula id ornare. Fusce euismod, diam at facilisis lacinia, lacus massa lacinia velit, eget mattis eros odio et leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;");


newparagraph.margin = 50;
newparagraph.padding = 40;
newparagraph.fontSize = 30;
newparagraph.lineHeight =50;
newparagraph.fontcolor = "black";
newparagraph.background="blue"




}