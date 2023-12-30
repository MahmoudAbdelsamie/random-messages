const messages = {
    set1: ["You are stronger than you think.", "Believe in yourself.", "Dream big, work hard."],
    set2: ["Every day is a new opportunity.", "Embrace the journey.", "Stay positive and focused."],
    set3: ["Success is a mindset.", "Challenges make you stronger.", "You are capable of amazing things."]
    // To Add more Messages with different sets
};

function generateRandomIndex(arrLen) {
    return Math.floor(Math.random() * arrLen);
}

let arrOfMessages = [];

for(let set in messages) {
    const idx = generateRandomIndex(messages[set].length);
    switch(set) {
        case 'set1':
            arrOfMessages.push(messages[set][idx]);
            break;
        case 'set2':
            arrOfMessages.push(messages[set][idx]);
            break;
        case 'set3':
            arrOfMessages.push(messages[set][idx]);
            break;
        default:
            console.log('Good Bye!')
    }
}


let finalMsg = arrOfMessages.join('\n');

console.log(finalMsg);