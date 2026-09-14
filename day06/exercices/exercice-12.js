/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 12 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * LE DÉDOUBLONNEUR
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Écrivez une fonction qui prend un tableau avec des doublons [1, 2, 2, 3, 4, 4, 5] et retourne un nouveau tableau sans doublons.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-12
 * ▶️ Commande : node day05/exercices/exercice-12.js
 */
'use strict';
const tableau = [1, 2, 2, 3, 4, 4, 5];
function DeletDoubleure(tableau){
    const NvTableau =[]
    for(let i=0 ;i < tableau.length ;i++){
        if (!NvTableau.includes(tableau[i])){
            NvTableau.push(tableau[i]);
        }
    }
    return NvTableau ;

}
console.log(DeletDoubleure(tableau))