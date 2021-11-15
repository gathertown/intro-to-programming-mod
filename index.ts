console.log("starting program");
/*



  _____   ____  _   _ _ _______   _____        _   _ _____ _____ 
 |  __ \ / __ \| \ | ( )__   __| |  __ \ /\   | \ | |_   _/ ____|
 | |  | | |  | |  \| |/   | |    | |__) /  \  |  \| | | || |     
 | |  | | |  | | . ` |    | |    |  ___/ /\ \ | . ` | | || |     
 | |__| | |__| | |\  |    | |    | |  / ____ \| |\  |_| || |____ 
 |_____/ \____/|_| \_|    |_|    |_| /_/    \_\_| \_|_____\_____|
                                                                 
                                                                











Welcome to intro programming, Gather edition!

























*/

/* ---- Level 1 ----
  - comments
  - running the code
  - execution order
  - console.log
*/

// there are two types of things you've seen in this file already -- 'commands' and 'comments'
// lines like this are called comments. They don't do anything at all
/*
you can also use multi-line comments
like this one
with the /* syntax
*/
// your code editor knows these aren't code and makes them a different color

// console.log() is one command you can run to make stuff happen
// each command will happen one at a time, in the order you write them

// to run this program, type `npm run start` into your termal and press enter
// there's a lot of magic going on behind the scenes when you do that. Don't worry about it yet
// what matters is that you made the computer do a thing, and that you can make it do _anything_

console.log(1);
console.log(2);
console.log(3);
// console.log(4); // try typing ctrl + /  to "comment in" this line
console.log(5);

// even I don't really know how console.log works, and that's ok. We just need to know how to use it

/*

Comment out level 1 and comment in level 2 to continue


























*/

/* ---- Level 2 ----
  - primitives
  - order of operations
*/

/* REMOVE ME TO BEGIN LEVEL 2

// everything you write in javascript has a "type"
// here are some of the basic building blocks, called primitive types

console.log(1); // numbers we've already seen above
console.log(1.5); // they can also be decimals
console.log(true); // this is a "boolean" -- true or false
console.log("one!!1!"); // this is a "string" -- a string of characters. everything inside the "" is treated as text, not code
console.log("👀"); // also a string, treated like a normal character 👀

// primitives allow basic operations, like so

console.log(2 + 2);
console.log(2 * 2);
console.log(2 - 2);

console.log(!true); // ! is the "not" operator. it reverses true/false. this will come in handy later
console.log(!false);

console.log("hello " + "world!"); // you can even "add" string together, which will concatenate them
// console.log("hello " - "world?"); // what if you subtract strings? comment in to find out

// use parenthesis to control what order stuff happens in -- just like normal order of operations
console.log((3 + 3) * 2);
console.log(3 + (3 * 2));

/*

comment out level two and comment in level three to continue



















.                                                                            (this space intentionally left blank)




















*/

/* ---- level 3 ----
  - variables
*/

/* REMOVE ME TO BEGIN LEVEL 3

let x = "Simon says: ";
console.log(x);
console.log(x + "slide to the left");
console.log(x + "slide to the right");
x = x + "the game is over"; // you can also change the value inside x whevenever you want
console.log(x);

// replace "simon" with the most demanding person in your life
//  -- notice that all of the logs get updated, and we didn't even have to change all those lines. nice!

// you can name variables whatever you want

let mySuperAwesomeVariableThatIWillKeepWithMeUntilTheDayIDie = 3
console.log(mySuperAwesomeVariableThatIWillKeepWithMeUntilTheDayIDie);

/*

comment out level 3 to continue




































*/

/* ---- level 4 ----
  - objects
  - order of operations

this is the hardest and most important level
*/

