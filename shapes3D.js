class Plane{
    constructor(x, y, z, w, h, l) {
        this.points = [];

        this.points.push(new Vector(3, [x, y, z]));
        this.points.push(new Vector(3, [x + w, y, z]));
        this.points.push(new Vector(3, [x + w, y + h, z + l]));
        this.points.push(new Vector(3, [x, y + h, z + l]));
        this.color = "#000000";
        this.t = new Transformations();

    }
    setColor(newColor) {
        this.color = newColor
    }

    translate(dx, dy, dz) {
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.t.translate3D(this.points[i], dx, dy, dz);
        }
    }

    rotationX(angle) {
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.t.rotation3DX(this.points[i], angle);
        }
    }

    rotationY(angle) {
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.t.rotation3DY(this.points[i], angle);
        }
    }

    rotationZ(angle) {
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.t.rotation3DZ(this.points[i], angle);
        }
    }

    draw(){
        fill(this.color);
        beginShape(TRIANGLES);

        vertex(this.points[0].get(1), this.points[0].get(2), this.points[0].get(3));
        vertex(this.points[1].get(1), this.points[1].get(2), this.points[1].get(3));
        vertex(this.points[3].get(1), this.points[3].get(2), this.points[3].get(3));

        vertex(this.points[1].get(1), this.points[1].get(2), this.points[1].get(3));
        vertex(this.points[2].get(1), this.points[2].get(2), this.points[2].get(3));
        vertex(this.points[3].get(1), this.points[3].get(2), this.points[3].get(3));

        endShape(CLOSE);
    }
}

class Parallelogram{
    constructor(x, y, z, w, h, l) {
        this.points = [];

        this.points.push(new Vector(3, [x, y, z]));
        this.points.push(new Vector(3, [x + w, y, z]));
        this.points.push(new Vector(3, [x + w, y + h, z]));
        this.points.push(new Vector(3, [x, y + h, z]));

        this.points.push(new Vector(3, [x, y, z - l]));
        this.points.push(new Vector(3, [x + w, y, z - l]));
        this.points.push(new Vector(3, [x + w, y + h, z - l]));
        this.points.push(new Vector(3, [x, y + h, z - l]))
        this.color = "#000000";
        this.t = new Transformations();

        this.faces = [];
        this.faces.push([0,1,3,1,2,3]);
        this.faces.push([4,5,7,5,6,7]);
        this.faces.push([0,3,7,0,4,7]);
        this.faces.push([1,2,6,1,5,6]);
        this.faces.push([0,1,4,1,4,5]);
        this.faces.push([3,2,7,2,7,6]);

    }

    setColor(newColor) {
        this.color = newColor
    }

    translate(dx, dy, dz) {
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.t.translate3D(this.points[i], dx, dy, dz);
        }
    }

    rotationX(angle) {
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.t.rotation3DX(this.points[i], angle);
        }
    }

    rotationY(angle) {
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.t.rotation3DY(this.points[i], angle);
        }
    }

    rotationZ(angle) {
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.t.rotation3DZ(this.points[i], angle);
        }
    }

    draw(){
        fill(this.color);
        beginShape(TRIANGLES);

        for(let i = 0; i < this.faces.length; i++){
            for(let j = 0; j < this.faces[i].length; j++){
                let idx = this.faces[i][j];
                vertex(this.points[idx].get(1), this.points[idx].get(2), this.points[idx].get(3));
            }
        }

        endShape(CLOSE);
    }
}

class Sphere{
    constructor(x, y, z, r, st, se) {
        let sectorStep = 2 * Math.PI / st;
        let stackStep = Math.PI / se;
        this.points = [];
        this.st = st;
        this.se = se;
        this.center = new Vector(3,[x, y, z])
        this.t = new Transformations();
        // Localiza  todos os pontos 
        for(let i = 0; i <= st; i++){
            let stackA = Math.PI / 2 - i * stackStep;

            for(let j = 0; j <= se; ++j) {

                let sectorA = j * sectorStep;
                this.points.push(new Vector(3,[(r * Math.cos(stackA))*Math.cos(sectorA), (r * Math.cos(stackA))*Math.sin(sectorA), r * Math.sin(stackA)]));

            }
        }
        // Rotaciona a esfera em 90º
        for(let i = 0; i<this.points.length;i++){
            this.points[i] = this.t.rotation3DX(this.points[i], Math.PI/2);
        }
        // Translação dos pontos para a posições: x,y e z 
        for(let i = 0; i<this.points.length;i++){
            this.points[i] = this.t.translate3D(this.points[i], this.center.get(1), this.center.get(2), this.center.get(3));
        }
        this.color = "#000000";

    }

    setColor(newColor) {
        this.color = newColor
    }

