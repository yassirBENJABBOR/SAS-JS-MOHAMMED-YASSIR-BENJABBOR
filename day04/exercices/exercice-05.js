/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 03 · EXERCICE 05 · NIVEAU 1 : FONDATIONS (DÉBUTANTS)
 * PÉRIMÈTRE AVEC VALEUR PAR DÉFAUT
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Écrivez une fonction perimetreRectangle(longueur, largeur = 5). Si la largeur n'est pas fournie lors de l'appel, elle vaudra 5 par défaut. Testez-la avec perimetreRectangle(10).
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-05
 * ▶️ Commande : node day03/exercices/exercice-05.js
 */
'use strict';

function perimetreRectangle(long,larg){
    return 2* (long+larg) ;
}
console.log(perimetreRectangle(5,5),'m²')