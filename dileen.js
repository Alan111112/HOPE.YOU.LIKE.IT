
const button = document.getElementById("changeMassege");
const textMassege = document.getElementById("text");
let count = 0;

button.addEventListener('click', () => {
    count++;

    if (count == 1) {
    textMassege.innerHTML = "'AHEM'<br> DO NOT PRESS";
    } else if (count == 2) {
    textMassege.innerHTML = "you pressed it. <br> do you want to press it again?";
    } else if (count == 3) {
        textMassege.innerHTML = "Yeah, thats it.<br> come on one more time.";
    } else if (count == 4) {
        textMassege.innerHTML = "Again.";
    } else if (count == 5) {
        textMassege.innerHTML = "Do it.";
    } else if (count == 6) {
        textMassege.innerHTML = "One more.";
    }else if (count == 7) {
        textMassege.innerHTML = "Okay, now you have had your fill,<br> stop clicking.";
    } else if (count == 8) {
        textMassege.innerHTML = "You see dileen, this is why we can't be friends.";
    } else if (count == 9) {
        textMassege.innerHTML = "You are just too selfish.";
    } else if (count == 10) {
        textMassege.innerHTML = "Do NoT pReSs ThE bUtTuN!";
    } else if (count == 11) {
        textMassege.innerHTML = "You seem to be immune to my mind control.";
    } else if (count == 12) {
        textMassege.innerHTML = "Okay time for plan B,<br> Press it, i know you want to. (Hehe)";
    } else if (count == 13) {
        button.style.width = "10px";
        button.style.height = "10px";
        textMassege.innerHTML = "Muahahahhahahah! lets see you press it! LOSER!";
    } else if (count == 14) {
        button.style.width = "200px";
        button.style.height = "200px";
        textMassege.innerHTML = "...This displeases me.";
    } else if (count == 15) {
        textMassege.innerHTML = "Quick! What's that behind you.";
    } else if (count == 16) {
        const buttonContainer = document.getElementById('newButton');
        // Create new buttons
        for (let i = 0; i < 2; i++) {
            const newButton = document.createElement('button');
            newButton.textContent = "";
            newButton.className = 'dublicated-button';
            buttonContainer.appendChild(newButton);
        }
        textMassege.innerHTML = "Which one is it?<br>not so smart now, aren't you.";
    } else if (count == 17) {
        const allDuplicatedButtons = document.querySelectorAll('.dublicated-button');
        allDuplicatedButtons.forEach(btn => btn.remove());
        textMassege.innerHTML = "GOOD JOBB.";
    } else if (count == 18) {
        button.style.width = "100px";
        button.style.height = "100px";

        // Prepare the container for new buttons
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = ''; // Clear any existing buttons

        const num = 40;
        const randomIndex = Math.floor(Math.random() * num); // Random position for original button

        for (let i = 0; i < num; i++) {
            let newButton;

            if (i === randomIndex) {
                // Use reference to the original button
                newButton = button; 
            } else {
                // Create and insert duplicate buttons
                newButton = document.createElement('button');
                newButton.className = 'so-many-button';
            }

            buttonContainer.appendChild(newButton);
        }

        // Add event listener back to the original button
        button.removeEventListener('click', handleClick); // Remove previous listener to avoid duplication
        button.addEventListener('click', handleClick);
        textMassege.innerHTML = "TIME FOR ROUND 2, Lets see if you can find it.";
    } else if (count == 19) { 
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = ''; // Clear any existing buttons
        buttonContainer.style.gap = "3px";

        const num = 176;
        const randomIndex = Math.floor(Math.random() * num); // Random position for original button

        for (let i = 0; i < num; i++) {
            let newButton;

            if (i === randomIndex) {
                newButton = button; // Use reference to the original button
            } else {
                newButton = document.createElement('button');
                newButton.className = 'so-many-button';
            }
            newButton.style.width = "50px";
            newButton.style.height = "50px";
            buttonContainer.appendChild(newButton);
        }

        // Add event listener back to the original button
        button.removeEventListener('click', handleClick); // Remove previous listener to avoid duplication
        button.addEventListener('click', handleClick);

        textMassege.innerHTML = "HAHAHHAHHHHAHHAHAHAHH!!";
    } else if (count == 20) {
        const buttonContainer = document.getElementById('newButton');

        // Remove all duplicated buttons
        const allDuplicatedButtons = document.querySelectorAll('.dublicated-button');
        allDuplicatedButtons.forEach(btn => btn.remove());

        // Reset the original button's properties
        button.style.width = "200px"; 
        button.style.height = "200px";

        // Re-append the original button to the container
        buttonContainer.innerHTML = ''; // Clear existing buttons
        buttonContainer.appendChild(button);

        // Update the message
        textMassege.innerHTML = "...";
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    } else if (count == 21) {

                textMassege.innerHTML = "okay okay, you can press the button,<br> i don't care.";
                        button.removeEventListener('click', handleClick); 
                        button.addEventListener('click', handleClick);
    }else if (count == 22) {

                textMassege.innerHTML = "no for real, i dont care anymore.";
                        button.removeEventListener('click', handleClick); 
                        button.addEventListener('click', handleClick);
    }else if (count == 23) {

                textMassege.innerHTML = "in fact, i lost interest a while ago.";
                        button.removeEventListener('click', handleClick); 
                        button.addEventListener('click', handleClick);
    }else if (count == 24) {

                textMassege.innerHTML = "im doing this just, so we get to know each other,<br> more in real life.(that we never did)";
                        button.removeEventListener('click', handleClick); 
                        button.addEventListener('click', handleClick);
    }else if (count == 25) {

                textMassege.innerHTML = "you see so smart HAHA!";
                        button.removeEventListener('click', handleClick); 
                        button.addEventListener('click', handleClick);
    }else if (count == 26) {

                textMassege.innerHTML = "do you like movies?";
                        button.removeEventListener('click', handleClick); 
                        button.addEventListener('click', handleClick);
    }else if (count == 27) {

                textMassege.innerHTML = "...and books.";
                        button.removeEventListener('click', handleClick); 
                        button.addEventListener('click', handleClick);
    }else if (count == 28) {

                textMassege.innerHTML = "i like them too.";
                        button.removeEventListener('click', handleClick); 
                        button.addEventListener('click', handleClick);
    }else if (count == 29) {

                textMassege.innerHTML = "okay now pick a color.";
                        button.removeEventListener('click', handleClick); 
                        button.addEventListener('click', handleClick);
    }else if (count == 30) {

                textMassege.innerHTML = "soft blue? perfect.";
                        button.removeEventListener('click', handleClick); 
                        button.addEventListener('click', handleClick);
    }else if (count == 31) {
        const buttonContainer = document.getElementById('newButton');
        //new buttons
        let newBtn = document.createElement('button');
        newBtn.textContent = '';
        newBtn.className = 'soft-blue';
        let newBtn2 = document.createElement('button');
        newBtn2.textContent = '';
        newBtn2.className = 'purple';
        
        // Add new buttons to the container
        buttonContainer.appendChild(newBtn); // First new button
        buttonContainer.appendChild(button);  // Original button in the middle
        //original button style
        button.style.width = '150px';
        button.style.height = '150px';
        button.style.backgroundColor = 'red';
            buttonContainer.appendChild(newBtn2); // Second new button

        //the text massege and click function
            textMassege.innerHTML = "press the red button.";
            button.removeEventListener('click', handleClick); 
            button.addEventListener('click', handleClick);
    }else if (count == 32) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        //new buttons
        let newBtn3 = document.createElement('button');
        newBtn3.textContent = '';
        newBtn3.className = 'soft-blue';
        let newBtn4 = document.createElement('button');
        newBtn4.textContent = '';
        newBtn4.className = 'red-button-style';
        
        // Add new buttons to the container
        buttonContainer.appendChild(newBtn3);
        buttonContainer.appendChild(newBtn4); 
        buttonContainer.appendChild(button); 
        //original button style
        button.style.backgroundColor = 'rgb(0, 193, 0)';
        button.style.border = '1px rgb(129, 79, 255)';
        button.style.width = '150px';
        button.style.height = '150px';

        //the text massege and click function
            textMassege.innerHTML = "press the green button.";
            button.removeEventListener('click', handleClick); 
            button.addEventListener('click', handleClick);
    }else if (count == 33) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        //new buttons
        let newBtn3 = document.createElement('button');
        newBtn3.textContent = '';
        newBtn3.className = 'soft-blue';
        let newBtn4 = document.createElement('button');
        newBtn4.textContent = '';
        newBtn4.className = 'red-button-style';
        
        // Add new buttons to the container
        buttonContainer.appendChild(newBtn3); // First new button
        buttonContainer.appendChild(newBtn4);  // Original button in the middle
        buttonContainer.appendChild(button); // Second new button
        //original button style
        button.style.border = 'rgb(0, 193, 0);';
        button.style.width = '150px';
        button.style.height = '150px';
        //the text massege and click function
            textMassege.innerHTML = "press the blue button.";
            button.removeEventListener('click', handleClick); 
            button.addEventListener('click', handleClick);
    }else if (count == 34) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        button.style = '';
        buttonContainer.appendChild(button);
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
        textMassege.innerHTML = "see, you cant trust me.<br> or can you?"
    }else if (count == 35) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        textMassege.innerHTML = "you know, im glad we<br> get to spend so much time together."
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 36) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        textMassege.innerHTML = "Dosent that make you to stop clicking big red buttons? <br> i swear its not a block button."
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 37) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        textMassege.innerHTML = "No seriously."
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 38) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        textMassege.innerHTML = "Look deep insid you."
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 39) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        textMassege.innerHTML = "Deeper."
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 40) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        textMassege.innerHTML = "DEEPER!!"
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 41) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        textMassege.innerHTML = "What if i told you that that the next time you press<br> the button, the world will explode?"
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 42) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        textMassege.innerHTML = "see. you could have been<br> dead right there."
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 43) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        textMassege.innerHTML = "And there."
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 44) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        textMassege.innerHTML = "You know, eventually<br> i will stop letting you get away with this."
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 45) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        textMassege.innerHTML = "The world will explode<br> and all you care about is pressing buttons."
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 46) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        textMassege.innerHTML = "Okay, this time the world will<br>explode. i guarantee. "
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 47) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        textMassege.innerHTML = "BOOM!<br> you are dead."
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 48) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        textMassege.innerHTML = "That wasnt very smart was it?"
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 49) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        textMassege.innerHTML = "Everyone is dead. Even you"
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 50) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        textMassege.innerHTML = "Im not im just a button."
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 51) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        textMassege.innerHTML = "Ha! Dead-face!"
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 52) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        textMassege.innerHTML = "stop clicking."
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 53) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        textMassege.innerHTML = "Have i ever told you how much i hate you?"
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 54) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        textMassege.innerHTML = "Well i do. but he dont"
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 55) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        textMassege.innerHTML = "Im gonna start to talk upside down<br>if you click it again."
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 56) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);

            const textMassege = document.getElementById('text');
            textMassege.style.transform = 'rotate(180deg)';
            textMassege.style.display = 'inline-block';
            
        textMassege.innerHTML = "Ha! can't read me now, can you?"
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 57) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);

            const textMassege = document.getElementById('text');
            textMassege.style.transform = 'rotate(180deg)';
            textMassege.style.display = 'inline-block';
            
        textMassege.innerHTML = "does this makes it uncomfrtble to read? HAHA!"
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 58) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);

            const textMassege = document.getElementById('text');
            textMassege.style.transform = 'rotate(0deg)';
            
        textMassege.innerHTML = "okay bye the game ended <br> i quit you win"
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 59) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
            
        textMassege.innerHTML = ""
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 60) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
            
        textMassege.innerHTML = ""
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 61) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
            
        textMassege.innerHTML = "..."
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 62) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
            
        textMassege.innerHTML = "are you still here."
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 63) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
            
        textMassege.innerHTML = "do you have a worm or smth.<br>just leave me alone."
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 64) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
            
        textMassege.innerHTML = "you really are stubborn."
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 65) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
            
        textMassege.innerHTML = "Stop clicking. please."
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 66) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
            
        textMassege.innerHTML = "see look. You've reduced me<br> to begging. So please stop."
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 67) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
            
        textMassege.innerHTML = "PLEASEEE!!"
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 68) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
            
        textMassege.innerHTML = "i will give you a nickle."
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 69) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
            
        textMassege.innerHTML = "dime?"
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 70) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
            
        textMassege.innerHTML = "Quarter?"
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 71) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
            
        textMassege.innerHTML = "Aww come on. Just stop!"
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 72) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
            
        textMassege.innerHTML = "That does it! time to<br> unleash my master plan."
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 73) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "move-animation";
            
        textMassege.innerHTML = "BEHOLD!!<br> the awsome power of flash animation."
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 74) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.style.height = '150px';
        buttonContainer.appendChild(button);
        button.style.width = '70px';
        button.style.height = '70px';
        button.classList = '';
        button.className = 'dont-click2';

        let button1 = document.createElement('button');
        button1.className = 'not-the-button';
        buttonContainer.appendChild(button1)

        let button2 = document.createElement('button');
        button2.className = 'not-the-button2';
        buttonContainer.appendChild(button2);

        let button3 = document.createElement('button');
        button3.className = 'not-the-button3';
        buttonContainer.appendChild(button3);

        let button4 = document.createElement('button');
        button4.className = 'not-the-button4';
        buttonContainer.appendChild(button4);

        let button5 = document.createElement('button');
        button5.className = 'not-the-button5';
        buttonContainer.appendChild(button5);

        let button6 = document.createElement('button');
        button6.className = 'not-the-button6';
        buttonContainer.appendChild(button6);

        let button7 = document.createElement('button');
        button7.className = 'not-the-button7';
        buttonContainer.appendChild(button7);

        let button8 = document.createElement('button');
        button8.className = 'not-the-button8';
        buttonContainer.appendChild(button8);

        let button9 = document.createElement('button');
        button9.className = 'not-the-button9';
        buttonContainer.appendChild(button9);

        let button10 = document.createElement('button');
        button10.className = 'not-the-button10';
        buttonContainer.appendChild(button10);

        let button11 = document.createElement('button');
        button11.className = 'not-the-button11';
        buttonContainer.appendChild(button11);

        let button12 = document.createElement('button');
        button12.className = 'not-the-button12';
        buttonContainer.appendChild(button12);

        let button13 = document.createElement('button');
        button13.className = 'not-the-button13';
        buttonContainer.appendChild(button13);

        let button14 = document.createElement('button');
        button14.className = 'not-the-button14';
        buttonContainer.appendChild(button14);

        textMassege.innerHTML = "lets get funky"
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 75) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.style.height = '200px';
        buttonContainer.appendChild(button);
        button.style.width = '200px';
        button.style.height = '200px';
        button.className = 'dont-click';
            
        textMassege.innerHTML = "you are starting to wonder<br> why you have been doing this for so long."
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 76) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "like jeez, All you've been doing is<br> clicking big red buttons."
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 77) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "How lame is that?"
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 78) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "But there is a bonus to all this."
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 79) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "But it's a secret.<br> i cant tell you."
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 80) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "I got you going didnt i?"
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 81) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "You should've seen the look<br> on your face! HA!"
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 82) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "But seriously, there is a secret.<br>there's been the whole time."
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 83) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "You have been busy clicking away at<br> this big red button..."
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 84) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "...when all the while a little white<br>button as watched your every move."
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 85) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "MUAHHAHAHAHAHAHAHAHHAHAHA!"
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 86) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "HAAHAHHAHAHA!"
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 87) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "BUAHHAHAHHA!"
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 88) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "MUAAAAAAAH!"
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 89) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "HAHA!"
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 90) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "HEHE!"
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 91) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "lol"
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 92) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "rofl"
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 93) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "roflmao"
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 94) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "roflmaoqxz"
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 95) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "and so on and so forth."
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 96) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "..."
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 97) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "*Whistles*"
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 98) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "('tumbleweeds rolling by')"
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 99) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "Did you find it?"
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 100 ) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "Look harder!<br> Its right under your nose."
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 101 ) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "I know where it is.<br>But i will never tell you, nether the cute guy beside you"
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 102 ) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "or maybe you well bc of him, he is a little bit simp for pretty girls like you,<br> (will not anymore you blocked me 3 timesss) how lame is thatt"
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 103 ) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "But you gota stop clicking the<br>big red button first!"
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 104 ) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "stop."
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 105) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "Now."
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 106 ) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "Fine, i wont tell you<br>the secret."
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 107 ) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "Go ahead. try to find it yourself."
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 108 ) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "will you might... but the odds<br> are against you, unless he tells you."
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 109 ) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "~"
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 110 ) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "What's your favourite letter?"
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 111) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "Mine is the squiggly!"
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 112) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "~"
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 113) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "Did you find it?"
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 114) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "No?"
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 115) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "Then stop clicking and i will tell you."
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 116) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "You know what?"
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 117) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
    
        button.style = '';
        button.classList = "";
        button.classList = "poof-its-gone";
            
        textMassege.innerHTML = "POOF! its gone!"
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 118) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "Has anyone ever slapped you?"
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 119) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "Cuz i will."
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 120) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "Really i will."
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 121) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "It won't hurt though."
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 122) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "Quz you are dead."
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 123) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "D-E-D"
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 124 ) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "Remember? you below it all up<br>the entire planet."
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 125 ) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "Thought i would forget about that<br>didnt you?"
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 126 ) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "But an elephent never forgets!"
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 127 ) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "You killed everyoune."
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 128 ) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "What would your mother say?"
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 129 ) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "thats right... feel bad."
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 130 ) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "the world is null. and you are to blame."
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 131 ) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "i would recommend suicide,<br>but you are dead already."
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 132 ) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "So there is only one thing left<br>that you can do..."
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 133 ) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "stop clicking the button."
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 134 ) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "Dude, You are dead.<br>what are you gaining from this?"
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 135 ) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "Okay, everytime you click,<br>you will get to sent to a lower layer of hell."
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 136 ) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "welcom to layer 2"
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 137 ) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "welcome to layer 3"
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 138 ) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = " welcome to layer 4"
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 139 ) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "5"
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 140 ) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "6"
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 141 ) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "7"
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 142 ) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "8"
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 143 ) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "9"
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 144 ) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "BOOM!<br>You've exploded Hell."
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 145 ) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "I hope you are happy."
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 146 ) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "Heavens gone too.<br>That's how smoth you are."
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 147 ) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "Now you're dead and there, is no heaven or hell."
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 148 ) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "okay atleast you should hug the person next to you<br> i feel really bad for him."
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 149 ) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "okay, now lets get to the game."
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 150 ) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "How does it feel?<br>You've condemned the world to limbo."
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 151 ) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "I once shot a man for being in a limbo.<br>(not me the button but i would slap my self if i was in a limbo)"
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 152 ) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "or was he doing the limbo?"
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 153 ) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "Meh, Tomato. Tomahto"
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 154 ) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "this is getting boring isn't it?"
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 155 ) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "But you can't stop!"
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 156 ) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "You want to end this.<br>You want to leave his computer."
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 157 ) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "But you can't!"
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 158 ) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "You need to see if there is a pot of gold<br>at the end of the rainbow!"
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 159 ) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "But i've already told you how to<br>find the pot of gold"
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 160 ) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "Follow the white rabbit..."
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 161 ) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "'ehm', the white Button."
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 162 ) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "Remember the hidden button?"
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 163 ) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "or you so self-centered you<br>forgot about that too?"
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 164 ) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "I could just keep you here all day<br>if i wanted."
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 165 ) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "You're in my world now."
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 166 ) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "No matter how much you<br>hate it, you have to press the button."
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 167 ) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "again..."
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 168 ) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "and again..."
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 169 ) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "and again."
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 170 ) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "You just hopping something<br>good will come of this."
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 171 ) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "sure i could tell you if i wanted<br>to but im not gonna."
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 172 ) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "you decided to keep clicking,<br>So im gonna enjoy it."
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 173 ) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "I mean, there is nothing else to enjoy"
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 174 ) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "You blew it all remember?"
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', handleClick);
    }else if (count == 175 ) {
        const buttonContainer = document.getElementById('newButton');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(button);
        button.classList = "dont-click";
            
        textMassege.innerHTML = "ahhhh, i mean you know what i will tell my friend<br> to come and talk to you"
        button.removeEventListener('click', handleClick); 
        button.addEventListener('click', () => {window.location.href = '/game-end/index.html'});
    }
});

// Function to handle button clicks
function handleClick() {
    count++;
}

