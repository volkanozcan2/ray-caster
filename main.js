
//   ,--.  ,--.         ,--.                                                        ,--.                 
// ,-'  '-.|  |,--.--.,-'  '-.    ,--.--. ,--,--.,--. ,--.     ,---. ,--,--. ,---.,-'  '-. ,---. ,--.--. 
// '-.  .-'|  ||  .--''-.  .-'    |  .--'' ,-.  | \  '  /     | .--'' ,-.  |(  .-''-.  .-'| .-. :|  .--' 
//   |  |  |  ||  |     |  |      |  |   \ '-'  |  \   '      \ `--.\ '-'  |.-'  `) |  |  \   --.|  |    
//   `--'  `--'`--'     `--'      `--'    `--`--'.-'  /        `---' `--`--'`----'  `--'   `----'`--'    
//                                               `---'                                                   

let walls = []
function setup() {
    createCanvas(innerWidth, innerHeight);
    for (let i = 0; i < 1; i++) {
        let p1 = createVector(random(width), random(height));
        let p2 = createVector(random(width), random(height));
        walls.push({
            p1, p2, c: "#" + ((1 << 24) * Math.random() | 0).toString(16)
        })
    }
}

function draw() {
    background("black")
    let p = new Particle()
    for (let i = 0; i < walls.length; i++) {
        const { p1, p2, c } = walls[i];
        push()
        stroke("white")
        strokeWeight(5)
        line(p1.x, p1.y, p2.x, p2.y)
        p.draw(p1, p2);
        pop()
    }
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}