    translate(dx, dy, dz) {
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.t.translate3D(this.points[i], dx, dy, dz);
        }
    }

    // Rotaciona a esfera em seu próprio eixo
    rotation(angle){
        this.translate(-this.center.get(1), -this.center.get(2), -this.center.get(3));
        this.rotationY(angle);
        this.translate(this.center.get(1), this.center.get(2), this.center.get(3));
    }

    rotationX(angle) {
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.t.rotation3DX(this.points[i], angle);
        }
    }

    rotationY(angle) {
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.t.rotation3DY(this.points[i], angle);
        }
    }

    rotationZ(angle) {
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.t.rotation3DZ(this.points[i], angle);
        }
    }

    // Giro em torno de outro corpo celeste
    revolvesAround(sphere, angle) {
        let aux0 = this.points[0]
        let aux1 = sphere.points[0]

        this.translate((aux0.get(1) - aux1.get(1)) - aux0.get(1), (aux0.get(2) - aux1.get(2)) - aux0.get(2), (aux0.get(3) - aux1.get(3)) - aux0.get(3))
        this.rotationZ(angle)
        this.translate(aux1.get(1), aux1.get(2), aux1.get(3))
    }

    draw(){
        strokeWeight(0);
        stroke(this.color);
        fill(this.color);
        beginShape(TRIANGLES);
        let k1,k2
        for(let i = 0; i < this.st; ++i)
        {
            k1 = i * (this.se + 1);
            k2 = k1 + this.se + 1;

            for(let j = 0; j < this.se; ++j, ++k1, ++k2)
            {

                if(i != 0)
                {
                    vertex(this.points[k1].get(1), this.points[k1].get(2), this.points[k1].get(3));
                    vertex(this.points[k2].get(1), this.points[k2].get(2), this.points[k2].get(3));
                    vertex(this.points[k1+1].get(1), this.points[k1+1].get(2), this.points[k1+1].get(3));
                }

                if(i != (this.st-1))
                {
                    vertex(this.points[k1 + 1].get(1), this.points[k1 + 1].get(2), this.points[k1 + 1].get(3));
                    vertex(this.points[k2].get(1), this.points[k2].get(2), this.points[k2].get(3));
                    vertex(this.points[k2+1].get(1), this.points[k2+1].get(2), this.points[k2+1].get(3));
                }
            }
        }
        endShape(CLOSE);
    }
}

class Pyramid{
    constructor(x, y, z, w, h, hp) {
        this.points = [];

        this.points.push(new Vector(3, [x, y, z]));
        this.points.push(new Vector(3, [x + w, y, z]));
        this.points.push(new Vector(3, [x + w, y + h, z]));
        this.points.push(new Vector(3, [x, y + h, z]));
        this.points.push(new Vector(3, [w/2+x, h/2 + y, z+hp]))
        this.color = "#000000";
        this.t = new Transformations();

    }

    setColor(newColor) {
        this.color = newColor
    }

    translate(dx, dy, dz) {
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.t.translate3D(this.points[i], dx, dy, dz);
        }
    }

    rotationX(angle) {
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.t.rotation3DX(this.points[i], angle);
        }
    }

    rotationY(angle) {
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.t.rotation3DY(this.points[i], angle);
        }
    }

    rotationZ(angle) {
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.t.rotation3DZ(this.points[i], angle);
        }
    }

    draw(){
        fill(this.color);
        beginShape(TRIANGLES);
        // Base
        vertex(this.points[0].get(1), this.points[0].get(2), this.points[0].get(3));
        vertex(this.points[1].get(1), this.points[1].get(2), this.points[1].get(3));
        vertex(this.points[3].get(1), this.points[3].get(2), this.points[3].get(3));

        vertex(this.points[1].get(1), this.points[1].get(2), this.points[1].get(3));
        vertex(this.points[2].get(1), this.points[2].get(2), this.points[2].get(3));
        vertex(this.points[3].get(1), this.points[3].get(2), this.points[3].get(3));
        // Triângulos
        vertex(this.points[0].get(1), this.points[0].get(2), this.points[0].get(3));
        vertex(this.points[1].get(1), this.points[1].get(2), this.points[1].get(3));
        vertex(this.points[4].get(1), this.points[4].get(2), this.points[4].get(3));

        vertex(this.points[1].get(1), this.points[1].get(2), this.points[1].get(3));
        vertex(this.points[2].get(1), this.points[2].get(2), this.points[2].get(3));
        vertex(this.points[4].get(1), this.points[4].get(2), this.points[4].get(3));

        vertex(this.points[2].get(1), this.points[2].get(2), this.points[2].get(3));
        vertex(this.points[3].get(1), this.points[3].get(2), this.points[3].get(3));
        vertex(this.points[4].get(1), this.points[4].get(2), this.points[4].get(3));

        vertex(this.points[3].get(1), this.points[3].get(2), this.points[3].get(3));
        vertex(this.points[0].get(1), this.points[0].get(2), this.points[0].get(3));
        vertex(this.points[4].get(1), this.points[4].get(2), this.points[4].get(3));
        endShape(CLOSE);
    }
}