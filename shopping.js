function shopping (input) {
    let graphicCardCount = Number(input[0]);
    let processorCount = Number(input[1]);
    let ramCount = Number(input[2]);
    let budget = Number(input[3]);

    let graphicCardPrice = 250;

    let totalGraphicCardPrice = (graphicCardCount * graphicCardPrice);
    let processorPrice = (processorCount * totalGraphicCardPrice) * 0.35;
    let ramPrice = (ramCount * totalGraphicCardPrice) * 0.10;

    let totalPrice = totalGraphicCardPrice + processorPrice + ramPrice;

    if (totalPrice <= budget) {
        console.log(`You have ${budget - totalPrice.toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money! You need ${totalPrice - budget.toFixed(2)} leva more.`)
    }
}
shopping(["900", "2", "1", "3"])