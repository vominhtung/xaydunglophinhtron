let Circle = function (radius){
    this.radius = radius;
    this.getRadius = function (){
        return radius;
    }
    this.getArea = function (){
        return Math.PI * radius * radius;
    }
};




let circle = new Circle(2);
let radius = circle.getRadius();
let area = circle.getArea();
alert("radius:"+ radius+";area"+ area );


let circle1 = new Circle(6);
let radius1 = circle1.getRadius();
let area1 = circle1.getArea();
alert("radius:"+radius1+";area"+ area1 );
