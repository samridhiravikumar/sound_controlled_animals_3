var dog = 0;
var cat = 0;
var cow = 0;
var lion = 0;

function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/1sUFPQk6u/model.json', modelLoaded);
}

function modelLoaded() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("detected").innerHTML = "Detected dog - " + dog + " Detected cat - " + cat +
            " Detected cow - " + cow + " Detected lion - " + lion;
        document.getElementById("detected").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";

        document.getElementById("voice").innerHTML = "Detected voice is of - " + results[0].label;
        document.getElementById("voice").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";

        img = document.getElementById("image");
        if(results[0].label == "Bark"){
           img.src = "https://shravaripatil.github.io/Sound_controlled_animals/bark.gif";
           dog = dog + 1;
        }
        else if(results[0].label == "Meow"){
            img.src = "https://shravaripatil.github.io/Sound_controlled_animals/meow.gif";
            cat = cat + 1;
         }
         else if(results[0].label == "Moo"){
            img.src = "https://media1.giphy.com/media/DO5zi6gg1Z3s4/200w.webp?cid=ecf05e47gbbfjso9fcll8rdysmub7u1kx45va49d8a709nds&rid=200w.webp&ct=s";
            cow = cow + 1;
         }
         else if (results[0].label == "Roar"){
            img.src = "https://acegif.com/wp-content/gif/lion-roar-44.gif";
            lion = lion + 1;
         }

        
        
         

    }
} 