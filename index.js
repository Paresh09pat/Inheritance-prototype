// Q.1 ) Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parents prototype.

const Parent = {
    calcuateAge(){
        console.log(`My name is ${this.fname} ${this.lName} and current age is ${2022 - this.bYear}`);
    
    }
}
const objectOne = Object.create(Parent);
objectOne.fname = 'Yash';
objectOne.lName = 'Jain';
objectOne.bYear = 1994;
objectOne.calcuateAge();

const objectTwo = Object.create(Parent);
objectTwo.fname = 'Paresh';
objectTwo.lName = 'Patil';
objectTwo.bYear = 1970;
objectTwo.calcuateAge();



// Q.2) Write code to explain prototype chaining.

const firstProto = {
    calcuateAge(){
        console.log(`This is the most popular ${this.Name} wine it having ${this.Color} colour it is ${2022 -this.Year} years old wine. `);
    },
    initialise(Name,Color,Year){
        this.Name = Name;
        this.Color = Color;
        this.Year = Year;
    }
};

const Parth = Object.create(firstProto);
console.log(Parth);
Parth.initialise("Violet","Purple",1994);
Parth.calcuateAge();

const secondProto = Object.create(firstProto);
secondProto.initial = function (Name,Color,Year,place){
    firstProto.initialise.call(secondProto,Name,Color,Year)
    this.place = place;
}
secondProto.introduce = function(){
    console.log(`This is the most popular ${this.Name} wine.
     it having ${this.Color} colour.
     it is ${2022 -this.Year} years old wine.
     Manufacture in ${this.place} `);
}

const Raj = Object.create(secondProto);
Raj.initial("ORGLIFE","red",1994,"UK");
Raj.introduce();


// Q.3) Add a method to calculate sum of all elements in Array in array's prototype, use that method to calculate sum for multiple arrays.

function arraySum(a){
    let sum=0;
    for(let i in a) { 
        sum += a[i];
    }
    return sum;
}
let array = [1,2,3,4]; 
let Sum= arraySum(array);


// Q.4) Write a JavaScript function to retrieve all the names of object's own and inherited properties.

function student(first, last, age, height) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.height = height;
}
  
student.prototype.nationality = "Indian";
const myFri = new student("Piyush", "Panday", 20, 5.10);
console.log(myFri);
console.log("The nationality of my friend is " + myFri.nationality);