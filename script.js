const words = ["Web Developer", "AI Explorer", "Problem Solver", "Innovative Thinker"];
let i = 0;
let timer;

function typingEffect() {
    const typewriter = document.querySelector(".typewriter");
    let word = words[i].split("");
    let loopTyping = function () {
        if (word.length > 0) {
            typewriter.innerHTML += word.shift();
            setTimeout(loopTyping, 150);
        } else {
            setTimeout(deletingEffect, 1000);
        }
    };
    loopTyping();
}

function deletingEffect() {
    const typewriter = document.querySelector(".typewriter");
    let word = typewriter.innerHTML.split("");
    let loopDeleting = function () {
        if (word.length > 0) {
            word.pop();
            typewriter.innerHTML = word.join("");
            setTimeout(loopDeleting, 100);
        } else {
            i = (i + 1) % words.length;
            typingEffect();
        }
    };
    loopDeleting();
}

typingEffect();
