// External dependencies as you find them often in your js files
var rrule = require('rrule');
var moment = require('moment');
var assignToPatients = require('./assignToPatients');


function getAllNonMondays() {

    var occurrences = rrule().getAllOccurrences();
    var daysWeAllLike = [];
    for (var i = 0; i < occurrences.length; i++) {
        var day = occurrences[i];
        var nameOfDay = moment(day).getNameInEnglish();
        if (nameOfDay !== 'Monday') {
            daysWeAllLike.push(nameOfDay);
        }
    }

    var saveResult = assignToPatients.assignHappyDays(daysWeAllLike);

    if (saveResult.length > 0) {
        return 'Yaiks!';
    }
    return 'Boohoo!';
}
