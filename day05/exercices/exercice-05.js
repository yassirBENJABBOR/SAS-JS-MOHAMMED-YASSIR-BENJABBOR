/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 05 · EXERCICE 05 · NIVEAU 1 : FONDATIONS (DÉBUTANTS)
 * TROUVER LA POSITION
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Trouvez et affichez l'index (la position) du premier espace dans la phrase "Bonjour tout le monde".
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-05
 * ▶️ Commande : node day05/exercices/exercice-05.js
 */
'use strict';


const phrase = "Bonjour tout le monde";
const indexEspace = phrase.indexOf(" ");

console.log("Index du premier espace :", indexEspace);