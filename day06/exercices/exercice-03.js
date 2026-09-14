/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 03 · NIVEAU 1 : FONDATIONS (DÉBUTANTS)
 * SUPPRESSION
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Prenez le tableau précédent. Retirez le dernier invité (Amine) et affichez le tableau mis à jour.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-03
 * ▶️ Commande : node day05/exercices/exercice-03.js
 */
'use strict';

const invites = ["Yassine", "Sara","Amine"];
invites.shift("Amine")
console.log( invites)