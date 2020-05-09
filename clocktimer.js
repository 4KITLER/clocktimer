
function ClockTimer(params)
{
    this.seconds = params.seconds ? params.seconds : 30;
    this.period = params.period ? this.period : 1000;
    this.clockType =  null;
    this.elem = params.elem ? params.elem : false;
    this.afterStop = params.afterStop ? params.afterStop : false;
    this.beforeNumberSeconds = params.beforeNumberSeconds ? params.beforeNumberSeconds : false;
}

ClockTimer.prototype.start = function()
{
    if(!this.elem) return;
    this.clockType = setTimeout(this.update.bind(this), this.period);
}

ClockTimer.prototype.update = function()
{
    if (!(this.seconds >= 0))
    {
        this.callBackFunction(this.afterStop);
        return;
    }
 
    let strTime = "";
    let hours = Math.floor(this.seconds / 3600);
    let minutes = Math.floor(this.seconds / 60);
    let sec = (this.seconds % 60);

    if (hours > 0) strTime += (hours < 10 ? "0" : "") + hours + ":";
    else strTime += "00:";

    if (minutes > 0) strTime += (minutes < 10 ? "0" : "") + minutes + ":";
    else strTime += "00:";

    strTime += (sec < 10 ? "0" : "") + sec;
    document.getElementById(this.elem).innerHTML = strTime;

    this.seconds--;
    this.clockType = setTimeout(this.update.bind(this), this.period);
}


ClockTimer.prototype.callBackFunction = function(callBackFunction)
{
    if(callBackFunction && typeof callBackFunction === "function" ) callBackFunction();
}
