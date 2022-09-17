


var employee = 
{
    name: "chris",
    role: "student",
    age: 33,
    isHuman: false,
    favHobbies: ['biking', 'skiing', 'games'],
    lectureSchedule: {
            week1:{
                day1: "HTML",
                day2: "CSS",
                day3: "Flex-Box",
            },
            week2:{
                day1: "JS intro",
                day2: "JS on the browser",
                day3: "belt prep demo",
            },
                 week3:{
                day1: "Terminal, JS arrays and objects",
                day2: "Github",
                day3: "API's",
            },
    }
}
// console.log(employee.name);
// console.log(employee.lectureSchedule.week1.day2)
console.log(employee.name +" likes " + employee.favHobbies[0])
