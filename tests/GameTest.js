GameTest = TestCase('GameTest', {
    setUp : function()
    {
        Bowling.Game.factory();
    },

    'test Frame number gets the first frame when it is the first frame' : function()
    {
        assertEquals(1, Bowling.Game.frameNumber);
    },

    'test Frame number does not get incremented when only one ball is thrown' : function()
    {
        Bowling.Game.pinsKnockedDown(2);
        assertEquals(1, Bowling.Game.frameNumber);
    },

    'test Frame number gets the second frame number when it is moved to the next frame' : function()
    {
        Bowling.Game.pinsKnockedDown(4);
        Bowling.Game.pinsKnockedDown(5);
        Bowling.Game.pinsKnockedDown(2);
        assertEquals(2, Bowling.Game.frameNumber);
    },

    'test Total score returns the score of the first frame' : function()
    {
        Bowling.Game.pinsKnockedDown(4);
        assertEquals(4, Bowling.Game.totalScore);
    },

    'test Total score returns the score of the first two frames' : function()
    {
        Bowling.Game.pinsKnockedDown(2);
        Bowling.Game.pinsKnockedDown(7);
        Bowling.Game.pinsKnockedDown(5);
        assertEquals(14, Bowling.Game.totalScore);
    },

    'test Frame number is moved if they get a strike' : function()
    {
        Bowling.Game.pinsKnockedDown(10);
        assertEquals(2, Bowling.Game.frameNumber);
    }
});