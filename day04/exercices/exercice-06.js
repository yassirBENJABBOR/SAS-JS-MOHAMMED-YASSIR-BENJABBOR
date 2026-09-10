/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 03 · EXERCICE 06 · NIVEAU 1 : FONDATIONS (DÉBUTANTS)
 * MESSAGE D'ACCUEIL
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction bienvenue(prenom, nom) qui retourne "Bienvenue [prenom] [nom]".
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-06
 * ▶️ Commande : node day03/exercices/exercice-06.js
 */
'use strict';

function bienvenue(prenom,nom){
    let bnv = "Bienvenue "+ prenom +" "+ nom;
    return bnv ;
}
console.log(bienvenue("yassir","benjabbor"))