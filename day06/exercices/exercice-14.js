/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 14 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * ROTATION DE TABLEAU
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Prenez [1, 2, 3]. Décalez tout vers la droite pour obtenir [3, 1, 2]. (Indice : enlevez le dernier et ajoutez-le au début).
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-14
 * ▶️ Commande : node day05/exercices/exercice-14.js
 */
'use strict';

const tableau =[1, 2, 3];
tableau.pop();
tableau.unshift(3);
console.log(tableau)
