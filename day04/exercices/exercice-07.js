/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 03 · EXERCICE 07 · NIVEAU 1 : FONDATIONS (DÉBUTANTS)
 * FONCTION DANS UNE FONCTION
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Déclarez une fonction carre(x) puis une fonction sommeDesCarres(a, b) qui appelle carre pour a et pour b, et retourne la somme de leurs carrés.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-07
 * ▶️ Commande : node day03/exercices/exercice-07.js
 */
'use strict';

function carre(x){
    return x*x
}
function sommeDesCarres(a, b){
    let A = carre(a);
    let B = carre(b) ;
    return A+B ;
}
console.log(sommeDesCarres(2,2))