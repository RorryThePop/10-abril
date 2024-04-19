// const arr = [1, 2, 3, 4, 5, 6]
// const arr2 = ['hello', 'my', 'name', 'is', 'js']
// const newSection = document.querySelector('.new__section')
// const cell = document.querySelectorAll('.tr')
//forEach - перебирает массив
// arr.forEach((item, index, arr) => {
//      console.log(`Element ${item} is on ${index} index in main arr - ${arr}`)
// })

//map - создает новый массив, куда попадают модифицированные элементы

// const modifiedArray = arr.map((item, index, arr) => {

//    return item * 2
// })
// let result = 99999

// let smth = result < 999999 ? 'it is less' : null

// console.log(smth)

// console.log(modifiedArray)

//reduce - возвращет одно значение - промеждуточный результат выполнения коллбек функции

// const accumulator = arr.reduce((a, b) => {
//     return a + b
// }, 0)

// console.log(accumulator)

//filter - создает новый массив, куда попадают элементы по результату отбора в коллбек функции

// const filteredElement = arr.filter(item => {

//     if (item > 4) {
//         return item
//     }
// })
// console.log(filteredElement)

//push - добавляет в конец списка некий элемент
// arr.push(7, 8)

//slice - создает новый массив, обрезает массив по заданным индексам
// const slicedArray = arr.slice(1, 4)

// console.log(slicedArray)

// const userData = {
//     username: 'Yury',
//     status: 'banned'
// }

// localStorage.setItem('userData', JSON.stringify(userData))

// const listOfUsers = ['001', '002', '003', '004', '005']


// const user = localStorage.getItem('userData')
// localStorage.removeItem('userData')
// const formattedUserdata = JSON.parse(user)
// console.log(formattedUserdata)

// if(formattedUserdata.status === 'banned' ) {
//     console.log(`${formattedUserdata.username} is not active due to banned account`)
// } else {
//     console.log(`${formattedUserdata.username} is active `)
// }


 


// if(10 > 5) {
//     console.log('its bigger')
// } else {
//     ...
// }

// async function fetchApi() {
//     const url = 'https://jsonplaceholder.typicode.com/todos'
//     try {
//         const response = await fetch(url)
//         console.log(response)
//         if(!response.ok) {
//             throw new Error()
//         }

//         const data = await response.json()
//         const section = document.querySelector('.random__section')

//     } catch(e) {
//         console.error('Request was not sent', e)
//     }
// }

// fetchApi()

const obj = {
    a : () => {

    }
}


function SomeFn(name, age) {
    this.age = age
    this.name = name
}


const result = new SomeFn('Yury', 26)
const result2 = new SomeFn('Nikita', 26)
const result3 = new SomeFn('Misha', 32)
console.log(result, result2, result3)

// function Car(year, model) {
//     //private
//     let maxSpeed = 0

//     this.maxSpeed = () => {
//         maxSpeed += 20
//         console.log(`Max speed was set to ${maxSpeed} km/h`)
//     }
// }

// const toyota = new Car(2024, 'Toyota')
// toyota.maxSpeed()

//Инициализация класса
class Car {
    
    //Внедрение конструктора (метод внедрения параметров
    //  будущего объекта)
    constructor(model, year) {
        this.model = model
        this.year = year
    }

    //кастомный метод, где используем с помощью метода 
    // this контекст класс - конструктора
    intro () {
        console.log(`My car is ${this.model}`)
    }

    infoAboutCar() {
        console.log(`This car was made in ${this.year}`)
    }

}

// создаем объект основанный на созданной абстракции,
//  содержащей опеределенные методы внутри нашего класса
const toyotaCar = new Car('Toyota', 2001)
console.log(toyotaCar)
const infoAboutCar = new Car('Toyota', 1993)
infoAboutCar.infoAboutCar()

class SomeClass {
    constructor() {
        
    }
}