/* REMOVE ME TO BEGIN LEVEL 4

// basically everything that isn't a number, boolean, or string is an object

// objects can bundle multiple variables together. so convenient!
// for example, this object hold a variable named x and one named y

let obj = { x: 5, y: 8 };
console.log(obj);
// sometimes is more readable to wrtie them like this -- it's ok that it takes more than one line, the {} indiciate that it's all one command
obj = {
  x: 5, // why is it : instead of = like before? what's going on is a little different even though it's practically the same
  y: 8,
};
console.log(obj);
// ok but how do we actually use those variables?
console.log("obj.x, three ways");
console.log(obj.x); // the . is how we access stuff inside an object. this isn't magic, it's part of the syntax
// order of operations
// ok what's actually happening here?
// 1. obj is representing the actual data { x: 5, y: 8 }
// 2. ({ x: 5, y: 8 }).x says "give me that variable you call x"
// 3. x evaluates to 5 -- it is a simple primitive
// 4. console.log(5) prints it out as usual

// x is still the real, normal variable we know and love!
obj.x = 7;
console.log(obj.x);
obj.x = obj.x * 2;
console.log(obj.x);
// just like a normal variable, but we access it through obj.

// what happens if we try one that doesn't exist?
// console.log(obj.fakeVariable); // comment me in to find out

//

//

//                 take a breath

//

//

// if you want to get freaky, you can even put objects inside objects :O
let biggerObj = {
  z: 100,
  smallerObj: obj, // whoa. obj is now stored in here, under the variable named "smallerObj"
};
console.log("bigger object??");
console.log(biggerObj);
console.log(biggerObj.smallerObj);
console.log(biggerObj.smallerObj.x); // it's all still there :)
// not just a party trick: it's the real obj inside there. we can change it and it will show up in biggerObj
obj.x = -2;
console.log(biggerObj.smallerObj.x); // don't be fooled that obj looks like it's never mentioned here -- we just named it smallerObj as far as biggerObj is concerned

let biggerObjCopy = biggerObj as any; // ignore this line -- it make it harder to catch errors, so I can demo something
// we just made a copy of biggerObj that is less safe. all of the data is the same

// what if we get rid of smallerObj?
console.log("getting rid of smallerObj");
biggerObjCopy.smallerObj = undefined; // makes it not exist :O
// console.log(biggerObjCopy.smallerObj.x); // an error!

// ? to the rescue
// sometimes, we're going to get dirty unreliable objects from other people's code. the ? operator can save us from these possibly undefined variables
console.log(biggerObjCopy.smallerObj?.x); // no error -- just undefined
// order of operations check
// 1. biggerObjCopy.smallerObj becomes smallerObj, the variable we stored there
// 2. smallerObj? checks if it's undefined. it is, so we stop there

// what if it was defined?
let definedObj = {
  smaller: {
    x: 5,
  },
};
console.log(definedObj.smaller?.x); // ? has no effect, does what we expected
// order of operations check
// 1. definedObj.smaller becomes smaller, the variable we stored there
// 2. smaller? checks if it's undefined. it isn't, so keep going
// 3. smaller.x becomes x, the variable we put there
// 4. x is 5, console.log prints it out

/*

comment out level 4 to continue






























*/

/* ---- level 5 ----
  - conditionals
*/

/* REMOVE ME TO BEGIN LEVEL 5

let x: any; // ignore this "any" -- it's a message between me and javacsript. x is a normal variable

x = 5;
console.log(x === 5); // a boolean! :O
// === is how to check if something is equal. triple because it's REALLY equal. smh javascript
// no relation to our good friend =, which is for assigning values to variables
console.log(x <= 10);
console.log(x > 7);
// these are all "conditions"
// it works for strings too:
console.log(x === "five"); // nice try
x = "five";
console.log(x === "five"); // yep

console.log("start of if statements");
x = 5;
// if statements!
if (x < 10) {
  console.log("x tiny");
}
// ok what's up
// - {}, like we've seen before, made a multi-line command
// - if the stuff inside the ()s is true, do the next command -- here the next command is actually a multi-line command, from "{" to "}"
if (x === "like, a million") {
  // x isn't even a string, it's a number! definitely false
  console.log("x is HUGE"); // should not be printed
}

/*

comment out level 5 to continue





































ok, this is the point at which things are going to stop making sense.
We're going to start using commands which do very complicated things under the hood, and what's going on doesn't actually matter --
what matters is taking these commands we don't understand, and combining them in ways we do understand.





Remember your training.













































*/

/* ---- level 6 ----
  - functions

[ REDACTED ]
*/

/*

console.log([ REDACTED - this is dark magic, considered too dangerous for beginners ])


*/

/*

comment [ REDACTED ] to [ REDACTED ]











































*/

// totally ignore all this nonsense, it's just setting up the connection to the game server
import { Game, MoveDirection } from "@gathertown/gather-game-client";
global.WebSocket = require("isomorphic-ws");
const setUpGame = () => {
  const API_KEY = "K7uzfsjPOGhuAoGU"; // get yours here: https://gather.town/apiKeys // jk just use this one, associated with extensions2@gather.town
  let game = new Game(() => Promise.resolve({ apiKey: API_KEY }));
  game.connect("oxX9dYr6jMiNg9KN\\makerweek");
  game.subscribeToConnection((connected) => {
    console.log(connected ? "connected to Gather" : "disconnected from Gather");
  });
  return game;
};

