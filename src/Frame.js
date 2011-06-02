var Bowling = Bowling || {};
Bowling.Frame = Bowling.Frame || {};

Bowling.Frame = function()
{
    this.score = 0;
    this.numberOfTries = 0;

    this.addPins = function(pins)
    {
        this.numberOfTries++;

        this.score += pins;
        if (this.score > 10) {
            this.score = 10;
        } else if (pins < 0) {
            this.score = 0;
        }
    };

    this.getCurrentScore = function()
    {
        return this.score;
    };

    this.shouldMoveToNextFrame = function(pins)
    {
        if (pins === undefined) {
            pins = 0;
        }

        if (this.numberOfTries > 1) {
            return true;
        }

        var newScore = (this.score + pins);
        if (newScore >= 10) {
            return true;
        }

        return false;
    };
};
