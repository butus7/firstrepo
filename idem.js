let paciensek1 =[];
let paciensek2 =[];
const ember1 = {
    nev: "Balint",
    kor: 23,
    magassag: 180 + "cm",
    suly: 77 + "kg"
};
const ember2 = {
    nev: "Boris",
    kor: 30,
    magassag: 180 + "cm", 
    suly: 65 + "kg"
};

const ember3 = {
    nev: "Andor",
    kor: 44,
    magassag:177,
    suly: 99 + "kg",
};
const ember4 = {
    nev: "Marko",
    kor: 71,
    magassag:183,
    suly: 87 + "kg"
};
paciensek1 = [ember1,ember2];

paciensek2 = [ember3,ember4];

const doktor1 ={
    nev:"Atilla",
    paciensek1,
};

const doktor2 = {
    nev:"Janos",
    paciensek2,};

const korhaz ={
    neve: "BajmokAmbulance",
    doktorok:[doktor1,doktor2,]
};
console.log(korhaz.doktorok[0].paciensek1[0].nev,paciensek1[0].kor,korhaz.doktorok[1].paciensek2[1].nev,paciensek2[1].kor);