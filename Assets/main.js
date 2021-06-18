/*$(document).ready(function () {*/

    // Typewriter effect for homepage using ES6 class
class typeWriter {
    constructor (txtElement, words, wait=2000){
        this.txtElement= txtElement;
        this.words= words;
        this.txt= '';
        this.wordIndex= 0;
        this.wait=parseInt(wait, 10)
        this.type();
        this.isDeleting = false;
    }

    type(){
        // current word index
        const current= this.wordIndex % this.words.length;

        // get full text of current word
        const fullTxt= this.words[current];

        //check if in deleting state
        if(this.isDeleting){
            //Remove character
            this.txt= fullTxt.substring(0, this.txt.length - 1);
        } else {
            //add character
            this.txt= fullTxt.substring(0, this.txt.length + 1);
        }

        //Insert txt into element
        this.txtElement.innerHTML= `<span class="txt">${this.txt}</span>`;

        // Initial Type Speed
        let typeSpeed= 300;
        if (this.isDeleting){
            typeSpeed /=2;
        }

        //check if word is complete
        if (!this.isDeleting && this.txt === fullTxt){
            // Pause at end
            typeSpeed= this.wait;

            //set to true
            this.isDeleting= true;
        } else if (this.isDeleting && this.txt===''){
            this.isDeleting=false;

            //move to next word
            this.wordIndex++;

            //pause before typing again
            typeSpeed=500;
        }


        setTimeout(()=> this.type(), typeSpeed);
    }
}
//Init on DOM load
document.addEventListener('DOMContentLoaded', init);

// Init app
function init(){
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait= txtElement.getAttribute('data-wait');

    //Init typewriter
    new typeWriter(txtElement, words, wait);
}






/*});*/