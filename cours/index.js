//======================================================//
//
//         CANVAS
//
//======================================================//

// const draw = () => {
//   const canvas = document.getElementById("canvas");
//   const ctx = canvas.getContext("2d");

//   ctx.fillStyle = "rgb(200,0,0)";
//   ctx.fillRect(10, 10, 50, 50);

//   ctx.fillStyle = "rgba(0,100,200,0.5)";
//   ctx.fillRect(30, 30, 100, 50);

//   ctx.fillStyle = "rgba(100,100,200,0.5)";
//   ctx.fillRect(10, 25, 100, 100);
//   ctx.clearRect(35, 25, 40, 40);
//   ctx.strokeRect(125, 75, 50, 50);

//   ctx.fillStyle = "rgba(200,100,200,0.8)";
//   ctx.beginPath();
//   ctx.moveTo(180, 150);
//   ctx.lineTo(100, 75);
//   ctx.lineTo(100, 150);
//   ctx.fill();
// };

// window.addEventListener("load", draw);

//======================================================//
//
//         TRY / CATCH
//
//======================================================//

// try {
//   // Test un block de code
//   maFonction();
// } catch (error) {
//   console.log(err);
// } finally {
//   console.log("Est executé dans tous les cas");
// }

// Throw

// const isNumber = (num) => {
//   if (isNaN(num)) {
//     throw "Not a number !";
//   } else {
//     console.log("C'est un nombre");
//   }
// };

// try {
//   isNumber("2d");
// } catch (err) {
//   console.log(err);
// }

//======================================================//
//
//         STRICT MODE
//
//======================================================//
// Permet d'avoir du JS plus "cadré"

"use strict";

voiture = "Toyota";
console.log(voiture);
