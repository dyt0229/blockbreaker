function MoveObj(obj) {
    if(arguments.length>0){
        let defaultObj = {
            map:null,  //每个移动物体所属的地图
            width:0,
            height:0,
            left:0,
            top:0,
            bgImg:'',
            directionLeft:0, //运动物体运动的左右方向
            directionTop:0,  //运动物体运动的上下方向
            incLeft:0,  //运动物体左右方向运动步长
            incTop:0,  //运动物体上下方向运动步长
            timeSpace:100  //定时器时间间隔
        };
        // 将传入参数的值赋值给defaultObj
        for(let key in obj){
            defaultObj[key] = obj[key];
        }
        for(let key in defaultObj){
            this[key] = defaultObj[key];
        }
        this.domObj = null;
        this.myTimer = null;
        this.creatUI();
    }
}
//初始化移动物体的界面
MoveObj.prototype.creatUI = function() {
    this.domObj = document.createElement('div');
    this.domObj.style.cssText = "position:absolute";
    this.domObj.style.width = this.width + "px";
    this.domObj.style.height = this.height + "px";
    this.domObj.style.left = this.left + "px";
    this.domObj.style.top = this.top + "px";
    this.domObj.style.backgroundImage = "url(" + this.bgImg + ")";
    this.map.domObj.appendChild(this.domObj);
}
MoveObj.prototype.go = function() {
    this.myTimer = setInterval(() => {
        this.left = this.left + this.directionLeft * this.incLeft;
        this.top = this.top + this.directionTop * this.incTop;
        this.domObj.style.left = this.left + "px";
        this.domObj.style.top = this.top + "px";
    }, this.timeSpace);
}