//Sol, Planetas e Satélites
let sol;
let mercurio;
let venus;
let terra;
let lua;
let marte;
let jupiter;
let saturno;
let urano;
let netuno;
let plutao;

const diametroTerra = 1; // Escala o Diâmetro da Terra. Diâmetro real = 12.742 km
const distanciaTerraSol = 300; // Escala Distância até o Sol. Distância real = 149 600 000 km 
const zoom = 2; // Amplia ou diminui figura geométrica para facilitar a visualização ou deixar o tamanho mais próximo da realidade
let velocidadeRotacaoTerra = 1;
let velocidadeTranslacaoTerra = 1;

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    createEasyCam();

    sol = new Sphere(0, 0, 0, diametroTerra*109, 30,30);
    mercurio = new Sphere( distanciaTerraSol * 0.387, 0, 0, diametroTerra*0.383 * zoom, 15,15);
    venus = new Sphere(distanciaTerraSol * 0.723, 0, 0, diametroTerra*0.949 * zoom, 15,15);
    terra = new Sphere(distanciaTerraSol * 1, 0, 0, diametroTerra * zoom, 15,15);
    lua = new Sphere(distanciaTerraSol  * 0.00257 + distanciaTerraSol, 0, 0, diametroTerra*0.2724 * zoom, 15,15);
    marte = new Sphere(distanciaTerraSol * 1.52, 0, 0, diametroTerra*0.532 * zoom, 15,15);
    jupiter = new Sphere(distanciaTerraSol * 5.20, 0, 0, diametroTerra*11.21 * zoom, 15,15);
    saturno = new Sphere(distanciaTerraSol * 9.58, 0, 0, diametroTerra*9.45 * zoom, 15,15);
    urano = new Sphere(distanciaTerraSol * 19.20, 0, 0, diametroTerra*4.01 * zoom, 15,15);
    netuno = new Sphere(distanciaTerraSol * 30.05, 0, 0, diametroTerra*3.88 * zoom, 15,15);
    plutao = new Sphere(distanciaTerraSol * 39.48, 0, 0, diametroTerra*0.186 * zoom * 10, 15,15);
}

function draw() {
    background(0);
    sol.setColor("#ffff00");
    sol.draw();
    sol.rotation(360);

    mercurio.setColor("#857d77");
    mercurio.draw();
    mercurio.rotation(velocidadeRotacaoTerra / 87.97);
    mercurio.translate(0,0,-5);

    venus.setColor("#947b0d");
    venus.draw();
    venus.rotation(velocidadeRotacaoTerra / 224.7);
    venus.translate(0,0,-5);

    terra.setColor("#2592e6");
    terra.draw();
    terra.rotation(velocidadeRotacaoTerra / 365.26);
    terra.translate(0,0,-5);
    
    lua.setColor("#a8a8a8");
    lua.draw();
    lua.rotation(velocidadeRotacaoTerra / 365.26); //27.332
    lua.revolvesAround(terra, -1 / (velocidadeTranslacaoTerra * 0.0748))
    lua.translate(0,0,-5)
    
    marte.setColor("#c93636");
    marte.draw();
    marte.rotation(velocidadeRotacaoTerra / 686,2);
    marte.translate(0,0,-4)

    jupiter.setColor("#f2a563");
    jupiter.draw();
    jupiter.rotation(velocidadeRotacaoTerra / 4328.9);
    jupiter.translate(0,0,-5);

    saturno.setColor("#fae37d");
    saturno.draw();
    saturno.rotation(velocidadeRotacaoTerra / 10752.9);
    saturno.translate(0,0,-5);

    urano.setColor("#06d1c7");
    urano.draw();
    urano.rotation(velocidadeRotacaoTerra / 30663.65);
    urano.translate(0,0,-5);

    netuno.setColor("#110391");
    netuno.draw();
    netuno.rotation(velocidadeRotacaoTerra / 60148.35);
    netuno.translate(0,0,-5);

    plutao.setColor("#d4d4d4");
    plutao.draw();
    plutao.rotation(velocidadeRotacaoTerra / 90735.35);
    plutao.translate(0,0,-5);
}