function oCatAndDog(catYears, dogYears) {
    let oCat = 0;
    if (catYears < 15) {
        oCat = 0;
    } else if (catYears < 24) {
        oCat = 1;
    } else {
        oCat = 2 + Math.floor((catYears - 24) / 4);
    }
    
    let oDog = 0;
    if (dogYears < 15) {
        oDog = 0;
    } else if (dogYears < 24) {
        oDog = 1;
    } else {
        oDog = 2 + Math.floor((dogYears - 24) / 5);
    }
    
    return [oCat, oDog];
}