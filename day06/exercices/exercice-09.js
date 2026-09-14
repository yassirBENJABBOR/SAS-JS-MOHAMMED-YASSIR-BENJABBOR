/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 09 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * FILTRAGE MANUEL (LES PAIRS)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction qui prend un tableau de nombres, par exemple [1, 2, 3, 4, 5, 6], et retourne un NOUVEAU tableau ne contenant que les nombres pairs.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-09
 * ▶️ Commande : node day05/exercices/exercice-09.js
 */
'use strict';

const tableau = [1, 4, 7, 10, 13, 16, 21, 24];
function filtreNumPaire (tableau){
    const tablepaire= [];
    for (let i = 0; i < tableau.length; i++) {
        if (tableau[i] % 2 === 0) {
        tablepaire.push(tableau[i]); 
        }
    }
    return tablepaire;
}
console.log (filtreNumPaire (tableau))
