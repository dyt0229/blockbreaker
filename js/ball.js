function Ball(obj){
    MoveObj.apply(this,arguments); //继承移动的物体
    this.myBat = obj.myBat;  //球所属的滑块
}

Ball.prototype = new MoveObj();

Ball.prototype.run = function() {

}