GameTest = TestCase('GameTest', {
    setUp : function()
    {
        this.Game = new Bowling.Game();
    },

    'test Frame number gets the first frame when it is the first frame' : function()
    {
        assertEquals(1, this.Game.frameNumber);
    },

    'test Frame number does not get incremented when only one ball is thrown' : function()
    {
        this.Game.pinsKnockedDown(2);
        assertEquals(1, this.Game.frameNumber);
    },

    'test Frame number gets the second frame number when it is moved to the next frame' : function()
    {
        this.Game.pinsKnockedDown(4);
        this.Game.pinsKnockedDown(5);
        this.Game.pinsKnockedDown(2);
        assertEquals(2, this.Game.frameNumber);
    },

    'test Total score returns the score of the first frame' : function()
    {
        this.Game.pinsKnockedDown(4);
        assertEquals(4, this.Game.totalScore);
    },

    'test Total score returns the score of the first two frames' : function()
    {
        this.Game.pinsKnockedDown(2);
        this.Game.pinsKnockedDown(7);
        this.Game.pinsKnockedDown(5);
        assertEquals(14, this.Game.totalScore);
    },

    'test Frame number is moved if they get a strike' : function()
    {
        this.Game.pinsKnockedDown(10);
        assertEquals(2, this.Game.frameNumber);
    }

});