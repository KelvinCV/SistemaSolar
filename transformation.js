class Transformations{
    constructor() {
        this.la = new LinearAlgebra()
    }
//Métodos de transformações lineares
    //Translação
    translate2D(vector, dx, dy){
        if(!vector instanceof Vector){
            // Validação de classe
            throw ("O parâmetro deve ser um objeto da classe Vector!");
        }
        if(vector.dim != 2){
            // Validação de dimensão
            throw ("O vetor deve ser 2D e em coordenadas HOMOGÊNEAS!");
        }
        let la = new LinearAlgebra();
        let a = new Vector(3,[vector.get(1),vector.get(2),1]);
        let b = new Matrix(3,3,[1,0,dx,0,1,dy,0,0,1]);
        b = la.dot(b,a);

        return new Vector(2,[b.get(1,1),b.get(2,1)]);
    }
    
    translate3D(vector, dx, dy, dz){
        if(!vector instanceof Vector){
            throw ("O parâmetro deve ser um objeto da classe Vector!");
        }
        if(vector.dim != 3){
            throw ("O vetor deve ser 3D e em coordenadas HOMOGÊNEAS!");
        }
        let la = new LinearAlgebra();
        let a = new Vector(4,[vector.get(1),vector.get(2),vector.get(3),1]);
        let b = new Matrix(4,4,[1,0,0,dx,0,1,0,dy,0,0,1,dz,0,0,0,1]);
        b = la.dot(b,a);

        return new Vector(3,[b.get(1,1),b.get(2,1),b.get(3,1)]);
    }

    //Rotação
    rotation2D(vector, angle){
        if(!vector instanceof Vector){
            throw ("O parâmetro deve ser um objeto da classe Vector!");
        }
        if(vector.dim != 2){
            throw ("O vetor deve ser 2D e em coordenadas HOMOGÊNEAS!");
        }
        let la = new LinearAlgebra();
        let a = new Vector(3,[vector.get(1),vector.get(2),1]);
        let b = new Matrix(3,3,[Math.cos(angle),-Math.sin(angle),0,Math.sin(angle),Math.cos(angle),0,0,0,1]);
        b = la.dot(b,a);

        return new Vector(2,[b.get(1,1),b.get(2,1)]);
    }

    rotation3DX(vector, angle){
        if(!vector instanceof Vector){
            throw ("O parâmetro deve ser um objeto da classe Vector!");
        }
        if(vector.dim != 3){
            throw ("O vetor deve ser 3D e em coordenadas HOMOGÊNEAS!");
        }
        let la = new LinearAlgebra();
        let a = new Vector(4,[vector.get(1),vector.get(2),vector.get(3),1]);
        let b = new Matrix(4,4,[1,0,0,0,0,Math.cos(angle),-Math.sin(angle),0,0,Math.sin(angle),Math.cos(angle),0,0,0,0,1]);
        b = la.dot(b,a);

        return new Vector(3,[b.get(1,1),b.get(2,1),b.get(3,1)]);
    }

    rotation3DY(vector, angle){
        if(!vector instanceof Vector){
            throw ("O parâmetro deve ser um objeto da classe Vector!");
        }
        if(vector.dim != 3){
            throw ("O vetor deve ser 3D e em coordenadas HOMOGÊNEAS!");
        }
        let la = new LinearAlgebra();
        let a = new Vector(4,[vector.get(1),vector.get(2),vector.get(3),1]);
        let b = new Matrix(4,4,[Math.cos(angle),0,Math.sin(angle),0,0,1,0,0,-Math.sin(angle),0,Math.cos(angle),0,0,0,0,1]);
        b = la.dot(b,a);

        return new Vector(3,[b.get(1,1),b.get(2,1), b.get(3,1)]);
    }

    rotation3DZ(vector, angle){
        if(!vector instanceof Vector){
            throw ("O parâmetro deve ser um objeto da classe Vector!");
        }
        if(vector.dim != 3){
            throw ("O vetor deve ser 3D e em coordenadas HOMOGÊNEAS!");
        }
        let la = new LinearAlgebra();       
        let a = new Vector(4,[vector.get(1),vector.get(2),vector.get(3),0]);
        let b = new Matrix(4,4,[Math.cos(angle),-Math.sin(angle),0,0,Math.sin(angle),Math.cos(angle),0,0,0,0,1,0,0,0,0,1]); 
        b = la.dot(b,a);

        return new Vector(3,[b.get(1,1),b.get(2,1),b.get(3,1)]);
    }

    //Reflexão
    reflection2DX(vector){
        if(!vector instanceof Vector){
            throw ("O parâmetro deve ser um objeto da classe Vector!");
        }
        if(vector.dim != 2){
            throw ("O vetor deve ser 2D e em coordenadas HOMOGÊNEAS!");
        }
        let la = new LinearAlgebra();
        let a = new Vector(3,[vector.get(1),vector.get(2),1]);
        let b = new Matrix(3,3,[1,0,0,0,-1,0,0,0,1]);
        b= la.dot(b,a);

        return new Vector(2,[b.get(1,1),b.get(2,1)]);
    }

    reflection2DY(vector) {
        if(!vector instanceof Vector){
            throw ("O parâmetro deve ser um objeto da classe Vector!");
        }
        if(vector.dim != 2){
            throw ("O vetor deve ser 2D e em coordenadas HOMOGÊNEAS!");
        }
        let la = new LinearAlgebra();
        let a = new Vector(3,[vector.get(1),vector.get(2),1])
        let b = new Matrix(3, 3,[-1, 0, 0, 0, 1, 0, 0, 0, 1]);
        b = la.dot(b, a);

        return new Vector(2,[b.get(1,1),b.get(2,1)]);
    }

    reflection3DX(vector){
        if(!vector instanceof Vector){
            throw ("O parâmetro deve ser um objeto da classe Vector!");
        }
        if(vector.dim != 3){
            throw ("O vetor deve ser 3D e em coordenadas HOMOGÊNEAS!");
        }
        let la = new LinearAlgebra();
        let a = new Vector(4,[vector.get(1),vector.get(2),vector.get(3),1]);
        let b = new Matrix(4,4,[1,0,0,0,0,-1,0,0,0,0,1,0,0,0,0,1]);
        b = la.dot(b,a);

        return new Vector(3,[b.get(1,1),b.get(2,1),b.get(3,1)]);
    }

    reflection3DY(vector) {
        if (!vector instanceof Vector) {
            throw ("O parâmetro deve ser um objeto da classe Vector!");
        }
        if (vector.dim != 3) {
            throw ("O vetor deve ser 3D e em coordenadas HOMOGÊNEAS!");
        }
        let la = new LinearAlgebra();
        let a = new Vector(4,[vector.get(1), vector.get(2), vector.get(3), 1]);
        let b = new Matrix(4,4,[-1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);
        b = la.dot(b, a);

        return new Vector(3, [b.get(1, 1),b.get(2, 1),b.get(3, 1)]);
    }

    reflection3DZ(vector) {
        if (!vector instanceof Vector) {
            throw ("O parâmetro deve ser um objeto da classe Vector!");
        }
        if (vector.dim != 3) {
            throw ("O vetor deve ser 3D e em coordenadas HOMOGÊNEAS!");
        }
        let la = new LinearAlgebra();
        let a = new Vector(4,[vector.get(1), vector.get(2), vector.get(3), 1]);
        let b = new Matrix(4,4,[1,0,0,0,0,1,0,0,0,0,-1,0,0,0,0,1]);
        b = la.dot(b, a);

        return new Vector(3, [b.get(1, 1),b.get(2, 1),b.get(3, 1)]);
    }

    //Projeção
    projection2DX(vector){
        if(!vector instanceof Vector){
            throw ("O parâmetro deve ser um objeto da classe Vector!");
        }
        if(vector.dim != 2){
            throw ("O vetor deve ser 2D e em coordenadas HOMOGÊNEAS!");
        }
        let la = new LinearAlgebra();
        let a = new Vector(3,[vector.get(1),vector.get(2),1])
        let b = new Matrix(3,3,[1,0,0,0,0,0,0,0,1] );
        b = la.dot(b, a);

        return new Vector(2,[b.get(1,1),b.get(2,1)]);
    }

    projection2DY(vector){
        if(!vector instanceof Vector){
            throw ("O parâmetro deve ser um objeto da classe Vector!");
        }
        if(vector.dim != 2){
            throw ("O vetor deve ser 2D e em coordenadas HOMOGÊNEAS!");
        }
        let la = new LinearAlgebra();
        let a = new Vector(3,[vector.get(1),vector.get(2),1])
        let b = new Matrix(3,3,[0,0,0,0,1,0,0,0,1] );
        b = la.dot(b, a);

        return new Vector(2,[b.get(1,1),b.get(2,1)]);
    }

    projection3DX(vector){
        if(!vector instanceof Vector){
            throw ("O parâmetro deve ser um objeto da classe Vector!");
        }
        if(vector.dim != 3){
            throw ("O vetor deve ser 3D e em coordenadas HOMOGÊNEAS!");
        }
        let la = new LinearAlgebra();
        let a = new Vector(4,[vector.get(1),vector.get(2),vector.get(3),1]);
        let b = new Matrix(4,4,[1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1]);
        b = la.dot(b,a);

        return new Vector(3,[b.get(1,1),b.get(2,1), b.get(3,1)]);
    }

    projection3DY(vector){
        if(!vector instanceof Vector){
            throw ("O parâmetro deve ser um objeto da classe Vector!");
        }
        if(vector.dim != 3){
            throw ("O vetor deve ser 3D e em coordenadas HOMOGÊNEAS!");
        }
        let la = new LinearAlgebra();
        let a = new Vector(4,[vector.get(1),vector.get(2),vector.get(3),1]);
        let b = new Matrix(4,4,[1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1]);
        b = la.dot(b,a);

        return new Vector(3,[b.get(1,1),b.get(2,1),b.get(3,1)]);
    }
    
    projection3DZ(vector){
        if(!vector instanceof Vector){
            throw ("O parâmetro deve ser um objeto da classe Vector!");
        }
        if(vector.dim != 3){
            throw ("O vetor deve ser 3D e em coordenadas HOMOGÊNEAS!");
        }
        let la = new LinearAlgebra();
        let a = new Vector(4,[vector.get(1),vector.get(2),vector.get(3),1]);
        let b = new Matrix(4,4,[0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);
        b = la.dot(b,a);

        return new Vector(3,[b.get(1,1),b.get(2,1),b.get(3,1)]);
    }

    //Cisalhamento / Shearing
    shearing(vector, kx, ky){
        if(!vector instanceof Vector){
            throw ("O parâmetro deve ser um objeto da classe Vector!");
        }
        if(vector.dim != 2){
            throw ("O vetor deve ser 2D e em coordenadas HOMOGÊNEAS!");
        }
        let la = new LinearAlgebra();
        let a = new Vector(3,[vector.get(1),vector.get(2),1]);
        let b = new Matrix(3,3,[1,kx,0,ky,1,0,0,0,1]);
        b = la.dot(b,a);
        
        return new Vector(2,[b.get(1,1),b.get(2,1)]);
    }
}