/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 07 · EXERCICE 09 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * FILTRAGE DE DONNÉES
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Dans le même tableau de candidats, écrivez une fonction qui retourne un nouveau tableau contenant uniquement les candidats ayant un score >= 10.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-09
 * ▶️ Commande : node day07/exercices/exercice-09.js
 */
'use strict';

const candidats = [
  { nom: "yassir", score: 8 },
  { nom: "saad", score: 12 },
  { nom: "mohammed", score: 15 }
];
function candidatsAdmis(candidats) {
  const plusgrandscore= [];

  for(let i=0 ; i<candidats.length ;i++){
    if(candidats[i].score >=10){
      plusgrandscore.push(candidats[i])
    }
  }
  return plusgrandscore;
}

console.log(candidatsAdmis(candidats));