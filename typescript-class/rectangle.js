var MathOperations;
(function (MathOperations) {
    function area(length, breadth) {
        console.log("Area of rectangle is " + length * breadth);
    }
    MathOperations.area = area;
    function perimeter(length, breadth) {
        console.log("perimeter of rectangle is " + 2 * (length + breadth));
    }
    MathOperations.perimeter = perimeter;
})(MathOperations || (MathOperations = {}));
MathOperations.area(2, 4);
