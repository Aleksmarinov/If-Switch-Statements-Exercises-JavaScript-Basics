function worldSwimmingRecord (input) {
    recordInSeconds = Number(input[0]);
    distanceInMetres = Number(input[1]);
    timeInSeconds = Number(input[2]); 

    let swimmerRecord = distanceInMetres * timeInSeconds;
    let waterResistanceSeconds = Math.floor(distanceInMetres / 15) * 12.5;
    let totalTime = swimmerRecord + waterResistanceSeconds;

    if(recordInSeconds <= totalTime) {
        let failSeconds = totalTime - recordInSeconds;
        console.log(`No, he failed! He was ${failSeconds.toFixed(2)} seconds slower.`)
    } else if (recordInSeconds > totalTime) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`)
    }
}
worldSwimmingRecord(["10464", "1500", "20"])