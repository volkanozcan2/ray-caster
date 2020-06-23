class Particle {
    constructor(x, y) {
        this.pos = createVector(x, y);
    }
    draw(p1, p2) {
        for (let i = 0; i < 360; i += 0.2) {
            this.v = p5.Vector.fromAngle(radians(i))
            this.v.mult(2000);
            let hit = collideLineLine(p1.x, p1.y, p2.x, p2.y, mouseX, mouseY, mouseX + this.v.x, mouseY + this.v.y);
            if (hit) {
                line(mouseX, mouseY, mouseX + this.v.x, mouseY + this.v.y)
            }

        }
    }
}