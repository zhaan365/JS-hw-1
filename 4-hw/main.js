let a0 = 'test'
if (a0 === 'test') {
    console.log('верно')
} else {
    console.log('неверно')
}

a0 === 'test' ? console.log('верно') : console.log('неверно')

switch (a0) {
    case "test":
        console.log('верно')
        break
    default:
        console.log('неверно')
}

//_____________________________________________________________________________

let number;
    data = false;

if (data === true) {
    number = 2
} else {
    number = 3
}

data ? console.log(number = 2) : console.log(number = 3)

switch (number) {
    case data:
        console.log(number = 2)
        break
    default:
        console.log(number = 3)
}
console.log(number)

//_____________________________________________________________________________

let  answer = prompt()
switch (answer) {
    case "23":
    case "00":
    case "01":
    case "02":
    case "03":
    case "04":
    case "05":
    case "06":
    case "07":
    case "08":
        console.log('В это время мы не работаем')
        break
    case "09":
    case "10":
    case "11":
        console.log('Будеи рады Вас видеть')
        break
    case "12":
        console.log('Обед')
        break
    case "13":
    case "14":
    case "15":
    case "16":
    case "17":
    case "18":
    case "19":
    case "20":
    case "21":
    case "22":
        console.log('Мы опять рады видеть вас')
        break
    default:
        console.log('Укажите правильное время')
}

if (answer === '23' || answer === '00' || answer === '01' || answer === '02'
    || answer === '03' || answer === '04' || answer === '05' || answer === '06'
    || answer === '07' || answer === '08'){
    console.log('В это время мы не работаем')
} else if (answer === '09' || answer === '10' || answer === '11'){
    console.log('Будеи рады Вас видеть')
} else if (answer === '12'){
    console.log('Обед')
} else if (answer === '13' || answer === '14' || answer === '15' || answer === '16'
    || answer === '17' || answer === '18' || answer === '19' || answer === '20'
    || answer === '21' || answer === '22'){
    console.log('Мы опять рады видеть вас')
} else {
    console.log('Укажите правильное время')
}

answer === '23' || answer === '00' || answer === '01' || answer === '02' || answer === '03' || answer === '04' || answer === '05' || answer === '06' || answer === '07' || answer === '08' ? console.log('В это время мы не работаем') :
    answer === '09' || answer === '10' || answer === '11' ? console.log('Будеи рады Вас видеть') :
        answer === '12' ? console.log('Обед') :
            answer === '13' || answer === '14' || answer === '15' || answer === '16' || answer === '17' || answer === '18' || answer === '19' || answer === '20' || answer === '21' || answer === '22' ? console.log('Мы опять рады видеть вас') :
                console.log('Укажите правильное время')

//_____________________________________________________________________________

let n
    m = 455
if (m > 50){
    console.log(n = 'большое')
} else {
    console.log('маленькое')
}

m > 50 ? console.log(n = 'большое') : console.log('маленькое')

switch (m) {
    case "m > 50":
        console.log(n = 'большое')
        break
    default:
        console.log('маленькое')
}

//_____________________________________________________________________________

let a = 5
if (a === 0 || a === 2){
    console.log(a + 7)
} else {
    console.log(a  / 10)
}


let b = 0
b === 0  || b === 2 ? console.log(b + 7) : console.log(b  / 10)

let c = -3
if (c === 0){
    console.log(c + 7)
} else if (c === 2){
    console.log(c + 7)
} else {
    console.log(c  / 10)
}

let d = 2
switch (d) {
    case 2:
        console.log(d + 7)
        break
    case 0:
        console.log(d + 7)
        break
    default:
        console.log(d / 10)
}

//_____________________________________________________________________________

let  answer = prompt()

if (answer == 18){
    console.log('есть 18 лет')
} else {
    console.log('нет 18 лет')
}

answer == 18 ? console.log('есть 18 лет') : console.log('нет 18 лет')

switch (answer) {
    case '18':
        console.log('есть 18 лет')
        break
    default:
        console.log('нет 18 лет')
}

//_____________________________________________________________________________

let a2 = 1
let b2 = 3

