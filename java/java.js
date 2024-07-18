function tirarDado() {

    const numDado = document.getElementById("numeroDado").value;
    const resultadoDado = document.getElementById("numeroDado");
    const dadoImagenes = document.getElementById("dadoImagenes");
    const values = [];
    const images = [];

    for(let i = 0; i < numDado; i++){
        const value = Math.floor(Math.random()*6)+1;
        values.push(value);
    }

}