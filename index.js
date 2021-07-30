const champ_array = [
                "Aatrox",
                "Ahri",
                "Akali",
                "Alistar",
                "Amumu",
                "Anivia",
                "Annie",
                "Aphelios",
                "Ashe",
                "AurelionSol",
                "Azir",
                "Bard",
                "Blitzcrank",
                "Brand",
                "Braum",
                "Caitlyn",
                "Camille",
                "Cassiopeia",
                "ChoGath",
                "Corki",
                "Darius",
                "Diana",
                "DrMundo",
                "Draven",
                "Ekko",
                "Elise",
                "Evelynn",
                "Ezreal",
                "Fiddlesticks",
                "Fiora",
                "Fizz",
                "Galio",
                "Gangplank",
                "Garen",
                "Gnar",
                "Gragas",
                "Graves",
                "Gwen",
                "Hecarim",
                "Heimerdinger",
                "Illaoi",
                "Irelia",
                "Janna",
                "JarvanIV",
                "Jax",
                "Jayce",
                "Jhin",
                "Jinx",
                "Kaisa",
                "Kalista",
                "Karma",
                "Karthus",
                "Kassadin",
                "Katarina",
                "Kayle",
                "Kayn",
                "Kennen",
                "KhaZix",
                "Kindred",
                "Kled",
                "KogMaw",
                "LeBlanc",
                "LeeSin",
                "Leona",
                "Lillia",
                "Lissandra",
                "Lucian",
                "Lulu",
                "Lux",
                "Malphite",
                "Malzahar",
                "Maokai",
                "MasterYi",
                "MissFortune",
                "Mordekaiser",
                "Morgana",
                "Nami",
                "Nasus",
                "Nautilus",
                "Neeko",
                "Nidalee",
                "Nocturne",
                "Nunu",
                "Olaf",
                "Orianna",
                "Ornn",
                "Pantheon",
                "Poppy",
                "Pyke",
                "Qiyana",
                "Quinn",
                "Rakan",
                "Rammus",
                "RekSai",
                "Rell",
                "Renekton",
                "Rengar",
                "Riven",
                "Rumble",
                "Ryze",
                "Samira",
                "Sejuani",
                "Senna",
                "Seraphine",
                "Sett",
                "Shaco",
                "Shen",
                "Shyvana",
                "Singed",
                "Sion",
                "Sivir",
                "Skarner",
                "Sona",
                "Soraka",
                "Swain",
                "Sylas",
                "Syndra",
                "TahmKench",
                "Taliyah",
                "Talon",
                "Taric",
                "Teemo",
                "Thresh",
                "Tristana",
                "Trundle",
                "Tryndamere",
                "TwistedFate",
                "Twitch",
                "Udyr",
                "Urgot",
                "Varus",
                "Vayne",
                "Veigar",
                "VelKoz",
                "Vi",
                "Viego",
                "Viktor",
                "Vladimir",
                "Volibear",
                "Warwick",
                "Wukong",
                "Xayah",
                "Xerath",
                "XinZhao",
                "Yasuo",
                "Yone",
                "Yorick",
                "Yuumi",
                "Zac",
                "Zed",
                "Ziggs",
                "Zilean",
                "Zoe",
                "Zyra"
            ];

var random_index = Math.floor(Math.random()* champ_array.length);

correct = false;
failed = true;
doPause = false; 

points = 0;
max_points = 0;

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = 1215;
canvas.height = 717;
var champ = champ_array[random_index];

const splashArt = new Image();
splashArt.src = "minigame/champion_data/img/champion/splash/"+champ+"_0.jpg";


function drawSplash(img, sX, sY, sW, sH, dX, dY, dW, dH){
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}

function newSplash(){
    random_index = Math.floor(Math.random()* champ_array.length);
    champ = champ_array[random_index];
    splashArt.src = "minigame/champion_data/img/champion/splash/"+champ+"_0.jpg";
}

function pause(){
    doPause = true;
}


var time = 75;
var counter = 0;

var timeleft = time;

setInterval(function(){

    ctx.clearRect(0,0,canvas.width,canvas.height);
    drawSplash(splashArt, 0, 0, 1215, 717, 0, 0, 1215, 717);

    document.getElementById("points").innerHTML = points + "  Points in a row";
    document.getElementById("max-points").innerHTML = max_points + "  Max Points";

    if(doPause == true){
        alert("Pause ! Click to Continue");
        doPause = false;
    }else if(timeleft <= 0){
        document.getElementById("countdown").innerHTML= "Failed";
        failed = true;
        if(points > max_points){max_points = points;}
        if(points > max_points){
            max_points = points;
        }
        points = 0;
        counter = 0;
        time = 75;
        timeleft = time;
        document.getElementById("points").innerHTML =  points + "  Points in a row";
        document.getElementById("max-points").innerHTML = max_points + "  Max Points";
        newSplash();
    }else if(correct == false){
        document.getElementById("countdown").innerHTML = timeleft/5 + " secs remaining";
        timeleft -= 1;
    }else{
        timeleft = time;
        correct = false;
        document.getElementById("countdown").innerHTML= "Correct";
        points += 1;
        counter += 1;
        document.getElementById("points").innerHTML =  points + "  Points in a row";
    }
  
    if(counter == 10){
        time = 50; 
    }
    else if(counter == 20){
        time = 35;
    }
    else if(counter == 40){
        time = 25;
    }
    else if(counter == 60){
        time = 20;
    }

}, 200);


window.addEventListener("input", function(e){
    input = document.getElementById("guess").value
    if(input == champ){
        document.getElementById("guess").value = "";
        correct  = true;
        failed = false;
        newSplash();
    }
});
