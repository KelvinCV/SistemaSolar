class Matrix {

    constructor (rows, cols, elements){
        // Tratamento de erros para a matriz
        // Validações de linhas e colunas;
        if (rows == undefined || cols == undefined){
            throw new Error("A quantidade de LINHAS e COLUNAS deve ser definida")
        }
        if (rows < 0){
            throw new Error ("A quantidade de LINHAS deve ser maior ou igual a zero.");
        }
        if (cols < 0){
            throw new Error ("A quantidade de COLUNAS deve ser maior ou igual a zero.");
        }

        this.rows = rows;
        this.cols = cols;

        let size = rows * cols;
        // Validações de elementos;
        if (elements == undefined){
            this.elements = [];
            while (this.elements.length != size) {
                this.elements.push(0)
            }
        }
        else {
            if (elements.length != size){
                throw new Error ("A quantidade de ELEMENTOS é incompatível com a dimensão da matriz.");
        }
            this.elements = elements;
        }
            
    }

    get (i, j){
        this.#validateElementIndex(i, j);
        return this.elements[this.#getIndex(i, j)];
    }
    set (i, j, value){
        this.#validateElementIndex(i, j);
        this.elements[this.#getIndex(i, j)] = value;
    }
    #getIndex(i, j){
        return (j-1) + (i-1) * this.cols;
    }
    // Função para validar os elementos do índice;
    #validateElementIndex(i, j){
        if (i <= 0 || i > this.rows){
            throw new Error (`O índice i de estar entre 1 e ${this.rows}` );
        }
        if (j <= 0 || j > this.cols){
            throw new Error (`O índice j de estar entre 1 e ${this.cols}` );
        }
    }
}