/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 05 · EXERCICE 09 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * CENSURE
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Remplacez le mot "idiot" par "*" dans la phrase : "Ne sois pas idiot, réfléchis avant de parler.".
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-09
 * ▶️ Commande : node day05/exercices/exercice-09.js
 */
'use strict';

const phrase = "Ne sois pas idiot, réfléchis avant de parler.";
const remplaceure = "idiot";

const NVphrase = phrase.replace(remplaceure,"*".repeat(remplaceure.length));

console.log(NVphrase);


