// const myName = "Oleg"
// console.log(myName)
// myName = "23"
// console.log(myName)

/**************************************************************/

// const objA = {a: 10, b: true}
// const copyOfA = objA
// console.log(objA)
// copyOfA.a = 20
// objA.b = false
// console.log(objA)
// copyOfA.c = "huiu"
// console.log(objA)
// console.log(objA.c)

/**************************************************************/

// let a2 = 10
// console.log(a2)
// a3 = undefined
// console.log(a3)

/**************************************************************/

// function a(){
//     console.log("Chort")
// }
// a()

// a = 10

// a()

/**************************************************************/

// const a = () =>{
//     console.log("Chort")
// }
// a()

// a = 20
// a()

// first second third

/**************************************************************/

// const myObj = {
//     first: "1",
// }

// console.log(myObj)
// myObj.second = "2"
// console.log(myObj)
// myObj.third = "3"
// console.log(myObj)

/**************************************************************/

// const unit = {
//     name: "Chaos Space Marine",
//     WS: "3+",
//     BS: "3+",
//     move: 6,
//     Sv: "3+"
// }
// console.log(unit)

// delete unit.move

// console.log(unit)

/**************************************************************/

// const myObj = {
//     first: "1",
// }

// console.log(myObj)

// myObj["second"] = "2"

// console.log(myObj)

/**************************************************************/

// const objName = {

// }

// console.log(objName)

// const firstPropName = "first"
// const secondPropName = "second"
// const thirdPropName = "third"

// objName[firstPropName] = 1
// objName[secondPropName] = 2
// objName[thirdPropName] = 3

// console.log(objName)

/**************************************************************/

// const whUnit = {
//     name: "Plague Marine",
//     information: {
//         WS: "3+",
//         BS: "3+",
//         move: 5,
//         Sv: "3+"
//     }
// }
// console.log(whUnit)
// console.log(whUnit.information)
// console.log(whUnit.information.move)

/**************************************************************/

// const whUnit = {
//     name: "Plague Marine",
//     information: {
//         WS: "3+",
//         BS: "3+",
//         move: 5,
//         Sv: "3+"
//     }
// }

// delete whUnit.information["move"]

// console.log(whUnit)

/**************************************************************/

// const name = "Oleg"
// const age = 25

// const user = {
//     name: name,
//     age: age,
//     id: 101,
//     isKlient: true
// }


// console.log(user)

// let drugoeName = "notOleg " + "Helow"
// let drugoeAge = 24 + 13

// user.name = drugoeName
// user.age = drugoeAge

// console.log(user)

/**************************************************************/

// const name = "Oleg"
// const age = 25

// const user = {
/*Рекомендуется размещать сокращённые свойства в начале объекта, и сортировать их по длине названия*/
//     age,
//     name,
//     id: 101,
//     isKlient: true
// }


// console.log(user)

// let drugoeName = "notOleg " + "Helow"
// let drugoeAge = 24 + 13

// user.name = drugoeName
// user.age = drugoeAge

// console.log(user)

/**************************************************************/

/* глобальные объекты window (в веб-браузерах), global (в node.js) имеют огромное количество свойств, в т.ч. высоту и ширину экрана
(для веб-браузеров). так же существует унифицированное название для глобальных объектов, globalThis*/

// window.innerWidth
// globalThis.innerHeight
// globalThis.console.log(10)

/* метод - свойство объекта, значение которого - функция ******** */

// const myBook = {
//     name: "Всадник без головы",
//     costOfBook: function () {
//         console.log(300)
//     }
// }
// myBook.costOfBook()

/**************************************************************/

// const myBook = {
//     name: "Всадник без головы",
//     costOfBook() {
//         console.log(300)
//     }
// }

// myBook.costOfBook()

/**************************************************************/

// JSON - JavaScript Object Notation
// формат обмена текстовыми данными между компьютерами в интернете
// позволяет хранить и передавать структурированную информацию
// JSON — это текстовый файл, составленный по строгим, но простым правилам.
// Внутри него данные организованы не в виде сплошного текста, а структурированы с помощью пар «ключ-значение» и упорядоченных списков