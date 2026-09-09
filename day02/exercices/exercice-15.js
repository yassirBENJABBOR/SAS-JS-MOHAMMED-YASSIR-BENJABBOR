/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 02 · EXERCICE 15 · NIVEAU 3 : DÉFI (AVANCÉS)
 * LA PYRAMIDE DE MARIO
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Générez dans la console une demi-pyramide d'étoiles de 5 lignes :
 *
 * - - -
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-15
 * ▶️ Commande : node day02/exercices/exercice-15.js
 */
'use strict';

for (let i = 1; i <= 5; i++) {
    let line = ' ';
    for (let j = 1; j <= i; j++) {
        line += '-';
    }
    console.log(line);
}