if (a2 <= 1 && b2 >= 3){
    console.log(a2 + b2)
} else {
    console.log(a2 - b2)
}



let a3 = 0
let b3 = 6

a3 <= 1 && b3 >= 3 ? console.log(a3 + b3) : console.log(a3 - b3)


let a4 = 3
let b4 = 5

switch (a4 && b4) {
    case a4 <= 1 && b4 >= 3:
        console.log(a4 + b4)
        break
    default:
        console.log(a4 - b4)
}

//_____________________________________________________________________________

let Pasha = prompt()

if (Pasha >= 18){
    console.log('Взрослый')
} else {
    console.log('Ребенок')
}

Pasha >= 18 ? console.log('Взрослый') : console.log('Ребенок')

switch (true) {
    case Pasha >= 18:
        console.log('Взрослый')
        break
    default:
        console.log('Ребенок')
}



//_____________________________________________________________________________

let season = prompt()
if (season === "Февраль"){
    console.log(season === "Зима")
} else if (season === "Декабрь"){
    console.log("Зима")
} else if (season === "Январь") {
    console.log("Зима")
} else if (season === "Март") {
    console.log("Весна")
} else if (season === "Апрель") {
    console.log("Весна")
} else if (season === "Май") {
    console.log("Весна")
} else if (season === "Июнь") {
    console.log("Лето")
} else if (season === "Июль") {
    console.log("Лето")
} else if (season === "Август") {
    console.log("Лето")
} else if (season === "Сентябрь") {
    console.log("Осень")
} else if (season === "Октябрь") {
    console.log("Осень")
} else if (season === "Ноябрь") {
    console.log("Осень")
} else {
    console.log("Ты не правильно вбил!")
}


switch (season) {
    case "Март":
    case "Аперль":
    case "Май":
        console.log("Весна")
        break
    case "Сентябрь":
    case "Октябрь":
    case "Ноябрь":
        console.log("Осень")
        break
    case "Февраль":
    case "Декабрь":
    case "Январь":
        console.log("Зима")
        break
    case "Июнь":
    case "Июль":
    case "Август":
        console.log("Лето")
        break
    default:
        console.log("Это не месяц!")
}


season === "Февраль" ? console.log("Зима") :
    season === "Январь" ? console.log("Зима") :
        season === "Декабрь" ? console.log("Зима") :
            season === "Март" ? console.log("Весна") :
                season === "Апрель" ? console.log("Весна") :
                    season === "Май" ? console.log("Весна") :
                        season === "Июнь" ? console.log("Лето") :
                            season === "Июль" ? console.log("Лето") :
                                season === "Август" ? console.log("Лето") :
                                    season === "Сентябрь" ? console.log("Осень") :
                                        season === "Октябрь" ? console.log("Осень") :
                                            season === "Ноябрь" ? console.log("Осень") :
                                                console.log("Это не месяц!")

//_____________________________________________________________________________

let time = prompt()

if (time >= 0 && time <= 15){
    console.log("Время относится к четверти часа")
} else if (time > 15 && time <= 30){
    console.log("Время относится к половине часа")
} else if (time > 30 && time <= 45){
    console.log("Время относится к 3/4 часа")
} else if (time > 45 && time <= 60){
    console.log("Время относится к целому часа")
} else {
    console.log("Неизвестный диапазон")
}

time >= 0 && time <= 15 ? console.log("Время относится к четверти часа") :
    time > 15 && time <= 30 ? console.log("Время относится к половине часа") :
        time > 30 && time <= 45 ? console.log("Время относится к 3/4 часа") :
            time > 45 && time <= 60 ? console.log("Время относится к целому часа") :
                console.log("Неизвестный диапазон")

switch (true) {
    case time >= 0 && time <= 15:
        console.log("Время относится к четверти часа")
        break
    case time > 15 && time <= 30:
        console.log("Время относится к половине часа")
        break
    case time > 30 && time <= 45:
        console.log("Время относится к 3/4 часа")
        break
    case time > 45 && time <= 60:
        console.log("Время относится к целому часа")
        break
    default:
        console.log("Неизвестный диапазон")
}