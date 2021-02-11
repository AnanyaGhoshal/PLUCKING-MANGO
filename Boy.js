class Boy{
    
    constructor(x,y){

        var options={
            'isStatic':true           
        }

        this.body = Bodies.rectangle(x,y,30,30,options);
        this.width = 30;
        this.height = 30;
        this.image = loadImage("boy.png");
        World.add(world,this.body);

    }
    display(){

        var pos = this.body.position;

        fill(0);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width+220,this.height+200);

    }

    
}