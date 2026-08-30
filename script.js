function calculateArea() {

    let selectedShape = shape.value;
    let area;

    if (selectedShape === "triangle") {

        let base = Number(document.getElementById("base").value);
        let height = Number(document.getElementById("height").value);

        if (base <= 0 || height <= 0) {
            result.innerText = "Please enter valid positive values.";
            return;
        }

        area = 0.5 * base * height;

    } else if (selectedShape === "rectangle") {

        let length = Number(document.getElementById("length").value);
        let width = Number(document.getElementById("width").value);

        if (length <= 0 || width <= 0) {
            result.innerText = "Please enter valid positive values.";
            return;
        }

        area = length * width;

    } else if (selectedShape === "square") {

        let side = Number(document.getElementById("side").value);

        if (side <= 0) {
            result.innerText = "Please enter a valid positive value.";
            return;
        }

        area = side * side;

    } else if (selectedShape === "circle") {

        let radius = Number(document.getElementById("radius").value);

        if (radius <= 0) {
            result.innerText = "Please enter a valid positive value.";
            return;
        }

        area = Math.PI * radius * radius;

    } else if (selectedShape === "parallelogram") {

        let base = Number(document.getElementById("base").value);
        let height = Number(document.getElementById("height").value);

        if (base <= 0 || height <= 0) {
            result.innerText = "Please enter valid positive values.";
            return;
        }

        area = base * height;

    } else if (selectedShape === "rhombus") {

        let d1 = Number(document.getElementById("diagonal1").value);
        let d2 = Number(document.getElementById("diagonal2").value);

        if (d1 <= 0 || d2 <= 0) {
            result.innerText = "Please enter valid positive values.";
            return;
        }

        area = 0.5 * d1 * d2;

    } else if (selectedShape === "trapezium") {

        let a = Number(document.getElementById("a").value);
        let b = Number(document.getElementById("b").value);
        let height = Number(document.getElementById("height").value);

        if (a <= 0 || b <= 0 || height <= 0) {
            result.innerText = "Please enter valid positive values.";
            return;
        }

        area = 0.5 * (a + b) * height;
    }

    result.innerText = `Area = ${area.toFixed(2)} square units`;
}