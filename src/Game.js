var Bowling = Bowling || {};
Bowling.Game = Bowling.Game || {};

//Bowling.Game.PastFrames = [];


Bowling.Game = function()
{
    this.frameNumber = 1;
    this.totalScore = 0;
    this.CurrentFrame = new Bowling.Frame();

    this.pinsKnockedDown = function(pins)
    {
        var CurrentFrame = this.CurrentFrame;

        var shouldMoveToNextFrame = CurrentFrame.shouldMoveToNextFrame(pins);
        if (shouldMoveToNextFrame) {
            CurrentFrame.addPins(pins);

            CurrentFrame = this.moveToNextFrame();

            this.totalScore += pins;
        } else {
            CurrentFrame.addPins(pins);
            this.totalScore += pins;
        }
    };

    this.moveToNextFrame = function()
    {
        this.frameNumber++;
        this.CurrentFrame = new Bowling.Frame();
        return this.CurrentFrame;
    };
};

Bowling.Game.factory = function()
{
    Bowling.Frame.factory();
    Bowling.Game.CurrentFrame = Bowling.Frame;
    Bowling.Game.frameNumber = 1;
    Bowling.Game.totalScore = 0;
//    Bowling.Game.PastFrames = [];
};

