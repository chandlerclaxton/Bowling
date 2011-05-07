FrameTest = TestCase('FrameTest', {
    setUp : function()
    {
        Bowling.Frame.factory();
    },

    tearDown : function()
    {

    },

    'test Score is 0 at beginning of the game' : function()
    {
        this._assertTheScoreIs(0);
    },

    'test First ball knocks down 5 pins then five is returned for current score' : function()
    {
        Bowling.Frame.addPins(5);
        this._assertTheScoreIs(5);
    },

    'test More than ten pins can not be added to the score' : function()
    {
        Bowling.Frame.addPins(11);
        this._assertTheScoreIs(10);
    },

    'test Less than zero pins can not be added to the score' : function()
    {
        Bowling.Frame.addPins(-1);
        this._assertTheScoreIs(0);
    },

    'test Adding multiple values to the frame increases it each time' : function()
    {
        Bowling.Frame.addPins(2);
        Bowling.Frame.addPins(3);
        this._assertTheScoreIs(5);
    },

    'test Adding multiple values to the frame can not get the value over ten' : function()
    {
        Bowling.Frame.addPins(7);
        Bowling.Frame.addPins(7);
        this._assertTheScoreIs(10);
    },

    'test More than three returns null' : function()
    {
        Bowling.Frame.addPins(7);
        Bowling.Frame.addPins(7);
        assertEquals(Bowling.Frame.addPins(7), "Error");
    },

    'test More than three sets the score to the same as if two had been passed' : function()
    {
        Bowling.Frame.addPins(2);
        Bowling.Frame.addPins(3);
        Bowling.Frame.addPins(4);
        this._assertTheScoreIs(5);
    },

    'test Factory creates a new frame' : function()
    {
        Bowling.Frame.addPins(2);
        Bowling.Frame.addPins(3);
        Bowling.Frame.factory();
        this._assertTheScoreIs(0);
    },

    _assertTheScoreIs : function(expectedScore)
    {
        assertEquals(expectedScore, Bowling.Frame.getCurrentScore());
    }
});