/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 06 · NIVEAU 1 : FONDATIONS (DÉBUTANTS)
 * FUSION DE TABLEAUX
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Vous avez groupe1 = ["A", "B"] et groupe2 = ["C", "D"]. Fusionnez-les pour obtenir ["A", "B", "C", "D"].
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-06
 * ▶️ Commande : node day05/exercices/exercice-06.js
 */
'use strict';

const groupe1 = ["A", "B"];
const groupe2 = ["C", "D"];
const fision = groupe1.concat(groupe2)

console.log(fision);