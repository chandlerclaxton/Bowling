TenFramesInAGameTest = TestCase('TenFramesInAGameTest', {
    setUp : function()
    {

    },

    'test There are ten frames in a game' : function()
    {
        assertEquals(10, getNumberOfFrames());
    }
});