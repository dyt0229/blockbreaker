function Bat(obj){
    //继承移动的物体
    MoveObj.apply(this,arguments); //继承父类的所有属性
    this.balls = [];  //球
    this.score = 0;
}

Bat.prototype = new MoveObj();

Bat.prototype.addEvent = function(){
    //将鼠标光标隐藏 实质上鼠标是在浏览器整个页面滑动
    //但用户可见为滑块在底部左右滑动
    $("#box_body").style.cursor = "none";
    // this.map.domObj.style.cursor = "none";
    this.map.domObj.onmousemove = (event) => {
        let evt = event || window.event;
        //box距离浏览器左上角的左侧距离
        let boxoffsetLeft = $("#box").offsetLeft;
        console.log(boxoffsetLeft)
        //球拍的左定位
        this.left = evt.pageX - boxoffsetLeft - this.width/2;
        //球拍的高定位不变,不另外设置

        //边界判定
        if(this.left<=0){
            this.left = 0;
        } else if(this.left >= this.map.width - this.width){
            this.left = this.map.width - this.width;
        }
        this.domObj.style.left = this.left + "px";
    }
}

Bat.prototype.shoot = function(){
    let b = new Ball({
        map:this.map,
        myBat:this,
        width:15,
        height:15,
        left:this.left + (this.width-15)/2,
        top:this.top-15,
        bgImg:"../imgs/ball.jpg",
        directionTop:-1,
        directionLeft:-1,
        incTop:32,
        timeSpace:150
    })
    this.balls.push(b);
}