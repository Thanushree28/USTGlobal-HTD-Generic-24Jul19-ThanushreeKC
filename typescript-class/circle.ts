namespace MathOperations{
    const PI =3.14;
     export function circumferenceofCircle(radius:number){
        console.log("the circumference of a circle is "+2*PI*radius);
    }
    export function areaofCircle(radius:number){
        console.log("the area of circle is "+PI*radius*radius);
    }
}
// console.log(MathOperations.Circle.circumferenceofCircle(2));
MathOperations.circumferenceofCircle(3);