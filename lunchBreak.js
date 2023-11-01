function lunchBreak (input) {
    let serialName = input[0];
    let episodeLenght = Number(input[1]);
    let lunchBreak = Number(input[2]);

    let lunch = (lunchBreak / 8);
    let relax = (lunchBreak / 4);
    let timeLeft = lunchBreak - lunch - relax;

    if (timeLeft >= episodeLenght) {
        console.log(`You have enough time to watch ${serialName} and left with ${Math.ceil(timeLeft - episodeLenght)} minutes free time.`)
    } else {
        console.log(`You don't have enough time to watch ${serialName}, you need ${Math.ceil(episodeLenght - timeLeft)} more minutes.`)
    }
}
lunchBreak(["Teen Wolf", "48", "60"])