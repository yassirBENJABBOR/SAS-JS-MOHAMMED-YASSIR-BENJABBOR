/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 08 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * RECHERCHE DU MAXIMUM ET MINIMUM
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction qui parcourt un tableau de nombres aléatoires et retourne le plus grand et le plus petit nombre, SANS utiliser Math.max ni Math.min.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-08
 * ▶️ Commande : node day05/exercices/exercice-08.js
 */
'use strict';

const tableau = [42, 7, 89, 12, 3, 99, 54, 21];
function trouvermaxmin (tableau){
   let tabmax = tableau[0]
   let tabmin = tableau[0]

    for(let i=0 ; i<=tableau.length ; i++){
        if (tableau[i]>tabmax){
            tabmax =tableau[i]
        }
        if (tableau[i<tabmin]){
            tabmin =tableau[i]
        }
    }
    return {tabmax,tabmin}
}
console.log(trouvermaxmin (tableau))
