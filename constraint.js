class launcher{
    constructor(VbodyA,VpointB){
      var options={
          bodyA: VbodyA,
          pointB: VpointB,
          stiffness:0.004,
          length:10
      }
      this.launch=Constraint.create(options);
      World.add(world,this.launch);
    }
    fly(){
     this.launch.bodyA=null
    }
    attach(body){
      this.launch.bodyA=body
     }
   display(){
     if(this.launch.bodyA!==null){
     var PosA=this.launch.bodyA.position
     var PosB=this.launch.pointB

     line(PosA.x,PosA.y,PosB.x,PosB.y);
     }
   }

   
}