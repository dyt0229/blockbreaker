function Map(obj){
    this.domObj = null;
    this.width = obj.width;
    this.height = obj.height;
    this.bgImg = obj.bgImg;
    this.gradeBox = obj.gradeBox;
    this.gradeBgImg = obj.gradeBgImg;
    this.block = [];
    this.myBat = [];
    this.myScore = 0;
    this.creatUI();
}

Map.prototype.creatUI = function() {
    this.domObj = document.createElement('div');
    this.domObj.style.cssText = "position:absolute;overflow:hidden;background-size:100%";
    this.domObj.style.width = this.width + "px";
    this.domObj.style.height = this.height + "px";
    this.domObj.style.backgroundImage = "url(" + this.bgImg + ")";
    $('#bgArea').appendChild(this.domObj);
}