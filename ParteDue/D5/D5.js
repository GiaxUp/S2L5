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
// for (let i = 0; i < pets.length; i++) {
//   console.log(pets[i]);
// }

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

// const pets = ["dog", "cat", "hamster", "redfish"];
// pets.sort();
// for (let i = 0; i < pets.length; i++) {
//   console.log(pets[i]);
// }

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

// const pets = ["dog", "cat", "hamster", "redfish"];
// pets.sort().reverse();
// for (let i = 0; i < pets.length; i++) {
//   console.log(pets[i]);
// }

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

// const pets = ["dog", "cat", "hamster", "redfish"];
// pets.push(pets.shift());
// for (let i = 0; i < pets.length; i++) {
//   console.log(pets[i]);
// }

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
// const justTrims = [];
// for (let i = 0; i < cars.length; i++) {
//   justTrims.push(cars[i].trims[0]);
// }
// console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
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
//   if (cars[i].color.charAt(0) === "b") {
//     console.log("Fizz");
//   } else {
//     console.log("Buzz");
//   }
// }

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/

// const numericArray = [6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105];
// let i = 0;
// while (numericArray[i] !== 66) {
//   console.log(numericArray[i]);
//   i++;
// }

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/

// const charactersArray = ["g", "n", "u", "z", "d"]; // 7, 14, 21, 26, 4
// const numbersArray = [];
// for (let i = 0; i < charactersArray.length; i++) {
//   const letter = charactersArray[i];
//   switch (letter) {
//     case "g":
//       numbersArray.push(7);
//       break;
//     case "n":
//       numbersArray.push(14);
//       break;
//     case "u":
//       numbersArray.push(21);
//       break;
//     case "z":
//       numbersArray.push(26);
//       break;
//     case "d":
//       numbersArray.push(4);
//       break;
//   }
// }
// console.log(numbersArray);
