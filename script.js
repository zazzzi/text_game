
let listItem = [];



/**
 * Starts the game if user presses the Start html button and clears array
 */
function startGame() {
    listItem = [];
    let qtClass = document.getElementById('systemText').innerHTML =
        'In this great adventure, what are you? A mage, a barbarian or a rogue?';
    listItem.push(qtClass);


}

/**
 * 
 * @param {User-Input} form 
 */
function userInput(form) {
    textIn = form.inputField.value.toLowerCase();
    listItem.push(textIn);

    //#region If-satser 

    //#region Mage
    if (textIn == "mage") {
        console.log("mage", listItem);
        text = "Are you sure?"  //ADD INFO MAGE 
        let answerPromt = prompt(text).toLowerCase();
        if (answerPromt == 'no') {
            startGame();
        }
        else {
            text = "You are a talented mage, sitting in a liberary, holding a tome of the arcane arts. <br/> Would you like to read the tome or explore the library?"
            listItem.push(text);
            respons();
        }
    }
    if (textIn == "read" && listItem.includes("mage")) {
        text = "You sit down on a nearby chair. Open the tome and start reading about the wonders of ancient magics. <br/> While sitting down you realise that reading are for fucking loosers. You burn down the library with your fire magic and go to the local bordello. "
        // VICTORY! 
        
    }


    if (textIn == "yes" && listItem.includes("mage")) {
        console.log("steget efter mage");
        text = "kiss";
        listItem.push(kiss)
        respons();
    }



    //#endregion

    //#region Barbarian
    else if (textIn == "barbarian") {
        console.log("barb")
        respons();
    }

    //#endregion

    //#region Rogue
    else if (textIn == "rogue" && !listItem.includes("mage") && !listItem.includes("barbarian")) {
        console.log("rogue")
        respons();
    }
    //#endregion
}
//#endregion

function respons() {
    let textPrint = "";
    listItem.forEach(element => {
        textPrint += element + " <br/>";

    });
    document.getElementById("systemText").innerHTML = textPrint;
}










