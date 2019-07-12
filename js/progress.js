
function Progress(obj) {
    if (arguments.length > 0){
        let defaultObj = {
            width:100,
            height:20,
            borderRadius:5,
            bgColor:'gray',  //进度条背景色
            thumbColor1:'transparent',  //进度条滑块颜色
            thumbColor2:'green',  //进度条滑块颜色
            thumbbgImg: '../imgs/thumbbar.png',
            direction: 1,  //进度条滑动方向
            incLen: 5,  //进度条滑动步长
            timeSpace:100  //定时器时间间隔
        }
    for(let key in obj){
        defaultObj[key] = obj[key];
    }
    for(let key in defaultObj){
        this[key] = defaultObj[key];
    }
    this.domObj = null;
    this.innerBox = null;
    this.myTimer = null;
    this.createUI();    
    }
}

Progress.prototype.createUI = function() {
    this.domObj = document.createElement("div");
    this.domObj.style.cssText = "position:absolute; top:500px; left:0;";
    this.domObj.style.width = this.width + "px";
    this.domObj.style.height = this.height + "px";
    this.domObj.style.backgroundColor = this.bgColor;
    this.domObj.style.borderRadius = this.borderRadius + "px";
    $("#bgArea").appendChild(this.domObj);
    this.innerBox = document.createElement('div');
    this.innerBox.style.cssText = "position:absoulte;top:0; left:0; z-Index:1;";
    this.innerBox.style.height = this.height + "px";
    // this.innerBox.style.backgroundColor = "-webkit - linear - gradient(135 deg, " + this.thumbColor1 +" 0%, " + this.thumbColor2 + " 100 % );";
    // this.innerBox.style.background = -webkit - linear - gradient('135deg', '#1de9b6' 0%, '#1dc4e9' 100 % );
    // this.innerBox.style.backgroundColor = this.thumbColor2;
    this.innerBox.style.backgroundImage = "url("+this.thumbbgImg+")";
    this.innerBox.style.borderRadius = this.borderRadius + "px"; 
    this.innerBox.style.width = "0px";
    this.domObj.appendChild(this.innerBox);
}

let step = 0;
Progress.prototype.run = function(){
    setInterval(() => {
        step += this.incLen;
        if(step>=this.width){
            step = this.width;
        }
        this.innerBox.style.width = step + 'px';
    }, this.timeSpace);
}