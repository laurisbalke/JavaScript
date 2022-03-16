let mokSum = parseInt(prompt ("Jusu moketina suma yra:"));

let arbata = 0;

if (mokSum < 0) {
    console.log("Mes jums nemokesime uz tai kad pavalgete")
}
else if (mokSum < 20) {
    arbata = mokSum * 0.1;
    let sakinys = `Pradine suma: ${mokSum}; Arbata: ${arbata}; Pilna mokejimo suma: ${mokSum + arbata}`;
console.log(sakinys);
}
else if (mokSum <= 50) {
    arbata = mokSum * 0.075;
    let sakinys = `Pradine suma: ${mokSum}; Arbata: ${arbata}; Pilna mokejimo suma: ${mokSum + arbata}`;
console.log(sakinys);
}
else
{arbata = mokSum * 0.05;
    let sakinys = `Pradine suma: ${mokSum}; Arbata: ${arbata}; Pilna mokejimo suma: ${mokSum + arbata}`;
console.log(sakinys)}

const baldai = ['lempa', 'lentynos', 'sofa', 'stalas'];

baldai.pop();
baldai.shift();
baldai.push("kede");
baldai.unshift("spintele");


const baldai2 = ['lempa', 'lentynos', 'sofa', 'stalas'];
baldai2.splice(0, 1);
baldai2.splice(2, 1);
const spintele = ['spintele'];
const kede = ["kede"];
const baldai3 = spintele.concat(baldai2,kede);

//dar kazkas
//mowe

const baldai4 = ['lempa', 'lentynos', 'sofa', 'stalas'];
baldai4.splice(0, 1);
baldai4.splice(2, 1);
const spintelee = ['spintele'];
const kedee = ["kede"];
const baldai5 = spintelee.concat(baldai4,kedee);

// Skaiciai
let pirmasSkaicius = 12;
let antrasSkaicius = 7;
let liekana = pirmasSkaicius%antrasSkaicius;
let suma = pirmasSkaicius + antrasSkaicius;
let daugyba = pirmasSkaicius * antrasSkaicius;
let kelimasKampu = pirmasSkaicius ** antrasSkaicius;
let kelimasKampuOPoToDalybaIsAntroSkaiciaus = (pirmasSkaicius ** antrasSkaicius) / antrasSkaicius;
let kelimasKampuIrSaknisIsAntroSkaiciaus = Math.pow(kelimasKampu, 1/antrasSkaicius);
console.log("Hello World")

let vardas = "laurynas";
let surname = "balke";
let gimimoMetai = 1994;
let dabartiniaiMetai = 2022;
let sakinys = `${vardas} ${surname} yra ${dabartiniaiMetai - gimimoMetai} metu amziaus`;
console.log(sakinys);
console.log(sakinys.length);

let text1 = "mazas";
let text2 = "bobas";

let result = text1.concat(" ",text2);

const dienosPietus = {
    ingridientai: ["kiausiniai", "vistiena", "pomidorai", "baklazanai"],
    kaina: "15 euru",
    ivertinimas: "0-10",
    vietaKurValgete: "Sventos Marijos gatve 1005",
    arRekomneduojateKitiems: ["True", "False"]
}

const manoMasyvas = [dienosPietus, {}, {}]

for (let i = 20; i >=0; i= i-4) {
    console.log(i)
}

const skaiciai = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]

for (let i = 1; i <= skaiciai.length; i=i+2) {
    console.log(skaiciai[1*i])
}

for (let i=16; i>=0; i=i-2) {
    console.log(skaiciai[i+1])
}

for (let i = 0; i<= skaiciai.length-1; i++) {
    if (skaiciai[i] % 2 === 0) {
        console.log(skaiciai[i])
    }
}

const myArr = ['one', "two", "three", "four", "five"]

for (let i = myArr.length-1; i>=0; i=i-1) {
    console.log(myArr[i])
}

const skaiciais = [0, 5, 29, 23, 4, 5, 2, 5, 24, 89, 6, 5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16];
const daugiauNeiAstuoni = [];
for (let i=0; i<skaiciais.length; i++) {
    if (skaiciais[i]>8) {
        daugiauNeiAstuoni.push(skaiciais[i])
    }
}
console.log(daugiauNeiAstuoni);
let didskaicius = 0;
let didele = 0;

for (let i = 0; i<=skaiciais.length-1; i++) {
    if (didskaicius<skaiciais[i]) {
        didskaicius = skaiciais[i]
    }
}

