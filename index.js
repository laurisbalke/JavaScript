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