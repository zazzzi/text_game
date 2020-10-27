
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
        text = "Are you sure? Yes/No"

        promtIncorrect = true;
        while (promtIncorrect) { // Practiced making prompt and while loop

            let answerPrompt = prompt(text).toLowerCase();
            if (answerPrompt == 'no') {
                promtIncorrect = false;
                startGame();
            }
            else if (answerPrompt == "yes") {
                promtIncorrect = false;
                text = "You are a talented mage, sitting in a liberary, holding a tome of the arcane arts. <br/> Would you like to <strong>read</strong> the tome or <strong>explore</strong> the library?";
                listItem.push(text);
                respons();
            }
        }
    }
    if (textIn == "read" && listItem.includes("mage")) {
        listItem.push(textIn);
        text = "You sit down on a nearby chair. Open the tome and start reading about the wonders of ancient magics. <br/> While sitting down you realise that reading are for fucking loosers. You burn down the library with your fire magic and go to the local bordello. <br/> <br/> VICTORY! Only nerds read, and you are a cool mage.";
        listItem.push(text);
        respons();

        // VICTORY! 


    }
    if (textIn == "explore" && listItem.includes("mage")) {
        listItem.push(textIn);
        text = "You explore the library. Huge bookcases towering around you. The halls of the library seem to endlessly go on. <br/> All of the sudden, a group of goblins show up, looking at you with their empty eyes. <br/> As a mage you realise that fighthig the goblins might result in damages to the library... <br/> Would you like to try to <strong>befriend</strong> the goblins or <strong>attack</strong> them?";
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
    if (textIn == "barbarian") {
        listItem.push(textIn);
        text = "Are you sure? Yes/No"

        promtIncorrect = true;
        while (promtIncorrect) { // Practiced making prompt and while loop

            let answerPrompt = prompt(text).toLowerCase();
            if (answerPrompt == 'no') {
                promtIncorrect = false;
                startGame();
            }
            else if (answerPrompt == "yes") {
                promtIncorrect = false;
                text = "You take another sip from your ale. Life as an orc barbarian is not that complicated. Drinking, pillaging and robbing sweet old ladies. <br/> You are drunk, very drunk. Maybe you should find someone to <strong>fight</strong>, or maybe <strong>go east</strong> and look for your barbarian clan?";
                listItem.push(text);
                respons();
                // DEATH!
            }
        }
    }
    if (textIn == "fight" || textIn == "go east" && listItem.includes("barbarian")) {
        listItem.push(textIn);
        text = "Even though a voice in you head is trying to tell you to do something, you feel the need to drink more. You order in four more beers and in one chugg, down all four. <br/> You start feeling dizzy. Maybe you should <strong>drink water</strong> or <strong>lay down</strong>.";
        listItem.push(text);
        respons();
    }
    if (textIn == "drink water" || textIn == "lay down" && listItem.includes("barbarian")) {
        listItem.push(textIn);
        text = "The voice in your head is really trying to get your dumb orc brain to stop this decadence, but you crave more of that sweet sweet Norrlands Guld. ' - Barkeep! Four more ale!' you hear yourself shout. You need to <strong>stop drinking</strong>.";
        listItem.push(text);
        respons();
    }
    if (textIn == "stop drinking" && listItem.includes("barbarian")) {
        listItem.push(textIn);
        text = "As you down the last ale, you feel the darkness catching up to you. All the horrible things you've done in your life flash before your eyes as you take you last breath. The ethernal flames of hell awaits. <br/><br/> DEATH! You died from alcohol poisoning, but no one will miss your sorry ass.";
        listItem.push(text);
        respons();
    }
    if (textIn == "ignore" && listItem.includes("market")) {
        listItem.push(textIn);
        text = "";
        listItem.push(text);
        respons();
    }


    //#endregion

    //#region Rogue -- Rogue questline starts here 
    if (textIn == "rogue" && !listItem.includes("mage") && !listItem.includes("barbarian")) {
        console.log("rogue")
        listItem.push(textIn);
        text = "Are you sure? Yes/No"
        listItem.push(text);
        promtIncorrect = true;
        while (promtIncorrect) { // practiced makining a while-loop with a prompt
            let answerPrompt = prompt(text).toLowerCase();
            if (answerPrompt == 'no') {
                promtIncorrect = false;
                startGame();
            }
            else if (answerPrompt == "yes") {
                promtIncorrect = false;
                text = "From the shadows, you apear. A slender elf with two pointy daggers hanging from each side of your waist. You feel hungry and exhausted, not alot of prey in the last couple of days. <br/> You need to find something to eat. You know that there is an inn just around the corner, but they have good security. There is also a market across town. Do you want to go to the <strong>market</strong> or the <strong>inn</strong>?";
                listItem.push(text);
                respons();
            }
        }

    }

    if (textIn == "market" && listItem.includes("rogue")) {
        listItem.push(textIn);
        text = "On your way to the market you hear a commotion. You see an sweet old lady being robbed by two shady looking guys with swords. The old lady is dressed like a noblewoman.<br/> You the rogue in you sees the opportunity to steel the old ladys purse while she is struggeling with the robbers, but maybe you should <strong>help</strong> the old lady? Or even better, <strong>ignore</strong> the whole thing?";
        listItem.push(text)
        respons();
    }


    if (textIn == "help" && listItem.includes("market")) {
        listItem.push(textIn);
        text = "You draw your dagger, and in one swoop you stab one of the men in the spine. The other robber shifts his focus to you, swinging his sword trying to hit you but you sidestep doging his blow. You slice his troat and wipe your blades before his body hits the floor.<br/> The lady looks to you, ' - Thank you, I though i was a gonner, please let me give you some gold for your troubles.' Do you <strong>accept</strong> or <strong>decline</strong> the reward?";
        listItem.push(text);
        respons();
    }
    if (textIn == "accept" && listItem.includes("help")) {
        listItem.push(textIn);
        text = "The old lady gives you a small bag of gold and thanks you once again. You leave her, knowing that you did good today. <br/><br/> VICTORY! Your good deeds payed of in the end, and tonight you will feast!";
        listItem.push(text);
        respons();
        //VICTORY

    }
    if (textIn == "decline" && listItem.includes("help")) {
        listItem.push(textIn);
        text = "You look the lady in the eyes. There is a connection between you, none of you can deny it. ' - I can take gold from such a hot old lady' you say. ' - Single hot old lady.' she corrects you. <br/><br/> VICTORY! Not only did you do good, but you found the love of your life. You and the old noblewoman lives happily ever after.";
        listItem.push(text);
        respons();
        // VICTORY! 
    }
    if (textIn == "steal" && listItem.includes("market")) {
        listItem.push(textIn);
        text = "You sneak up on the group, trying to find the right time to swoop in and steal the old ladys bag. You're just about to snatch the bag, but unbeknownst to you and your fellow robbers, the old lady is a karate master.<br/> The grandma' kicks all of your asses with one hand behind her back. You fall down to the ground and hear the faint sound of guards coming around the corner. <br/><br/> ARRESTED. Some old ladies knows karate, never forget that.";
        listItem.push(text);
        respons();
        //DEATH
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
    for (let i = 1; i < x; i += 2) {
        copyOfListItem[i] = "> " + copyOfListItem[i];
    }

    /** 
     * Adds a break to the lines that are written into the DOM and creates whats going to be written into the DOM
     */
    for (let item of copyOfListItem) {
        textPrint += item + " <br/>";
    }

    /**
     * Writes the textPrint in the DOM 
     */
    document.getElementById("systemText").innerHTML = textPrint; 
    document.getElementById("inputField").value = ""; // clears the input field 

}











