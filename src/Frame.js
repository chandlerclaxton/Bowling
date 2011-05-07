var Bowling = Bowling || {};
Bowling.Frame = Bowling.Frame || {};

Bowling.Frame.score = 0;
Bowling.Frame.numberOfTries = 0;

Bowling.Frame.factory = function()
{
    Bowling.Frame.score = 0;
    Bowling.Frame.numberOfTries = 0;
};

Bowling.Frame.getCurrentScore = function()
{
    return Bowling.Frame.score;
};

Bowling.Frame.addPins = function(pins)
{
    Bowling.Frame.numberOfTries++;
    if (Bowling.Frame.numberOfTries > 2) {
        return null;
    }

    Bowling.Frame.score = Bowling.Frame.score + pins;
    if (Bowling.Frame.score > 10) {
        Bowling.Frame.score = 10;
    } else if (pins < 0) {
        Bowling.Frame.score = 0;
    }
};