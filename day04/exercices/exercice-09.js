/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 03 · EXERCICE 09 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * MAXIMUM DE TROIS NOMBRES
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Sans utiliser Math.max(), écrivez une fonction trouverMax(a, b, c) qui retourne le plus grand des trois nombres en utilisant des conditions if/else.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-09
 * ▶️ Commande : node day03/exercices/exercice-09.js
 */
'use strict';

function trouverMax(a,b,c){
    let grand 
    if (a>b && a>c ){
        grand = a;
    }else if(b>a && b>c){
        grand =b;

    }else{
        grand = c 
    }
    return grand
}
console.log("le plus grand nombre est: " + trouverMax(8,100,9))