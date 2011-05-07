var Bowling = Bowling || {};
Bowling.Game = Bowling.Game || {};

Bowling.Game.frameNumber = 1;
Bowling.Game.totalScore = 0;
Bowling.Game.CurrentFrame = null;

Bowling.Game.factory = function()
{
    Bowling.Frame.factory();
    Bowling.Game.CurrentFrame = Bowling.Frame;
    Bowling.Game.frameNumber = 1;
    Bowling.Game.totalScore = 0;
};

Bowling.Game.pinsKnockedDown = function(pins)
{
    var CurrentFrame = Bowling.Game.CurrentFrame;
    var Game = Bowling.Game;
    
    if (CurrentFrame.numberOfTries == 2) {
        Game.frameNumber++;
        CurrentFrame = Bowling.Frame.factory();
        
        CurrentFrame.addPins(pins);
        Game.totalScore += pins;
    } else {
        CurrentFrame.addPins(pins);
        Game.totalScore += pins;
    }
};