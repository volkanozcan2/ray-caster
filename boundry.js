class Boundary {
    constructor(x1, y1, x2, y2) {
        this.a = createVector(x1, y1);
        this.b = createVector(x2, y2);
        this.target = { t1: createVector(random(width), random(height)), t2: createVector(random(width), random(height)) }
    }

    show() {
        stroke(255);
        line(this.a.x, this.a.y, this.b.x, this.b.y);
    }
    update() {
        this.a.lerp(this.target.t1, 0.01);
        this.b.lerp(this.target.t2, 0.01);
        if (this.b.dist(this.target.t2) < 11) {
            this.target = { t1: createVector(random(width), random(height)), t2: createVector(random(width), random(height)) }
        }
    }
}
