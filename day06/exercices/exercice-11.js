/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 11 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * ÉCHANTILLONNAGE (SLICE)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * À partir d'un grand tableau de 100 éléments, utilisez .slice() pour extraire les 10 premiers (la première page).
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-11
 * ▶️ Commande : node day05/exercices/exercice-11.js
 */
'use strict';

const tableau =[];
for(let i=1 ; i<= 100 ; i++){
    tableau.push(i);
}
let tabextraire = tableau.slice(0,10)

console.log(tabextraire);
