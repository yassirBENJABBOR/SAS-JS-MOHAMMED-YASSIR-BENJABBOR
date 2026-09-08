/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 01 · EXERCICE 13 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * CALCULATRICE BASIQUE AVEC SWITCH
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Déclarez nombre1 = 10, nombre2 = 5 et operateur = "*". Utilisez une instruction switch pour gérer l'addition, la soustraction, la multiplication et la division, et affichez le résultat.
 *
 * RÉSULTAT ATTENDU
 * 50
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-13
 * ▶️ Commande : node day01/exercices/exercice-13.js
 */
'use strict';

let nombre1 = 10;
let nombre2 = 5;
let operateur = "*";

switch (operateur) {
    case "+":
        console.log(nombre1 + nombre2);
        break;
    case "-":
        console.log(nombre1 - nombre2);
        break;
    case "*":
        console.log(nombre1 * nombre2);
        break;
    case "/":
        if (nombre2 !== 0) {
            console.log(nombre1 / nombre2);
        } else {
            console.log("Erreur : Division par zéro");
        }
        break;
    default:
        console.log("Opérateur non valide");
}   
