// Kilometer to meter

function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;

    if (kilometer < 0) {
        return "Misconception: The number you've entered must be positive (+)"
    }
    
    else {
        return meter;
    }
}


// Budget Calculator

function budgetCalculator(watch, phone, laptop) {
    var sum = watch * 50 + phone * 100 + laptop * 500;

    if (watch == undefined || phone == undefined || laptop == undefined) {
        return "Misconception: Fill-up the three value"
    }

    else if (watch < 0 || phone < 0 || laptop < 0) {
        return "Misconception: Negative value/s won't show any outcome"
    }
    
    else {
        return sum;
    }
}


// Hotel Cost Calculator

function hotelCost(day) {
    var cost = 0;

    if (day <= 10) {
        cost = day * 100;
    }

    else if (day <= 20) {
        var initialTenDays = 10 * 100;
        var remaining = day - 10;
        var upcomingTenDays = remaining * 80;
        cost = initialTenDays + upcomingTenDays;
    }

    else {
        var initialTenDays = 10 * 100;
        var upcomingTenDays = 10 * 80;
        var remaining = day - 20;
        var lastDays = remaining * 50;
        cost = initialTenDays + upcomingTenDays + lastDays;
    }
    return cost;
}


// Longest Friend Name

function megaFriend(array) {
    var longName = array[0];

    for (var i = 0; i < array.length; i++) {
        var element = array[i];

        if (longName.length < element.length) {
            longName = element;
        }
    }

    if (longName == undefined) {
        return "Misconception: The array can't be vacant";
    }
    
    else if (typeof longName == 'number') {
        return "Misconception: The array can't be vacant";
    }
    
    else {
        return longName;
    }
}
