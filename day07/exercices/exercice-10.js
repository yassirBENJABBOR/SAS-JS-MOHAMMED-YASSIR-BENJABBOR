/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 07 · EXERCICE 10 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * COMPTAGE DE VALEURS
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Vous avez une chaîne de caractères "abracadabra". Créez une fonction qui retourne un objet comptant le nombre d'occurrences de chaque lettre. (ex: { a: 5, b: 2, r: 2, c: 1, d: 1 }).
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-10
 * ▶️ Commande : node day07/exercices/exercice-10.js
 */
'use strict';
let caractères = "abracadabra";
let conpteure ={};

for(let i=0 ; i<caractères.length ; i++){
  let lettre = caractères[i];
  if(conpteure[lettre]){
    conpteure[lettre]+=1
  }else{
    conpteure[lettre]=1
  }
}
console.log(conpteure)
