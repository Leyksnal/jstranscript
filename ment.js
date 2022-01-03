// let mywords = "This is my test string to practice the JavaScript string function concepts. This is gonna be fun."

// // 1. Find the length of the first sentence in the string

// let answer = mywords.length
// console.log(answer)

// // 2. Find the length of the second sentence in the string.

// // let answer = mywords.sli mce(-21)
// // let request = answer.length
// // console.log(request)

// // 3. Find the first and last occurrence of the word "This"

// // let firstLast = "This"
// // let o = firstLast.charAt(0)
// // let c = firstLast.slice(3)
// // console.log(o + c)


// // 4. Find the sub-string with length 12 from the START of the string mStr.

// // let sub = mywords.substr(12)
// // console.log(sub)

// // 5. Find the sub-string with length 12 from the END of the string mStr.

// // let sub = mywords.substr(-12)
// // console.log(sub)


// // PART2
// // 1. Use the str1, str2, str3 to create the Result string. Keep the extra spaces, lowercase and uppercase letters in mind.

// // let phase = "Today is"
// // let phase1 = "A Beautiful day"
// // let phase2 = "In Lagos"

// // let join = phase.concat(" ", phase1, " ",)
// // console.log(join.concat(phase2))

// // 2. Convert this string to an array that holds different days. Also, capitalize all the characters.

// // let days = "Sun Mon Tue Wed Thur Fri Sat"
// // let each = days.split(' ')
// // let result = days.toUpperCase()
// // console.log(result)

// // console.log("This is a \"test\" string")

// // console.log("How about this string??")

// // function man(){
// //     let display = "hello"
// //     return display
// // }

// // console.log(man())


// function game(){
//     return " Bello"

// }

// document.getElementById("display").innerHTML = game()

// const person(){
//     let userInput = prompt("Check if u are qualified");



//     if (userInput >= age){
//         console.log("You dont qualify");
//     } else(
//         console.log("You are still a baby")
//     )
// }

// const man = () => {
//     let userInput = prompt("Oga put your name for inside dis domot")

//     if (userInput.length < 10){
//         console.log("too short")
//     }else {
//         console.log("too long")
//     }
// }

// man();

// let userInput = prompt("input your username");

// console.log((userInput.length < 10)? "You are young" : "You are too old for this")

// const Database = (Where) =>{
//     let u = {
//         Location: "Lagos"
//     }

//     return Where(u);
// };


// const getUser = (area) =>{
//     console.log("I am in " + area.Location);
// };


// Database(getUser);

// Database((user) => {
//     console.log("i am in " + user.Location)
// });


// let myArr = [1, 2, 3, 4, 5]
// myArr.map((item, i) => {
//     console.log(item)
// })



// for loop takes three parameters -initial statement -condition -increament count 

// for (let i = 0; i <= 10; i++){
//     console.log(i)
// }

// let student = ["Ade", "Akeem", "Unech", "Micheal"];

// for (let a = 0; a < student.length; a++){
//     console.log(student[a]);
// }

// let car = {
//     name: "Benz",
//     color: "Red",
//     speed: 200,
// };

// for (let props in car){
//     console.log(props + ": " + car[props])
// }

// let start = 10;

// while (start < 20)  {
//     console.log(start);
//     start++;
// }


// for (let z = 0; z < start; z++){
//     if(z == 3){
//         continue;
//     }

//     console.log(z)
// }

// const student = [
//     {
//         name: "Bola",
//         age: 18,
//         Contact: "08083848782",
//         maturity: "matured"
//     },
//     {
//         name: "Mayowa",
//         age: 6,
//         Contact: "08083775474",
//         maturity: "underage"
//     },
//     {
//         name: "Ade",
//         age: 30,
//         Contact: "080894939393",
//         maturity: "matured"
//     },
//     {
//         name: "Kehinde",
//         age: 12,
//         Contact: "080838488855",
//         maturity: "underage",
//     },
// ]

// let underage = student.filter(student => student.age < 18)
// console.log(underage)

// const underAge = student.filter(v => v.age < 18);
// console.log(underAge);

// const underAge = (students) =>{
//     const underAgeStudents = [];

//     students.forEach((student) =>{
//         if (student.age < 18 && underAgeStudents.length < 2){
//             underAgeStudents.push(student)
//         }
//     })

//     return (underAgeStudents)? underAgeStudents : 'No under  age here'
// }

// console.log(underAge(student))

// const man = [];
// man.push("gate", "dog", "cat", "dat")
// console.log(man)

// const accountBank = () =>{
//     let userInput = prompt("How much do you have in your account?")



//     if(userInput.length > 10000){
//         console.log("You are qualified to detty december")
//     } else (console.log("You are too broke to detty december if you are not carefull december will detty you"))
// }

// console.log(accountBank())

// const student = [{
//         name: "Bola",
//         score: 210,
//         course: ["math", "english", "biology"]
//     },
//     {
//         name: "Ade",
//         score: 150,
//         course: ["math", "english", "biology"]
//     },
//     {
//         name: "Mike",
//         score: 170,
//         course: ["math", "english", "biology"]
//     },
//     {
//         name: "Shola",
//         score: 180,
//         course: ["math", "english", "biology"]
//     },
//     {
//         name: "Cythia",
//         score: 230,
//         course: ["math", "english", "biology"]
//     }
// ]

// let highestScores = student.filter(student => student.score > 200)
// console.log(highestScores)

// let studentNames = student.map(student => student.name)
// console.log(studentNames)

// let totalScores = student.map(student => student.score)
// const theSum = totalScores.reduce((a, b) =>
//     a + b);
// console.log(theSum)


// let students = ["Leke", "Mike", "Cythia", "Joseph", "Emmanuel", "Dickson"]
// let userInput = prompt(`all names ${students} which name u won comot`)

// let finder = students.indexOf(userInput)
// console.log(finder)

// let theResult = (finder > -1) ? students.splice(finder, 1) : "Invalid name"
// console.log(theResult)

// let question = prompt("what is your age")
// let agePermit = 18
// if (question > 18) {
//     console.log("You are Qualified")
// } else {
//     console.log("You are not allowed")
// }


// let time = new Date()

// console.log(time.getDay())

// Object literal
// const man = { id: 1, name: "john", class: "jss3" }

// console.log(man.class)


//litera
// const lady = new Object();

// lady.id = 101;
// lady.name = "ashake";
// lady.salary = 400000;
// console.log(lady.name)


//constructor
// class car {
//     constructor(id, name, branch) {
//         this.id = id;
//         this.name = name;
//         this.branch = branch;
//     }
// }
// car = new car(20985, "Benz", "ikeja");

// console.log(car.id)