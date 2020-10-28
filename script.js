
/**
 * Array list, all inputs from the user and responses from the js are pushed in to here and then printed on page.  
 */
let listItem = [];


/**
 * Starts the game if user presses the Start html button and clears array
 */
function startGame() {
    document.getElementById("startButton").innerHTML = "Start";
    listItem = [];
    let qtClass = document.getElementById('systemText').innerHTML =
        'In this great adventure, what are you? A <strong>mage</strong>, a <strong>barbarian</strong> or a <strong>rogue</strong>?';
    listItem.push(qtClass);
    document.getElementById("titel").innerHTML = "The Adventure";
}

/**
 * Changes the start button to restart when user reaches end of storyline
 */
function restart() {
    document.getElementById("startButton").innerHTML = "Restart";
}

/**
 * Function that records the user inputs 
 * @param {HTMLFormElement} form 
 */
function userInput(form) {
   let textIn = form.inputField.value.toLowerCase();

    //#region All the different if-statements for the whole quest line

    //#region Mage

    /**
     * Mage quest line and all the different if-statements that controls the storyline.
     */
    if (textIn == "mage" ) {
        listItem.push(textIn);
        text = "Are you sure? Yes/No";
        listItem.push(text);
        respons();
    }
    if (textIn == "yes" && listItem.includes("mage")) {
        listItem.push(textIn);
        text = "You are a talented mage, sitting in a library, holding a tome of the arcane arts. <br/> Would you like to <strong>read</strong> the tome or <strong>explore</strong> the library?";
        listItem.push(text);
        document.getElementById("titel").innerHTML = "The Mage";
        respons();
    } else if (textIn == "no" && listItem.includes("mage")) {
        listItem.push(textIn);
        respons();
        startGame();
    }

    if (textIn == "read" && listItem.includes("mage")) {
        listItem.push(textIn);
        text = "You sit down on a nearby chair. Open the tome and start reading about the wonders of ancient magics. <br/> While sitting down you realise that reading are for fucking looser. You burn down the library with your fire magic and go to the local bordello. <br/> <br/> VICTORY! Only nerds read, and you are a cool mage.";
        listItem.push(text);
        respons();
        restart();

        // VICTORY! 


    }
    if (textIn == "explore" && listItem.includes("mage")) {
        listItem.push(textIn);
        text = "You explore the library. Huge bookcases towering around you. The halls of the library seem to endlessly go on. <br/> All of the sudden, a group of goblins show up, looking at you with their empty eyes. <br/> As a mage you realise that fighting the goblins might result in damages to the library... <br/> Would you like to try to <strong>befriend</strong> the goblins or <strong>attack</strong> them?";
        listItem.push(text);
        respons();

    }
    if (textIn == "attack" && listItem.includes("explore")) {
        listItem.push(textIn);
        text = "You attack the goblins with all of your might. Charging up your most powerful spell, you drain power from the air around you. <br/>You combine the arts of frost magic and fire magic, your hands glowing with ice and flames and just when you're about to let this monstrosity of a spell loose, you roll a natural 1... <br/>Your critical fail results in you slipping on a banana peel and breaking your neck on a nearby chair. <br/><br/> DEATH. Fighting is not always the answer and as a mage of the highest order you should know this.";
        listItem.push(text);
        respons();
        restart();
        // DEATH! 
    }
    if (textIn == "befriend" && listItem.includes("explore")) {
        listItem.push(textIn);
        text = "You clear your troat, *erhmm*. <br/> '- Greetings, short green ones, what brings you to this library?' <br/> The goblin closes to you looks at you and responds '- We are here to learn about the language of the javasqriptians!' <br/> '- Oh word?' you say as the goblins seems to ready their weapons for an attack. ' - Then all you need to know is that you can never use to many if-statements' <br/> Your words seems to hurt the goblins, as if this is the dumbest thing they've ever heard. You repeat yourself. <br/> ' - I really mostly use anything except if statements in this project at least' you scream at the goblins. Upon hearing this meta-statement the goblins all self combust and fall down in small piles of ash.<br/><br/> VICTORY. You have defeated the goblins using only your wits, this is for sure the pinnacle of you career as a mage.";
        listItem.push(text);
        respons();
        restart();
        //Victory! 
    }

    //#endregion

    //#region Barbarian

    /**
     * Barbarian quest line start here, all the if-statements that controls the storyline
     */
    if (textIn == "barbarian" && !listItem.includes("mage") && !listItem.includes("rogue")) {
        listItem.push(textIn);
        text = "Are you sure? Yes/No";
        listItem.push(text);
        respons();
    }
    if (textIn == "yes" && listItem.includes("barbarian")) {
        listItem.push(textIn);
        text = "You take another sip from your ale. Life as an orc barbarian is not that complicated. Drinking, pillaging and robbing sweet old ladies. <br/> You are drunk, very drunk. Maybe you should find someone to <strong>fight</strong>, or maybe <strong>go east</strong> and look for your barbarian clan?";
        listItem.push(text);
        document.getElementById("titel").innerHTML = "The Barbarian";
        respons();
    } else if (textIn == "no" && listItem.includes("barbarian")) {
        listItem.push(textIn);
        respons();
        startGame();
    }

    if (textIn == "fight" || textIn == "go east" && listItem.includes("barbarian")) {
        listItem.push(textIn);
        text = "Even though a voice in you head is trying to tell you to do something, you feel the need to drink more. You order in four more beers and in one chug, down all four. <br/> You start feeling dizzy. Maybe you should <strong>drink water</strong> or <strong>lay down</strong>.";
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
        text = "As you down the last ale, you feel the darkness catching up to you. All the horrible things you've done in your life flash before your eyes as you take you last breath. The eternal flames of hell awaits. <br/><br/> DEATH! You died from alcohol poisoning, but no one will miss your sorry ass.";
        listItem.push(text);
        respons();
        restart();
        // DEATH 
    }
 


    //#endregion

    //#region Rogue

    /**
     * Rogue quest lines start here, all the if statements that controls the storyline
     */
    if (textIn == "rogue" && !listItem.includes("mage") && !listItem.includes("barbarian")) {
        console.log("rogue")
        listItem.push(textIn);
        text = "Are you sure? Yes/No"
        listItem.push(text);
        promptIncorrect = true;
        while (promptIncorrect) { // practiced making a while-loop with a prompt
            let answerPrompt = prompt(text).toLowerCase();
            if (answerPrompt == 'no') {
                promptIncorrect = false;
                startGame();
            }
            else if (answerPrompt == "yes") {
                promptIncorrect = false;
                text = "From the shadows, you appear. A slender elf with two pointy daggers hanging from each side of your waist. You feel hungry and exhausted, not a lot of prey in the last couple of days. <br/> You need to find something to eat. You know that there is an inn just around the corner, but they have good security. There is also a market across town. Do you want to go to the <strong>market</strong> or the <strong>inn</strong>?";
                listItem.push(text);
                document.getElementById("titel").innerHTML = "The Rogue";
                respons();
            }
        }

    }

    if (textIn == "market" && listItem.includes("rogue")) {
        listItem.push(textIn);
        text = "On your way to the market you hear a commotion. You see an sweet old lady being robbed by two shady looking guys with swords. The old lady is dressed like a noblewoman.<br/> You the rogue in you sees the opportunity to steel the old lady's purse while she is struggling with the robbers, but maybe you should <strong>help</strong> the old lady? Or even better, <strong>ignore</strong> the whole thing?";
        listItem.push(text)
        respons();
    }


    if (textIn == "help" && listItem.includes("market")) {
        listItem.push(textIn);
        text = "You draw your dagger, and in one swoop you stab one of the men in the spine. The other robber shifts his focus to you, swinging his sword trying to hit you but you sidestep dodging his blow. You slice his troat and wipe your blades before his body hits the floor.<br/> The lady looks to you, ' - Thank you, I though i was a goner, please let me give you some gold for your troubles.' Do you <strong>accept</strong> or <strong>decline</strong> the reward?";
        listItem.push(text);
        respons();
    }
    if (textIn == "accept" && listItem.includes("help")) {
        listItem.push(textIn);
        text = "The old lady gives you a small bag of gold and thanks you once again. You leave her, knowing that you did good today. <br/><br/> VICTORY! Your good deeds payed of in the end, and tonight you will feast!";
        listItem.push(text);
        respons();
        restart();
        //VICTORY

    }
    if (textIn == "decline" && listItem.includes("help")) {
        listItem.push(textIn);
        text = "You look the lady in the eyes. There is a connection between you, none of you can deny it. ' - I can take gold from such a hot old lady' you say. ' - Single hot old lady.' she corrects you. <br/><br/> VICTORY! Not only did you do good, but you found the love of your life. You and the old noblewoman lives happily ever after.";
        listItem.push(text);
        respons();
        restart();
        // VICTORY! 
    }
    if (textIn == "steal" && listItem.includes("market")) {
        listItem.push(textIn);
        text = "You sneak up on the group, trying to find the right time to swoop in and steal the old lady's bag. You're just about to snatch the bag, but unbeknownst to you and your fellow robbers, the old lady is a karate master.<br/> The grandma' kicks all of your asses with one hand behind her back. You fall down to the ground and hear the faint sound of guards coming around the corner. <br/><br/> ARRESTED. Some old ladies knows karate, never forget that.";
        listItem.push(text);
        respons();
        restart();
        //DEATH
    }
    if (textIn == "ignore" && listItem.includes("market")) {
        listItem.push(textIn);
        text = "You continue to the market and arrive on a large open square. There are a lot of stands on the market, but one catches your eyes. A small stand in an empty part of the market, with no one behind the stall.<br/> Upon further inspection you see a pie on the counter of the stand, and you can feel your stomach growling. There is also a chest behind the stand, the chest looks old and weathered down, but there is a brand new padlock hanging on the hatch of the chest. Do you want to <strong>pick the lock</strong> or still your hunger and <strong>steal the pie</strong>?";
        listItem.push(text);
        respons();
    }
    if (textIn == "steal the pie" && listItem.includes("ignore")) {
        listItem.push(textIn);
        text = "You hastily grab the pie and run for the nearest back alley. You go hard on the pie, barely chewing each bite. After gulping down the whole pie, you feel your stomach vibrating. Oh no... Time to find the nearest bathroom...<br/><br/><s>DEATH</s> <s>DEFEAT</s> DIARRHEA... This was not a good pie, maybe you should think twice about eating stuff that you find on random markets. Also you're gluten intolerant, how could you forget about that?   ";
        listItem.push(text);
        respons();
        restart();
        //DEATH 
    }
    if (textIn == "pick the lock" && listItem.includes("ignore")) {
        listItem.push(textIn);
        text = "You reach in to your pockets, and grab your lock-picks. You are a master rogue, picking a padlock is as simple as breathing. The lock clicks and you open the chest. In the chest you find a priceless relic, a first edition of 'C# for Dummies'.<br/> You know that the power that this relic holds is mind boggling and the value is infinite, at least for people who haven't heard about Codeacadamy.<br/><br/> VICTORY! Selling this relic on the black market is gonna be your road to infinite wealth. Or you could learn C#, what do I know, it's super later and my brain isn't really working right now.";
        listItem.push(text);
        respons();
    }
    if (textIn == "inn" && listItem.includes("rogue")) {
        listItem.push(textIn);
        text = "You enter the inn. The place if full of people, stealing from the innkeeper is going to be next to impossible. You see a drunk orc barbarian sitting by the bar. Do you want to <strong>greet the orc</strong> or go to the <strong>market</strong>?";
        listItem.push(text);
        respons();
    }
    if (textIn == "greet the orc" && listItem.includes("inn")) {
        listItem.push(textIn);
        text = "You greet the orc. He looks at you with destain, orcs and elves have always hated each other. The orc seems to struggle with keeping his eyes open, and all of the sudden he falls down on the floor, dead. Someone should have tried to stop the orcs decadence, a like someone with the power of a text input field. But you quickly shake this meta thought, it's to late now anyways.<br/><br/> END OF THE LINE! This quest line might continue in the future, but for now ends here in a sad display of alcoholism.";
        listItem.push(text);
        respons();
        restart();
        // VICTORY
    }


    //#endregion
}
//#endregion


/**
 * Sends the array with user inputs and systems responses to the DOM
 */
function respons() {
    let textPrint = "";
    let copyOfListItem = listItem.slice();
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