// Nested loops
for (let isorinis = 1; isorinis <= 4; isorinis++){
    console.log(`Isorinis loop'as sukasi ${isorinis} karta`)
    for(let vidinis = 1; vidinis < 5; vidinis++) {
      console.log(`Vidinis loopas sukasi ${vidinis} karta`)
    }
  }

  const activities = [
    ['Work', 9],
    ['Eat', 1],
    ['Commute', 2],
    ['Play Game', 1],
    ['Sleep', 7]
  ];

  const todoList = ['Pradeti nuo q komandos', 
  'panaudoti prompt, kad gauti duomenis', 
  'panaudoti simbolius ir console atskirti vienai uzduociai nuo kitos'
  ];


let vartotojoIvestaKomanda = prompt('Kokia yra jusu sekanti komanda')

while(vartotojoIvestaKomanda !== 'quit') {
  if (vartotojoIvestaKomanda === 'new') {
    let naujasDarbas = prompt('Iveskite nauja darba i darbu sarasa');
    todoList.push(naujasDarbas);
    vartotojoIvestaKomanda = prompt('Kokia yra jusu sekanti komanda');
  } else if (vartotojoIvestaKomanda === 'list') {
    console.log(`Jusu darbu sarasas:`);
    for (let i = 0; i < todoList.length; i++) {
      console.log(`----------------------`);
      console.log(`${i} - ${todoList[i]}`);
      console.log(`----------------------`);
    } 
    vartotojoIvestaKomanda = prompt('Kokia yra jusu sekanti komanda');
  } else if (vartotojoIvestaKomanda === 'delete') {
    let index = parseInt(prompt('Iveskite norimo istrinti darbo numeri'));
    todoList.splice(index, 1)
    vartotojoIvestaKomanda = prompt('Kokia yra jusu sekanti komanda')
  } else {
    vartotojoIvestaKomanda = 'quit'
    console.log('Ivesta neteisinga komanda')
  }
}



function kelkLaipsniu(a, b) {
    console.log(a ** b);
}
kelkLaipsniu(5, 2)

function didesnis(a, b) {
    if (a>b) {
        console.log(a)
    }
    else {
        console.log(b)
    }
}
didesnis (5, 4)

let num = prompt("kokia siandien savaites diena")

function kokiataidiena(num) {
    if (num==1) {
        console.log("pirmadienis")
    }
    else if (num==2) {
        console.log("antradienis")
    }
    else if (num==3) {
        console.log("treciadienis")
    }
    else if (num==4) {
        console.log("ketvirtadienis")
    }
    else if (num==5) {
        console.log("penktadienis")
    }
    else if (num==6) {
        console.log("sestadienis")
    }
    else {
        console.log("sekmadienis")
    }
}
kokiataidiena(num)

const sudetiVisusSkaicius = [12, 4, 16, 3, 8, 9, 'hi', 12, 2, 1, 5, 3, 9, 55, 292, 13, undefined]
const skaiciukai = sudetiVisusSkaicius.filter(element => typeof element === 'number');
let sum = 0;
function skaiciusuma (arr) {
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
    }
    console.log(sum)
}

skaiciusuma(skaiciukai)

function range(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
}
let resultatas = range(0, 100);
console.log(resultatas);

function kartotiniai(num1, num2) {
    const skaiciai = [];
    const trijuKartotiniai = [];
    const penkiuKartotiniai = [];
    const trijuIrPenkiuKartotiniai = [];

    for (let i = num1; i<= num2; i++) {
        skaiciai.push(i)
    }
    
    for (let i = 0; i<resultatas.length; i++) {
        if (resultatas[i] % 3 === 0) {
            trijuKartotiniai.push(resultatas[i]);
        }
        else if (resultatas[i] % 5 === 0) {
            penkiuKartotiniai.push(resultatas[i]);
        }
        else if (resultatas[i] % 3 === 0 && resultatas[i] % 5 === 0) {
            trijuIrPenkiuKartotiniai.push(resultatas[i]);
        }
    }
console.log(trijuKartotiniai)
console.log(penkiuKartotiniai)
console.log(trijuIrPenkiuKartotiniai)
   }
   kartotiniai(0, 100)

let zodis = prompt("ibesk zodi");
function zodziuzaismas(zodis) {
    let zodziukas = [];
    zodziukas = zodis.charAt(0).toUpperCase() + zodis.slice(1);
    zodziukas = zodis.charAt(zodis.length - 1).toUpperCase + zodis.slice(zodis.length)
    console.log(zodziukas)
}
zodziuzaismas(zodis)

function capitalize(srt) {
    const arrayFromString = str.split(' ');
    for (let i = 0; i < arrayFromString.length; i++) {
        arrayFromString[i] = arrayFromString[i].charAt(0).toUpperCase() + arrayFromString[i].substring(1);
        console.log(arrayFromString)
    }
}

capitalize("laba diena su vistiena")
