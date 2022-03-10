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