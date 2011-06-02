FrameTest = TestCase('FrameTest',
{
    setUp : function()
    {
        this.Frame = new Bowling.Frame();
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
        this.Frame.addPins(5);
        this._assertTheScoreIs(5);
    },

    'test More than ten pins can not be added to the score' : function()
    {
        this.Frame.addPins(11);
        this._assertTheScoreIs(10);
    },

    'test Less than zero pins can not be added to the score' : function()
    {
        this.Frame.addPins(-1);
        this._assertTheScoreIs(0);
    },

    'test Adding multiple values to the frame increases it each time' : function()
    {
        this.Frame.addPins(2);
        this.Frame.addPins(3);
        this._assertTheScoreIs(5);
    },

    'test Adding multiple values to the frame can not get the value over ten' : function()
    {
        this._addThisManyPins(7);
        this._addThisManyPins(7);
        this._assertTheScoreIs(10);
    },

    'test More than three sets the score to that even though it makes no bowling sense' : function()
    {
        this._addThisManyPins(2);
        this._addThisManyPins(3);
        this._addThisManyPins(4);
        this._assertTheScoreIs(9);
    },

    'test New frame creates a new frame' : function()
    {
        this._addThisManyPins(2);
        this._addThisManyPins(3);
        
        this.Frame = new Bowling.Frame();

        this._assertTheScoreIs(0);
    },

    'test Should move to next frame returns true if there are ten pins' : function()
    {
        this.Frame.score = 10;
        assertTrue(this.Frame.shouldMoveToNextFrame());
    },

    'test Should move to next frame returns true if add pins has been called twice' : function()
    {
        this.Frame.numberOfTries = 2;
        assertTrue(this.Frame.shouldMoveToNextFrame());
    },

    'test Should move to next frame returns false when pins are appropriate' : function()
    {
        Bowling.Frame.score = 2;
        assertFalse(this.Frame.shouldMoveToNextFrame());
    },

    _addThisManyPins : function(pins)
    {
        this.Frame.addPins(pins);
    },

    _assertTheScoreIs : function(expectedScore)
    {
        assertEquals(expectedScore, this.Frame.getCurrentScore());
    }
});