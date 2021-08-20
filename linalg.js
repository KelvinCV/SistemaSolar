class LinearAlgebra{
// Transposição -> f:Amxn -> Cnxm 'Rows viram Cols e Cols viram Rows'
//                              cij = aji
    transpose(a){
        let c;

        if (a instanceof Vector){
            c = new Vector(a.rows);
            // Transforma Vetor coluna em vetor linha e vice versa 
            c.rows = a.cols;
            c.cols = a.rows;

            for(let i = 1; i <= c.dim; i++){
                c.set(i, a.get(i));
            }
        } 
        else if (a instanceof Matrix){
            c = new Matrix(a.cols, a.rows);

            for(let i = 1; i <= c.rows; i++){
                for(let j = 1; j <= c.cols; j++){
                    c.set(i, j, a.get(j, i));
                }
            }
        } 
        else {
            throw new Error("O parâmetro da função TRANSPOSE deve ser um objeto da classe Matrix ou Vector.");
        } 
        return c;
    }

// Soma
    sum(a, b){

        // Validação de classe 
        if (!(a instanceof Matrix) || !(b instanceof Matrix)){
            throw new Error(" Os parâmetros devem ser objetos da classe Vector e Matrix.");
        }
        // Validação de dimensão
        if (a.rows != b.rows || a.cols != b.cols){
            throw new Error("Os parâmetros não possuem a mesma DIMENSÃO.");
        }

        let c;
        
        if (a instanceof Vector && b instanceof Vector){
            c = new Vector (a.dim);
            c.rows = a.rows;
            c.cols = a.cols;
            // operação soma
            for (let i = 1; i <= a.dim; i++){
                c.set(i, a.get(i) + b.get(i));  
                }   
        }
        else if (a instanceof Matrix && b instanceof Matrix){
            c = new Matrix (a.rows, a.cols);
            // operação soma
            for(let i = 1; i <= a.rows; i++){
                for(let j = 1; j <= c.cols; j++){
                    c.set(i, j, a.get(i, j) + b.get(i, j));
                }   
            }
        }
        else {
            throw new Error(" Ambos os parâmetros devem ser objetos da classe Vector ou Matrix.");
        }
        return c;
    }

// Multiplicação elemento a elemento e multiplicação por um escalar
    times(a,b){

        let c;
        
         // Validações de 'a' como número;   
        if (typeof(a) == "number"){
            if (!(b instanceof Matrix)){
                throw new Error("O parâmetro b deve ser objeto da classe Vector e Matrix.");
            }
            
            if (b instanceof Vector){
                c = new Vector (b.dim);
                c.rows = b.rows;
                c.cols = b.cols;
                // Multiplicação escalar
                for(let i = 1; i <= b.dim; i++){
                    c.set(i, a * b.get(i));  
                    }   

            }
            else if (b instanceof Matrix){
                c = new Matrix (b.rows, b.cols);
                // Multiplicação escalar
                for(let i = 1; i <= b.rows; i++){
                    for(let j = 1; j <= b.cols; j++){
                        c.set(i, j, a * b.get(i, j));
                    }   
                }
            }
        }
        // Validações de 'a' não sendo número;
        else {
            if (!(a instanceof Matrix) || !(b instanceof Matrix)){
                throw new Error("Os parâmetros devem ser objetos da classe Vector e Matrix.");
            }
    
            if (a.rows != b.rows || a.cols != b.cols){
                throw new Error("Os parâmetros não possuem a mesma DIMENSÃO.");
            }
            
            if (a instanceof Vector && b instanceof Vector){
                c = new Vector (a.dim);
                c.rows = a.rows;
                c.cols = a.cols;
                // Multiplicação elemento a elemento
                for(let i = 1; i <= a.dim; i++){
                    c.set(i, a.get(i) * b.get(i));  
                    }   
            }
            else if (a instanceof Matrix && b instanceof Matrix){
                c = new Matrix (a.rows, a.cols);
                // Multiplicação elemento a elemento
                for(let i = 1; i <= a.rows; i++){
                    for(let j = 1; j <= c.cols; j++){
                        c.set(i, j, a.get(i, j) * b.get(i, j));
                    }   
                }
            }
            else {
                throw new Error("Ambos os parâmetros devem ser objetos da classe Vector ou Matrix ou um número e um objeto da classe Matrix ou Vector.");
            }
        }        
        return c;
    }

// Multiplicação de Matrizes 
    dot(a, b){

        let c

        // Validação de classe 
        if (!(a instanceof Matrix) || !(b instanceof Matrix)){
            throw new Error(" Os parâmetros devem ser objetos da classe Vector e Matrix.");
        }
        // Validação de dimensão: Critérios da multiplicação de matrizes
        if (a.cols != b.rows){
            throw new Error("Os parâmetros não atendem aos critérios da multiplicação de matrizes: A quantidades de colunas da matriz A deve ser igual a quantidade de linhas da matriz B.");
        }
        
        if (a instanceof Vector && b instanceof Vector){
            c = 0;
            for(let i = 1; i <= a.dim; i++){
                c = c + a.get(i) * b.get(i);
            }
        }
        else {
            c = new Matrix(a.rows, b.cols);

            for(let i = 1; i <= a.rows; i++){
                for(let j = 1; j <= b.cols; j++){
                    for(let k = 1; k <= a.cols; k++){
                        c.set(i, j, c.get(i, j) + a.get(i, k) * b.get(k, j));
                    }
                }
            }
        }
        return c;
    }

// Operação Gaussiana 

    // Operações Elementares com Linhas 
    // Obs: As operações não alteram o resultado de um Sistema linear

    // Solução de um Sistema de equações lineares = Ponto em comum da interseção de todas as equações, onde, 
    //se 'n' valores forem substituídos nas equações, enquanto nesse ponto, as igualdades sempre serão verdadeiras.
    
    
    // Multiplicar uma linha por um constante não nula.
    multRow(a, PivotRow, k){
        for(let j = 1; j <= a.cols; j++){
            a.set(PivotRow, j, Math.round(a.get(PivotRow, j) * k));
        }
    }
    // Trocar duas linhas entre si.
    changeRows(a, rowX, rowY){
        for(let i = 1; i <= a.cols; i++){
            let aux = a.get(rowX, i);
            a.set(rowX, i, a.get(rowY, i));
            a.set(rowY, i, aux);
        }
    }
    // Somar uma constante vezes uma linha a outra linha. Obs: É ideal, quando implementado em JavaScript, que o pivô seja o maior valor da coluna para evitar erros/truncamentos na resposta.
    multSumRows(a, PivotRow, rowY, k){

        for(let j = 1; j <= a.cols; j++){
            a.set(rowY, j, a.get(PivotRow, j) * k + a.get(rowY, j));
        }
    }

    gauss(a){
        // Validação de classe
        if (typeof a != "object" || !(a instanceof Matrix)){
            throw ("O parâmetro deve ser um objeto da classe Matrix.");
        }
        // Validação Gauss
        if (a.cols < a.rows){
            throw "A matriz possui menos colunas do que linhas!";
        }
        let resp = {
            matrix: new Matrix(a.rows, a.cols, a.elements.slice()),
            coef: 1
        }
        
        // Zera a triangular inferior
        for(let j = 1; j <= resp.matrix.rows; j++){
            for(let i = j+1; i <= resp.matrix.rows;i++){
                if(resp.matrix.get(j,j) === 0){
                    for(let k = j+1; k <= resp.matrix.rows;k++){
                        if(resp.matrix.get(k, j) !== 0){
                            this.changeRows(resp.matrix, j, k);
                            resp.coef *= -1;
                            break;
                        }
                    }
                }

                let k = -(resp.matrix.get(i, j))/resp.matrix.get(j, j);
                this.multSumRows(resp.matrix, j, i, k);
            }
        }
        return resp;
    }

    solve(a){
        // Validação de classe 
        if (typeof a != "object" || !(a instanceof Matrix)){
            throw ("O parâmetro deve ser objeto da classe Matrix.");
        }
        // Validação de matriz aumentada/estendida/
        if (a.rows != a.cols-1){
            throw ("O parâmetro deve ser uma matriz aumentada.");
        }

        // Inicia a matriz resposta e zera a triangular inferior
        let b = this.gauss(a).matrix;

        // Zera a parte acima da diagonal
        for(let j = b.cols-1; j >= 2; j--){
            for(let i = j-1; i >= 1; i--){
                let k = -(b.get(i, j))/b.get(j, j);
                this.multSumRows(b, j, i, k)
            }
        }

        // Transforma pivôs em 1
        for(let i = 1;i <= b.rows; i++){
            let k = 1/b.get(i, i);
            this.multRow(b, i, k);
        }

        // Cria um vetor e coloca a coluna dos resultados em um vetor
        let c = new Vector(b.rows);

        for(let i = 1; i <= b.rows; i++){
            c.set(i,b.get(i,b.cols));
        }

        return c
    }

    det(a){
        // Validação de classe 
        if (typeof a != "object" || !(a instanceof Matrix)){
            throw ("O parâmetro deve ser objeto da classe Matrix.");
        }
        let resp= this.gauss(a);
        let det= resp.coef;
        for(let i = 1; i <= resp.matrix.rows; i++){
            det *= resp.matrix.get(i, i);
        }
        return det;
    }

    inverse(a){
        // Validação de classe 
        if (typeof a != "object" || !(a instanceof Matrix)){
            throw ("O parâmetro deve ser objeto da classe Matrix.");
        }
        // Validação de matriz quadrada
        if (a.cols != a.rows){
            throw ("O parâmetro deve ser uma matriz quadrada, ou seja, deve possuir o mesmo número de linhas e colunas");
        }

        let c = new Matrix(a.rows, a.cols * 2);

        // Inclusão da matriz A e da matriz identidade na matriz C
        for(let i = 1; i <= a.rows; i++) {
            for (let j = 1; j <= a.cols; j++) {
                c.set(i, j, a.get(i, j));
            }
        }
        for(let i = 1; i <= a.rows; i++) {
            c.set(i, a.rows+i, 1);
        }

        // Zeramento da triangular inferior
        c = this.gauss(c).matrix;

        // Zeramento da triangular superior
        for(let j = c.rows; j >= 2; j--){
            for(let i = j-1; i>=1;i--){
                let k = -(c.get(i, j))/c.get(j, j);
                this.multSumRows(c, j, i, k)
            }
        }

        // Transformação dos pivôs em 1
        for(let i= 1; i <= c.rows; i++){
            let k = 1/c.get(i,i);
            this.multRow(c, i, k);
        }

        // Inclusão da matriz inversa na matriz resposta
        let resp = new Matrix(a.rows, a.cols);

        for(let i = 1; i <= c.rows; i++) {
            for (let j = c.rows+1, k = 1; j <= c.cols; j++, k++) {
                resp.set(i, k, c.get(i, j));
            }
        }
        return resp;
    }   
}