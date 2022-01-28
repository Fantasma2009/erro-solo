class Solo{
 constructor(x, y, width, height){
  var options={
      isStatic:true
  }
  this.body=Bodies.rectangle(x, y, width, height, options);
  this.width=width;
  this.height=height;
  World.add(wworld, this.body);
 }
 display(){
     var posi=this.body.position;
     rectMode(CENTER);
     Fill(255);
     rect(posi.x, posi.y, this.width, this.height);
 }
}