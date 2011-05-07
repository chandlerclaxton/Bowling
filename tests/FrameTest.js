FrameTest = TestCase('Frame', {
    setUp : function()
    {
        
    },

    tearDown : function()
    {
        Bowling.Frame.score = 0;
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

    _assertTheScoreIs : function(score)
    {
        assertEquals(score, Bowling.Frame.getCurrentScore());
    }
});