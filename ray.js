class Ray {
    constructor(a, l) {
        this.pos = p5.Vector.fromAngle(radians(a));
        this.pos.mult(l);
        this.color = "white"

    }
    draw(o) {
        let hit = collideLineLine(200, 200, 400, 200, mouseX + this.pos.x, mouseY + this.pos.y, mouseX, mouseY);

        // Use vectors as input.
        // let p1     = createVector(200, 300);
        // let p2     = createVector(100, 150);
        // let mouse  = createVector(mouseX, mouseY);
        // let p4     = createVector(350, 50);
        // hit = collideLineLineVector(p1, p2, mouse, p4);

        stroke((hit) ? color("red") : 0);
        if (hit) {

            line(mouseX + this.pos.x, mouseY + this.pos.y, mouseX, mouseY);
        }
    }
}