class Ball {
    constructor(x,y,width,height,radius) {
      var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
     
      }
      this.body = Bodies.circle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(CENTER);
      fill("blue");
      circle(pos.x, pos.y, this.width, this.height);
    }
  
