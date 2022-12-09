/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/

// const pets = ["dog", "cat", "hamster", "redfish"];
// console.log(pets);

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

// const pets = ["dog", "cat", "hamster", "redfish"];
// pets.sort();
// console.log(pets);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

// const pets = ["dog", "cat", "hamster", "redfish"];
// pets.sort().reverse();
// console.log(pets);

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

// const pets = ["dog", "cat", "hamster", "redfish"];
// pets.push(pets.shift());
// console.log(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/

// const cars = [
//   {
//     brand: "Ford",
//     model: "Fiesta",
//     color: "red",
//     trims: ["titanium", "st", "active"],
//   },
//   {
//     brand: "Peugeot",
//     model: "208",
//     color: "blue",
//     trims: ["allure", "GT"],
//   },
//   {
//     brand: "Volkswagen",
//     model: "Polo",
//     color: "black",
//     trims: ["life", "style", "r-line"],
//   },
// ];
// for (let i = 0; i < cars.length; i++) {
//   (cars[0].licensePlate = "15648SR"), (cars[1].licensePlate = "34854GF"), (cars[2].licensePlate = "45132MZ");
// }
// console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

// const cars = [
//   {
//     brand: "Ford",
//     model: "Fiesta",
//     color: "red",
//     trims: ["titanium", "st", "active"],
//   },
//   {
//     brand: "Peugeot",
//     model: "208",
//     color: "blue",
//     trims: ["allure", "GT"],
//   },
//   {
//     brand: "Volkswagen",
//     model: "Polo",
//     color: "black",
//     trims: ["life", "style", "r-line"],
//   },
// ];

// cars.push({
//   brand: "Mercedes",
//   model: "W246",
//   color: "white",
//   trims: ["whatever", "exampletr", "ihavenofantasy"],
// });
// for (let i = 0; i < cars.length; i++) {
//   cars[0].trims.splice(2, 1), cars[1].trims.splice(1, 1), cars[2].trims.splice(2, 1), cars[3].trims.splice(2, 1);
// }
// console.log(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/

// const cars = [
//   {
//     brand: "Ford",
//     model: "Fiesta",
//     color: "red",
//     trims: ["titanium", "st", "active"],
//   },
//   {
//     brand: "Peugeot",
//     model: "208",
//     color: "blue",
//     trims: ["allure", "GT"],
//   },
//   {
//     brand: "Volkswagen",
//     model: "Polo",
//     color: "black",
//     trims: ["life", "style", "r-line"],
//   },
// ];
// let firstPropriety = cars[0].trims.slice(0, 1);
// let secondPropriety = cars[1].trims.slice(0, 1);
// let thirdPropriety = cars[2].trims.slice(0, 1);
// const justTrims = [firstPropriety, secondPropriety, thirdPropriety];
// console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/

// Senza ciclo while
// const numericArray = [6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105];
// const newnumeriArray = numericArray.slice(0, 14);
// console.log(newnumeriArray);

//Con ciclo while - Da fare
// const numericArray = [6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105];
// while (numericArray < ["14"]) {
//   numericArray--;
//   console.log(numericArray);
// }

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"]; // 7, 14, 21, 26, 4
const numbersArray = [];
charactersArray.splice(0, 1, "7");

switch (numbersArray) {
  case "g":
    charactersArray.splice(0, 1, "7");
    break;
  case "n":
    console.log("14");
    break;
  case "u":
    console.log("21");
    break;
  case "z":
    console.log("26");
    break;
  case "d":
    console.log("4");
    break;
}
// let numbersArray = [];
console.log(numbersArray);
// console.log(numbersArray);

// Da fare per bene: 8, 9 (fatto ma alternativo) e 10
