class Line{
    constructor(x1, y1, x2, y2) {
        this.points = [];

        this.points.push(new Vector(2, [x1, y1]));
        this.points.push(new Vector(2, [x2, y2]));

        this.color = "#000000";
        this.t = new Transformations();
    }

    setColor(newColor){
        this.color = newColor
    }

    translate(dx, dy){
        for(let i = 0; i<this.points.length; i++){
            this.points[i] = this.t.translate2D(this.points[i], dx, dy);
        }
    }

    rotation(angle){
        for(let i = 0; i<this.points.length; i++){
            this.points[i] = this.t.rotation2D(this.points[i], angle);
        }
    }

    draw(){
        stroke(this.color);
        beginShape(LINES);

        vertex(this.points[0].get(1), this.points[0].get(2));
        vertex(this.points[1].get(1), this.points[1].get(2));

        endShape(CLOSE);
    }
}

class Rectangle{
    constructor(x, y, w, h) {
        this.points = [];

        this.points.push(new Vector(2, [x, y]));
        this.points.push(new Vector(2, [x + w, y]));
        this.points.push(new Vector(2, [x + w, y + h]));
        this.points.push(new Vector(2, [x, y + h]));
        this.color = "#000000";
        this.t = new Transformations();

    }

    setColor(newColor){
        this.color = newColor
    }

    translate(dx, dy){
        for(let i = 0; i<this.points.length; i++){
            this.points[i] = this.t.translate2D(this.points[i], dx, dy);
        }
    }

    rotation(angle){
        for(let i = 0; i<this.points.length; i++){
            this.points[i] = this.t.rotation2D(this.points[i], angle);
        }
    }

    draw(){
        strokeWeight(0);
        stroke(this.color);
        fill(this.color);
        beginShape(TRIANGLES);

        vertex(this.points[0].get(1), this.points[0].get(2));
        vertex(this.points[1].get(1), this.points[1].get(2));
        vertex(this.points[3].get(1), this.points[3].get(2));

        vertex(this.points[1].get(1), this.points[1].get(2));
        vertex(this.points[2].get(1), this.points[2].get(2));
        vertex(this.points[3].get(1), this.points[3].get(2));

        endShape(CLOSE);
    }
}

class Circle{
    constructor(x, y, r, t) {   // Quantidade de triângulos(t) deve ser maior ou igual a 3
        this.t = new Transformations();
        this.angle = (2*Math.PI)/t;  // Cálculo do ângulo com base na quanditade de triângulos
        this.points = [];
        this.points.push(new Vector(2, [x, y]));
        // Inicialização do vetor
        for(let i = 0; i<t;i++){
            this.points.push(new Vector(2, [r, 0]));
        }
        // Descobrindo os pontos
        for(let i = 2; i<this.points.length;i++){
            this.points[i] = this.t.rotation2D(this.points[i-1], this.angle);
        }
        // Translação dos pontos
        for(let i = 1; i<this.points.length;i++){
            this.points[i] = this.t.translate2D(this.points[i], x, y);
        }
        this.color = "#000000";
    }

    setColor(newColor){
        this.color = newColor
    }

    translate(dx, dy){
        for(let i = 0; i<this.points.length; i++){
            this.points[i] = this.t.translate2D(this.points[i], dx, dy);
        }
    }

    rotation(angle){
        for(let i = 0; i<this.points.length; i++){
            this.points[i] = this.t.rotation2D(this.points[i], angle);
        }
    }

    draw(){
        stroke(this.color);
        fill(this.color);
        beginShape(TRIANGLES);
        for(let i = 2; i<this.points.length; i++){
            vertex(this.points[0].get(1), this.points[0].get(2));
            vertex(this.points[i-1].get(1), this.points[i-1].get(2));
            vertex(this.points[i].get(1), this.points[i].get(2));
        }
        vertex(this.points[0].get(1), this.points[0].get(2));
        vertex(this.points[this.points.length-1].get(1), this.points[this.points.length-1].get(2));
        vertex(this.points[1].get(1), this.points[1].get(2));

        endShape(CLOSE);
    }
}

class Triangle{
    constructor(x1, y1, x2, y2, x3, y3) {
        this.points = [];

        this.points.push(new Vector(2, [x1, y1]));
        this.points.push(new Vector(2, [x2, y2]));
        this.points.push(new Vector(2, [x3, y3]));
        this.color = "#000000";
        this.t = new Transformations();

    }

    setColor(newColor){
        this.color = newColor
    }

    translate(dx, dy){
        for(let i = 0; i<this.points.length; i++){
            this.points[i] = this.t.translate2D(this.points[i], dx, dy);
        }
    }

    rotation(angle){
        for(let i = 0; i<this.points.length; i++){
            this.points[i] = this.t.rotation2D(this.points[i], angle);
        }
    }

    draw(){
        strokeWeight(0);
        stroke(this.color);
        fill(this.color);
        beginShape(TRIANGLES);

        vertex(this.points[0].get(1), this.points[0].get(2));
        vertex(this.points[1].get(1), this.points[1].get(2));
        vertex(this.points[2].get(1), this.points[2].get(2));

        endShape(CLOSE);
    }
}