/*

move along, move along



































*/

/* ---- level 9 ----
  - listening for game events
*/

/* REMOVE ME TO BEGIN LEVEL 9

// this is the first example of using the gather game client, the tool we use for making mods and extensions

const game = setUpGame(); // magic. ignore
game.subscribeToEvent("playerMoves", (data, context) => {
  // totally normal code in here just like we've been doing!

  // btw "context" is a variable that is automatically set above,
  // and will contain useful game info when stuff happens. for player events, this is stuff like the player's name, location, etc
  const name = context?.player?.name // all of this stuff might be undefined, if we don't know it. must protect ourselves from life's tumultuous uncertainty
  const x = context?.player?.x;
  const y = context?.player?.y;
  console.log(name + " moved to " + x + ", " + y); // oooo, big compond expression. self check: does (name+" moved to") happen first or (", "+y)  ?
});

// now when you run the code, the program doesn't end -- it's always waiting for more game events
// hit ctrl + C to stop it

/*

comment out level 9 to continue










































*/

/* ---- level 10 ----
  - changing the map
*/

/* REMOVE ME TO BEGIN LEVEL 10

// to make something appear on the gather map, we just have to give this 'game' thing a javascript object like the ones above

let game = setUpGame();
// this thing makes it happen with a slight delay, so we have time to connect. ignore it!
setTimeout(() => {
  // vvvvvv this is what matters vvvvv

  let mapId = "all-hands";
  let objectId = "my-experimental-object"; // change this to something specific to you, or we'll all be trying to set the same object
  let obj = {
    id: objectId,
    normal:
      "https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/uploads/oxrhEtb3sV7VutbQ/jz6dPxtY1pRb1g8afwlL1J",
    // ^the url of any image
    x: 19, // use mapmaker to find the location you want
    y: 32,
    type: 0, // type 0s aren't interactable, and don't require a highlighted image
    width: 4, // you're supposed to specify this even though it's something we could figure out from the image, sorry
    height: 4, // 4 tiles is 128px
  };

  console.log("setting the object");
  game.setObject(mapId, objectId, obj);
  // first magic spell! doesn't matter how it works
  // just write it like this, with two strings and an object with the right variables inside
  // think of it like console.log, except it prints stuff on the map


  // change x, y and run it again -- the object should move!

  // ^^^ what matters ^^^
}, 3000); // timing magic, disregard

//

// side note: to get a url for your image, upload it to the mapmaker, right click it when it shows up, and hit 'copy image link'
// screenshot of what I mean: https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/uploads/oxrhEtb3sV7VutbQ/aSae9RDDUHZXW6zlkCA3sL

/*

comment out level 10 to continue









































*/

/* ---- level 11 ----
  - interacts + edits
*/

