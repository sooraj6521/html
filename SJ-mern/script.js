{
console.log("hello javscript");


let obj ={
    name:"harry",
    age :30,
    greeting : function () {
        console.log("name :",this.name);
        console.log("age :",this.age);
    }
}
console.log("obj :",obj);

obj.greeting();


//constructor function
function person(name,age){
    this.name ="harry",
    this.age =30,
    this.greeting = function(){
        console.log("name :",this.name);
        console.log("age :",this.age);
    }

}


const person1 = new person ("john",30);
console.log("person1 :",person1);
person1.greeting();

const person2 = new person ("mahe",40);
console.log("person2 :",person2);
person2.greeting();
}


{

let obj ={
    name:"volkswagan",
    colour :"red",
    greeting :function(){
        console.log("name :",this.name);
        console.log("colour :",this.colour);
    }
}
console.log("obj :",obj);

obj.greeting();



function car(name,colour){
    this.name ="mazda",
    this.colour ="black"
    this.greeting = function(){
        console.log("name :",this.name);
        console.log("age :",this.colour);
    }

}
const car1 = new car ("mercedez","black");
console.log("car1 :",car1);
car1.greeting();

const car2 = new car ("nizzan","blue");
console.log("car2 :",car2);
car2.greeting();
}

