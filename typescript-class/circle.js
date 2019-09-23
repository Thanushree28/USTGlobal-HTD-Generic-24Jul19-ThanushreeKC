var MathOperations;
(function (MathOperations) {
    var PI = 3.14;
    function circumferenceofCircle(radius) {
        console.log("the circumference of a circle is " + 2 * PI * radius);
    }
    MathOperations.circumferenceofCircle = circumferenceofCircle;
    function areaofCircle(radius) {
        console.log("the area of circle is " + PI * radius * radius);
    }
    MathOperations.areaofCircle = areaofCircle;
})(MathOperations || (MathOperations = {}));
// console.log(MathOperations.Circle.circumferenceofCircle(2));
MathOperations.circumferenceofCircle(3);
