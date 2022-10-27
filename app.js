let Hscore = document.getElementById("Hscorefinal");
let Gscore = document.getElementById("Gscorefinal");

let t1Score = 0;
let t2Score = 0;

//buttons for home score
function HaddOne(){
    t1Score = t1Score + 1;
    Hscore.innerText = t1Score;
    console.log(t1Score);
}

function HaddTwo(){
    t1Score = t1Score + 2;
    Hscore.innerText = t1Score;
    console.log(t1Score);
}

function HaddThree(){
    t1Score = t1Score + 3;
    Hscore.innerText = t1Score;
    console.log(t1Score);
}

//buttons for guest score
function GaddOne(){
    t2Score = t2Score + 1;
    Gscore.innerText = t2Score;
    console.log(t2Score);
}

function GaddTwo(){
    t2Score = t2Score + 2;
    Gscore.innerText = t2Score;
    console.log(t2Score);
}

function GaddThree(){
    t2Score = t2Score + 3;
    Gscore.innerText = t2Score;
    console.log(t2Score);
}

//clear counter button

function clearScore(){
    t1Score = 0;
    t2Score = 0;
    Hscore.innerText = t1Score;
    Gscore.innerText = t2Score;

}

//falling basket balls

function heartmaker(){
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    heart.style.fontSize = Math.random() * 1 + 2.5 + 'rem';
    heart.innerText = "🏀";
    document.body.appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(heartmaker, 300);
