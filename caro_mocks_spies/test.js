var rrule = sinon.stub();
var moment = sinon.stub();
var assignToPatients = sinon.spy();

var classUnderTest = mockrequire('./code', {
    'rrule': isSet,
    'moment': moment,
    './assignToPatients': assignToPatients
});

// Not actual syntax!
describe('AnswerController', function() {

    it('If days contain one Monday Then result is true', function() {

        // Arrange
        rrule.getAllOccurrences().returns(['2016-05-05', '2016-05-06', '2016-05-07']);
        moment('2016-05-05').getNameInEnglish().returns('Saturday');
        moment('2016-05-06').getNameInEnglish().returns('Sunday');
        moment('2016-05-07').getNameInEnglish().returns('Monday');
        assignToPatients.save().returns(true); // always

        // Act
        var result = classUnderTest.getAllNonMondays();

        // Assert
        result.should.be.equal('all days saved that are not mondays');
        assignToPatiens.should.have.been.calledOnce; // only if has been called once then we know the logic worked
        // more test logic

    });

    it('If days contain no Monday Then result is false', function() {

        // Arrange
        rrule.getAllOccurrences().returns(['2016-05-05', '2016-05-06', '2016-05-07']);
        moment('2016-05-05').getNameInEnglish().returns('Saturday');
        moment('2016-05-06').getNameInEnglish().returns('Sunday');
        moment('2016-05-07').getNameInEnglish().returns('Monday');
        assignToPatients.save().returns(true); // always

        // Act
        var result = classUnderTest.getAllNonMondays();

        // Assert
        result.should.be.equal('all days saved that are not mondays');
        assignToPatiens.should.have.been.calledOnce; // only if has been called once then we know the logic worked
        // more test logic

    });
    // MORE TEST CASES
});