/* REMOVE ME TO BEGIN LEVEL 11

// just going to put some image urls here so the stuff below is easier to read. these are normal variables holding (long) strings
let DOOR_CLOSED_NORMAL =
  "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/uploads%2FoxrhEtb3sV7VutbQ%2Fassets%2Fa207c9c3-61f1-45ed-9175-227d5747b547?alt=media&token=60a37549-3097-48cd-86fa-34715f37a610";
let DOOR_CLOSED_HIGHLIGHTED =
  "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/uploads%2FoxrhEtb3sV7VutbQ%2Fassets%2Fe599618b-64b1-4778-ab02-8a81389ef8e0?alt=media&token=5e2eb610-9ecd-47ea-9bd8-b650fbcb4f5e";
let DOOR_OPEN_NORMAL =
  "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/uploads%2FoxrhEtb3sV7VutbQ%2Fassets%2Fd38cbd41-5f6d-4603-8b21-bda5dfcd401e?alt=media&token=a316c4e8-02c3-477b-80f4-f2b3649eb6e1";
let DOOR_OPEN_HIGHLIGHTED =
  "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/uploads%2FoxrhEtb3sV7VutbQ%2Fassets%2Fa1f20d71-b9aa-4bc8-bf41-999eff9abd80?alt=media&token=0b64b689-4f94-479f-b84d-57893af93fa8";

let mapId = "all-hands";
let objectId = "my-test-door"; // change this to something specific to you, or we'll all be trying to set the same object

let game = setUpGame(); // still magic
setTimeout(() => {
  // vvvvvv this is what matters vvvvv

  // alright same deal as last time, let's put an object on the map
  // but this time, it's a type 5, so we can interact with it

  let obj = {
    id: objectId,
    normal: DOOR_CLOSED_NORMAL,
    x: 21, // use mapmaker to find the location you want
    y: 34,
    type: 5, // type 5s are the ones for extensions. emit an event we'll listen for below
    width: 4, // you're supposed to specify this even though it's something we could figure out from the image, sorry
    height: 2, // 1 tile is 32px
    // new variables
    highlighted: DOOR_CLOSED_HIGHLIGHTED,
    previewMessage: "press x to use door", // this is what shows up in the press x bubble
  };

  console.log("setting the object");
  game.setObject(mapId, objectId, obj);

  // ^^^ what matters ^^^
}, 3000); // timing magic, disregard

// ok on to the new stuff

// new event type: listen for when people interact

// magic magic
game.subscribeToEvent("playerInteracts", (data, context) => {
  let mapObject = game.getObject(data.playerInteracts.objId)!.obj; // magic, fills mapObject with data that looks like the obj we made above. this is the object the person interacted with

  // more totally normal code here, like we've been doing

  // let's see what happened first
  console.log(context?.player?.name + " interacted with " + data.playerInteracts.objId);

  // ok, we only want to do stuff if they interact with OUR object, so let's whip out some conditionals
  if (data.playerInteracts.objId === objectId) {
    // toggle the door open or closed by changing the images!
    // but how do we know what its current state is?

    let doorIsCurrentlyOpen = false;
    // check if the "normal" matches our open vs closed image
    if (mapObject.normal === DOOR_OPEN_NORMAL) {
      doorIsCurrentlyOpen = true;
    }

    // alright so now we have if the door is open or not, and can set it to be the opposite
    let newNormal = DOOR_OPEN_NORMAL;
    let newHighlighted = DOOR_OPEN_HIGHLIGHTED;
    if (doorIsCurrentlyOpen) {
      // use the closed images instead
      newNormal = DOOR_CLOSED_NORMAL;
      newHighlighted = DOOR_CLOSED_HIGHLIGHTED;
    }

    // and finally, output this to the map
    let newObj = {
      normal: newNormal,
      highlighted: newHighlighted,
    };
    // it only changes the variables that you change -- things like x,y will be left alone in this case
    game.setObject(mapId, objectId, newObj);
  }
});

/*

comment out level 11 to continue



































*/

/* ---- level 13 ----     WORK IN PROGRESS, INCOMPLETE
  - bonus satanic ritual

If someone steps in the candles, change their status to "praise ba'al the soul-eater" and play a sound
Pentagram disappears, reappears somewhere random
*/

/* incomplete -- do the rest later

let pentagramX = 21;
let pentagramY = 34;
let mapId = "all-hands";
let objectIdPrefix = "suspicious-candle"; // change this to something specific to you, or we'll all be trying to set the same object

let game = setUpGame(); // still magic
setTimeout(() => {
  console.log("setting the objects");

  let obj = {
    normal:
      "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FDs218FGC0Hb6v5wA?alt=media&token=b5d854ef-0fe3-4d1e-b005-bc93bca68517",
    // this one is a candle
    highlighted:
      "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FDs218FGC0Hb6v5wA?alt=media&token=b5d854ef-0fe3-4d1e-b005-bc93bca68517",
    // same one
    type: 5,
    previewMessage: "you feel drawn to the pentagram...",
    width: 1, // you're supposed to specify this even though it's something we could figure out from the image, sorry
    height: 1, // 1 tile is 32px
    // different for each of the four candles
    x: pentagramX + 1, // use mapmaker to find the location you want
    y: pentagramY + 1,
    id: objectIdPrefix + "1",
  };

  game.setObject(mapId, objectId, obj);

  obj.x = pentagramX + 1;
  obj.y = pentagramY - 1;
  obj.id = objectIdPrefix + "2";
  game.setObject(mapId, objectId, obj);

  obj.x = pentagramX - 1;
  obj.y = pentagramY - 1;
  obj.id = objectIdPrefix + "3";
  game.setObject(mapId, objectId, obj);

  obj.x = pentagramX - 1;
  obj.y = pentagramY + 1;
  obj.id = objectIdPrefix + "4";
  game.setObject(mapId, objectId, obj);
}, 3000);

game.subscribeToEvent("playerMoves", (data, context) => {
  const x = context?.player?.x;
  const y = context?.player?.y;

  if (x === pentagramX && y === pentagramY) {
    // they stepped on the pentagram, do some spooky shit
  }
});

/*




that's it!

*/
