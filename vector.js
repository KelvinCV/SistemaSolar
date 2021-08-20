class Vector extends Matrix{
    // Vetor coluna: cols= 1. obs: Todo vetor é uma matriz, mas nem toda matriz é um vetor.
    constructor (dim, elements){//dim equivale a rows
        super(dim, 1, elements);
        this.dim = dim;
    }

    get (i){
        if (this.rows >= this.cols){
            return super.get(i, 1);
        } 
        else {
            return super.get(1, i);
        }     
    }

    set (i, value){
        if (this.rows >= this.cols){
            super.set(i, 1, value);
        } 
        else {
            super.set(1, i, value);
        }
    }
}
