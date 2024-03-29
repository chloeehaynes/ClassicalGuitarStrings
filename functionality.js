var tension_level = 0;
const NORMAL = 0;
const HARD = 1;

var treble_material = 0;
const CLEAR = 0;
const BLACK = 1;

var bass_material = 0;
const BRONZE = 0;
const SILVER = 1;


function generateStringChoice(){
    setTensionLevel();
    setBassMaterial();
    setTrebleMaterial();

    var string_decison = "";
    var string_description = "";


    if (tension_level == NORMAL){
        //normal tension
        if (bass_material == SILVER){
            //silverplated basses
            if (treble_material == CLEAR){
                //normal tension + silverplated wound + clear nylon ==> EJ45
                string_decison = "EJ45";
                string_description = "These strings aren't too rough on the hands, but still have a great sound with a lot of versatile qualities. This makes them perfect for beginners looking for a clear sound with great projection and articulation.";
                string_link = "https://www.daddario.com/products/guitar/classical-guitar/pro-arte-nylon/ej45-pro-arte-nylon-normal-tension/";
            } else {
                //normal tension + silverplated wound + black nylon ==> EJ49
                string_decison = "EJ49";
                string_description = "These strings aren't too rough on the hands, making them great for beginners. The bass strings have a strong articulate sound, while the treble strings will provide a nice mellow tone.";
                string_link = "https://www.daddario.com/products/guitar/classical-guitar/pro-arte-nylon/ej49-pro-arte-black-nylon-normal-tension/";
            }
        }else{
            //80/20 bronze basses
            //normal tension + 80/20 bronze wound + clear nylon ==> EJ47
            string_decison = "EJ47";
            string_description = "These strings aren't too rough on the hands, making them great for beginners. The bass strings are more susceptible to corrosion, but provide a really nice sound. This set also has really strong, crisp treble strings for a great, well-rounded sound.";
            string_link = "https://www.daddario.com/products/guitar/classical-guitar/pro-arte-nylon/ej47-8020-bronze-pro-arte-nylon-normal-tension/";
        }

    } else {
        //hard tension
        if (bass_material == SILVER){
            //silverplated basses
            if (treble_material == CLEAR){
                //hard tension + silverplated wound + clear nylon ==> EJ46
                string_decison = "EJ46";
                string_description = "These strings provide a great strong sound, perfect for live performance or recording. They do require a little more finger strength, but they are definitely manageable for the more experienced player.";
                string_link = "https://www.daddario.com/products/guitar/classical-guitar/pro-arte-nylon/ej46-pro-arte-nylon-hard-tension/";
            } else {
                //hard tension + silverplated wound + black nylon ==> EJ50
                string_decison = "EJ50";
                string_description = "This set of strings includes really crsip, articulate bass strings alongside mellow trebles, making for a well-rounded set. They do require a little more finger strength, but they are definitely manageable for the more experienced player.";
                string_link = "https://www.daddario.com/products/guitar/classical-guitar/pro-arte-nylon/ej50-pro-arte-black-nylon-hard-tension/";
            }
        }else{
            //80/20 bronze basses
            //hard tension + 80/20 bronze wound + clear nylon ==> EJ48
            string_decison = "EJ48";
            string_description = "This set of strings has nice mellow basses along with crisp trebles, to provide a great, well-rounded sound. They do require a little more finger strength, but they are definitely manageable for the more experienced player.";
            string_link = "https://www.daddario.com/products/guitar/classical-guitar/pro-arte-nylon/ej48-8020-bronze-pro-arte-nylon-hard-tension/";
        }
    }

    document.getElementById("string-result").innerHTML = string_decison + " strings would be a great fit for you!";
    document.getElementById("string-reasoning").innerHTML = string_description;
    document.getElementById("quiz-img").src = "quiz-images/" + string_decison + ".jpg";
    document.getElementById("link-to-site").href = string_link;
}

document.getElementById("submit-quiz").addEventListener("click", function (event){
    generateStringChoice();
    document.getElementById("quiz-result").style.display = "block";

});


function setTensionLevel(){
    var user_input = document.querySelector('input[name="level"]:checked').value;
    if (user_input == "beginner"){
        tension_level = NORMAL;
    } else {
        tension_level = HARD;
    }

}

function setBassMaterial(){
    var user_input_1 = document.querySelector('input[name="bass-sound"]:checked').value;
    var user_input_2 = document.querySelector('input[name="corrosiveness"]:checked').value;

    if (user_input_1 == "bronze-sound" && user_input_2 == "not"){
        bass_material = BRONZE;
    } else{
        bass_material = SILVER;
    }

}

function setTrebleMaterial(){
    var user_input = document.querySelector('input[name="treble-sound"]:checked').value;

    if (user_input == "black-sound" && bass_material == SILVER){
        treble_material = BLACK;
    } else{
        treble_material = CLEAR;
    }

}