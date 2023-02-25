//1-е задание
let a = '34'
console.log(Number(a))
console.log(parseInt(a))

//2-е задание
let b = 29.92
console.log(Math.floor(b))   //округление в меньшую сторону
console.log(Math.ceil(b))   //округление в большую сторону
console.log(Math.round(b))   //округление в ближайшую сторону
console.log(b.toFixed())   //округление в ближайшую сторону + в строку

// //3-е задание
console.log(Math.round(Math.random(1)*10))
console.log(Math.round(Math.random(30) * 90))
console.log(Math.round(Math.random(200) * 500))


//4-е задание
let c ='aBRAcADBRA'
console.log(c.toUpperCase())
console.log(c[4].toUpperCase())
console.log(c.toLowerCase())
console.log(c[c.length -2].toLowerCase())

//5-е задание
let d ='Hello world'
console.log(d[1])
console.log(d[2])
console.log(d[d.length - 1])
console.log(d[d.length - 2])

//6-е задание
let e ='Hello world'
console.log(e.length)

//7-е задание
let f =' abracaDabra'
console.log(f[6]) //такой способ помогает с поиском подстроки с 0 (с лева)
console.log(f[f.length - 1]) //такой способ помогает с поиском подстроки с -1 (с права)
console.log(f.startsWith("abr")) // ищет данную подстроку в начале строки
console.log(f.endsWith("bra")) // ищет данную подстроку в конце строки
console.log(f.trim().length) // показывает все элементы кроме пробела

//8-е задание
let g = "Propagination"
console.log(g.slice(5)) // вырезает 1-ые 5 элементов и показывает остальное
console.log(g.slice(0, 5)) // показывет элементы от 0 и до 5-ого
console.log(g.substr(0, 6)) // вырезает 1-ые 6 элементов и показывает их
console.log(g.substring(6)) // вырезает 1-ые 6 элементов и показывает остальное
console.log(g.substring(0, 6)) // показывет элементы от 0 и до 6-ого