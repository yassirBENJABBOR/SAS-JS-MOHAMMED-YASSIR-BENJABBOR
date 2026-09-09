/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 02 · EXERCICE 10 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * LA FACTORIELLE
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Calculez la factorielle de 6 (écrit 6! = 6 * 5 * 4 * 3 * 2 * 1) avec une boucle.
 *
 * RÉSULTAT ATTENDU
 * 720
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-10
 * ▶️ Commande : node day02/exercices/exercice-10.js
 */
'use strict';

let factorielle = 6;
let result = 1;
for (let i = 1; i <= factorielle; i++) {
    result *= i;
}
console.log("la factorielle de " +factorielle +" est : " + result);