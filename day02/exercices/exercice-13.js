/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 02 · EXERCICE 13 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * SUITE DE FIBONACCI
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Générez et affichez les 10 premiers nombres de la suite de Fibonacci. (La suite commence par 0, 1. Ensuite, chaque nombre est la somme des deux précédents : 0, 1, 1, 2, 3, 5, 8, 13...).
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-13
 * ▶️ Commande : node day02/exercices/exercice-13.js
 */
'use strict';

let fib1 = 0;
let fib2 = 1;
console.log(fib1);
console.log(fib2);
for (let i = 2; i < 10; i++) {
    let fib3 = fib1 + fib2;
    console.log(fib3);
    fib1 = fib2;
    fib2 = fib3;
}
