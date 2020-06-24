
let walls = [];
let wall_count = 10;
let ray;
let agent, mouse;
let xoff = 20;
let yoff = 1234;

function setup() {
    createCanvas(innerWidth, innerHeight);
    for (let i = 0; i < wall_count; i++) {
        let x1 = random(width);
        let x2 = random(width);
        let y1 = random(height);
        let y2 = random(height);
        walls[i] = new Boundary(x1, y1, x2, y2);
    }
    walls.push(new Boundary(-1, -1, width, -1));
    walls.push(new Boundary(width, -1, width, height));
    walls.push(new Boundary(width, height, -1, height));
    walls.push(new Boundary(-1, height, -1, -1));
    agent = new Particle();
    mouse = new Particle();
}

function draw() {
    background(0);
    for (let [i, wall] of walls.entries()) {
        wall.show();
        if (i < walls.length - 4) {
            wall.update();
        }

    }
    //agent.update(noise(xoff * .3) * width, noise(yoff) * height);
    agent.update(mouseX, mouseY);
    agent.look(walls);
    mouse.update(noise(xoff) * width * .9, noise(yoff) * height);
    mouse.look(walls);

    xoff += 0.01;
    yoff += 0.01;
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    walls[walls.length - 1] = (new Boundary(-1, -1, windowWidth, -1));
    walls[walls.length - 2] = (new Boundary(windowWidth, -1, windowWidth, windowHeight));
    walls[walls.length - 3] = (new Boundary(windowWidth, windowHeight, -1, windowHeight));
    walls[walls.length - 4] = (new Boundary(-1, windowHeight, -1, -1));
}