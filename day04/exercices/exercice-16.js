/*
 * ─────────────────────────────────────────────────────────────
 * JOUR 03 · EXERCICE 16 · NIVEAU 3 : DÉFI (AVANCÉS)
 * CLOSURE (FERMETURE)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction creerCompteur(). À l'intérieur, déclarez let count = 0. Retournez une fonction qui, lorsqu'elle est appelée, fait count++ et retourne count. Stockez le résultat de creerCompteur() dans une variable monCompteur, et appelez-la 3 fois. Comprenez pourquoi l'état est conservé !
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-16
 * ▶️ Commande : node day03/exercices/exercice-16.js
 */
'use strict';

function creerCompteur(){
    let count = 0
    count++;
    return count;
}
function moncompteur(n){
    let moncompteur =0 ;
    for (let i=0 ;i <=n ;i++){
        moncompteur += creerCompteur()
    }
    return moncompteur 
}
console.log(moncompteur(1)); 
