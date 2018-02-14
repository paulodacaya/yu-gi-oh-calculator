<img width="383" alt="yu gi oh calcualtor title" src="https://user-images.githubusercontent.com/29850088/36194454-cfa55c16-11bd-11e8-9120-37e3c3dec4e6.png">


# yu-gi-oh-calculator
An application that makes it easier for yu-gi-oh trading card game dueling. This was created to give Yu-Gi-Oh duelist and enjoyable yet practical experience while dueiling.

## Getting Started
Please visit the following link where the application is hosted, VERSION 2 is now LIVE:
[Yu-Gi-Oh Calculator](http://paulodacaya.xyz/yu-gi-oh-calculator/). Enjoy!

## Reason for remake/redesign in VERSION 2
- was not appealing in smaller devices
- redesigned for a more mobile friendly experience
- cluttered screen space
- unique design

## How To Use Application 
You will initially be greeted with and display card that advices to input two duelist names. Hit Enter or click 'Go' to move to dueling UI.

![intro](https://user-images.githubusercontent.com/29850088/36197712-a0913c96-11c8-11e8-823f-261a73d3a936.gif)

In the Dueling UI, you have the following tabs:
- Dueling: The Dueiling UI.
- Official Dueling Rules: Official Konami Yu-Gi-Oh Rulebook Version 10.
- How To Use App: quick how to guide on the Yu-Gi-Oh application.

### Usage
#### Dynamically edit name
Double click on player name to change players name, hit 'Enter' on keyboard or click green 'OK' to complete.
![edit_name](https://user-images.githubusercontent.com/29850088/36197271-743baa38-11c7-11e8-927d-c1acbb27d59a.gif)

#### Calculate Life Points
When "CALCULATE" button is clicked, a calculator will pop up where you can make calcualtions towards your life points. 

For **single digit calculations**, initialize the calculation with a minus(-) or plus(+), followed by the number you wish to calculate. 

Example: -500 or -800

![calculate](https://user-images.githubusercontent.com/29850088/36197522-1762683c-11c8-11e8-90c2-9edde88e3b55.gif)

Though simple calculations are great, you can expand on this by writing equations where this benefits most. 

At times, spells/trap/field cards and chaining can be cumbersome to deal with. This is where an equation come into play. 

When writing an equation **please initialize with minus/plus or mutliply followed by parenthesis, ().** The equation must follow these conditions to apply successfully. 

Example: 
- -(2400-1750), the difference between two monsters.
- -(2*2100+250-3000), calculate monster gain in spell/field card effects minus monster ATK damage.

#### Undo Previous Calculation
Click on undo button that will undo the most recent calculation, cannot undo further calculations.

![undo](https://user-images.githubusercontent.com/29850088/36197168-3688bf82-11c7-11e8-9d13-a57ac6fd06eb.gif)

#### Roll the Dice/Flip a Coin
Pretty straight forwards, just simply click on the dice to roll it or click on the coin to reveal heads or tails.

![coin-die](https://user-images.githubusercontent.com/29850088/36197579-453555da-11c8-11e8-8da4-fd7a109de97e.gif)

#### Countdown timer
By default, Yu-Gi-Oh duels should go for 40 minutes, so that is the default timer. Features include:
- Changing the intial timer by clicking on the '+' or "-" icon and it will change by 1 minute depending on what you click.
- Start/Stop - start or stop the timer.
- Reset - It will reset back to default timer (40 minutes).

![timer](https://user-images.githubusercontent.com/29850088/36197656-7dbb9108-11c8-11e8-956c-28196ef3cc13.gif)

#### Action log
Keeps track of actions and logs them in the view log. You can view the Log by clicking on the "show log" button on the bottom right of the screen. The log tracks the following actions:
- Calculated differences
- Coin Toss value
- Duelist who has lost
- Undo button clicks

![log](https://user-images.githubusercontent.com/29850088/36197763-d27e7a0c-11c8-11e8-99c5-f2826491fd05.gif)


## Future Features/Fixes
- editable initial lifepoints
- token system

## Built With
- React.js

## Authors
Paulo Dacaya






