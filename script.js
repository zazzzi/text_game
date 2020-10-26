
/**
 * Array list, all inputs from the user and responses from the js are pushed in to here and then printed on page.  
 */
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
 * Function that records the user inputs 
 * @param {User-Input} form 
 */
function userInput(form) {
    textIn = form.inputField.value.toLowerCase();


    //#region All the different if-statements for the whole quesline

    //#region Mage -- The mage questline starts here

    if (textIn == "mage") {
        listItem.push(textIn);
        text = "Are you sure?"  //ADD INFO MAGE 
        let answerPromt = prompt(text).toLowerCase();
        if (answerPromt == 'no') {
            startGame();
        }
        else {
            text = "You are a talented mage, sitting in a liberary, holding a tome of the arcane arts. <br/> Would you like to read the tome or explore the library?";
            listItem.push(text);
            respons();
        }
    }
    if (textIn == "read" && listItem.includes("mage")) {
        listItem.push(textIn);
        text = "You sit down on a nearby chair. Open the tome and start reading about the wonders of ancient magics. <br/> While sitting down you realise that reading are for fucking loosers. You burn down the library with your fire magic and go to the local bordello. <br/> <br/> VICTORY! Only nerds read, and you are a cool mage.";
        listItem.push(text);
        respons();

        // VICTORY! ADD VICTORY screen


    }
    if (textIn == "explore" && listItem.includes("mage")) {
        listItem.push(textIn);
        text = "You explore the library. Huge bookcases towering around you. The halls of the library seem to endlessly go on. <br/> All of the sudden, a group of goblins show up, looking at you with their empty eyes. <br/> As a mage you realise that fighthig the goblins might result in damages to the library... <br/> Would you like to try to befriend the goblins or attack them?";
        listItem.push(text);
        respons();

    }
    if (textIn == "attack" && listItem.includes("explore")) {
        listItem.push(textIn);
        text = "You attack the goblins with all of your might. Charging up your most powerful spell, you drain power from the air around you. <br/>You combine the arts of frost magic and fire magic, your hands glowing with ice and flames and just when you're about to let this monstosity of a spell loose, you roll a natural 1... <br/>Your critical fail results in you slipping on a banana peel and breaking your neck on a nearby chair. <br/><br/> DEATH. Fighting is not always the answer and as a mage of the highest order you should know this.";
        listItem.push(text);
        respons();
        // DEATH! 
    }
    if (textIn == "befriend" && listItem.includes("explore")) {
        listItem.push(textIn);
        text = "You clear your troat, *erhmm*. <br/> '- Greetings, short green ones, what brings you to this library?' <br/> The goblin closes to you looks at you and responds '- We are here to learn about the language of the javasqriptians!' <br/> '- Oh word?' you say as the goblins seems to ready their weapons for an attack. ' - Then all you need to know is that you can never use to many if-statements' <br/> Your words seems to hurt the golins, as if this is the dumbest thing they've ever heard. You reapet yourself. <br/> ' - I really mostly use anything except if statements in this project atleast' you scream at the goblins. Upon hearing this meta-statement the goblins all selfcombust and fall down in small piles of ash.<br/><br/> VICTORY. You have defeated the goblins using only your wits, this is for sure the pinacle of you career as a mage.";
        listItem.push(text); 
        respons();
        //Victory! 
    }

    //#endregion

    //#region Barbarian -- Barb quesline starts here
    else if (textIn == "barbarian") {
        console.log("barb")
        respons();
    }


    //#endregion

    //#region Rogue -- Rogue questline starts here 
    else if (textIn == "rogue" && !listItem.includes("mage") && !listItem.includes("barbarian")) {
        console.log("rogue")
        respons();
    }
 
    //#endregion
}
//#endregion


/**
 * Sends the array with user inputs and sytems responses to the DOM
 */
function respons() {
    let textPrint = "";
    let copyOfListItem = listItem.slice(); //Wth is slice? https://stackoverflow.com/questions/7486085/copy-array-by-value
    let x = copyOfListItem.length;
    
    
    /**
     * A really complicated way to add > inb4 user inputs 
     */
    for(let i=1; i<x; i+=2){
        copyOfListItem[i] = "> " + copyOfListItem[i];
    }

    /** 
     * Adds a break to the lines that are written into the DOM and prints the list
     */
    for (let item of copyOfListItem) {
        textPrint += item + " <br/>";
    }

    /**
     * Writes the text in the DOM 
     */
    document.getElementById("systemText").innerHTML = textPrint;

}











