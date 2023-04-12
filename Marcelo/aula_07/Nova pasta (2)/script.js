function composto(name){

        // Reactive Nonmetal
        const corRN:'#e6f0ff';
        // Noble Gas
         const corNG: #ffebee ;
        /* Alkali Metal*/
        const corAM:'#DBF8FF';
        /* Alkaline Earth Metal*/
        const corAEM:'#ffebeb';
        /* Metalloid*/
        const corM:'#fef9e6';
        /* Post-transition Metal*/
        const corPTM:'#DCFAEB';
        /* Transition Metal*/
        const corTM:'#f5ecfd';
        /* Lanthanide*/
        const corL:'#E6f5ff';
        /* Actinide*/
        const corA:'#ffeadb';
        /* Unknown Chemical Properties*/
    --corUCP:#e9e9ec;
    if(name == 'H'){
        let compostosname = 'Hydrogen';
        let copostosigla = 'H';
        let copostocategoria = 'Reactive Nonmetal';
        let copostodescriçao = 'Hydrogen is the most common element in the universe, making up about 75% of its mass.';
        document.getElementById('namecoposto').innerHTML = compostosname;
        document.getElementById('siglacoposto').innerHTML = copostosigla;
        document.getElementById('categoriacoposto').innerHTML = copostocategoria;
        document.getElementById('descriçaocoposto').innerHTML = copostodescriçao;
        
    } 
    if (name == 'He') {
        let compostosname = 'Ipsum';
        let copostosigla = 'IP';
        let copostocategoria = 'Nãometal';
        let copostodescriçao = 'IPSUM.';
        document.getElementById('namecoposto').innerHTML = compostosname;
        document.getElementById('siglacoposto').innerHTML = copostosigla;
        document.getElementById('categoriacoposto').innerHTML = copostocategoria;
        document.getElementById('descriçaocoposto').innerHTML = copostodescriçao;
        document.getElementById('descriçaocoposto').style.color=
    }
}