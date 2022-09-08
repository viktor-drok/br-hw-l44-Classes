class Circle {
    static type = 'circle';

    constructor (options) {
        this.radius = options.radius;
    }

    get circleRadius() {
        console.log(this.radius);
    }

    get circleDiameter() {
        console.log(this.radius * 2);
    }

    set circleRadius(newRadius) {
        this.radius = newRadius;
    }

    circleArea() {
        return (Math.PI * (this.radius ** 2)).toFixed(2);
    }

    circuit() {
        return (2 * Math.PI * this.radius).toFixed(2);
    }

}

const circle = new Circle({
    radius: '20'
});