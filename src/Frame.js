var Bowling = Bowling || {};
Bowling.Frame = Bowling.Frame || {};

Bowling.Frame.score = 0;

Bowling.Frame.getCurrentScore = function()
{
    return Bowling.Frame.score;
};

Bowling.Frame.addPins = function(pins)
{
    if (pins > 10) {
        pins = 10;
    } else if (pins < 0) {
        pins = 0;
    }
    Bowling.Frame.score = Bowling.Frame.score + pins;
};