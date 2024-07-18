function tirarDado() {

    const numDado = document.getElementById("numeroDado").value;
    const resultadoDado = document.getElementById("dadoResultado");
    const dadoImagenes = document.getElementById("dadoImagenes");
    const values = [];

    dadoImagenes.innerHTML = ('');

    for( i = 0; i < numDado; i++){
        const value = Math.floor(Math.random()*6)+1;
        console.log(value);
        values.push(value);
        const img = document.createElement('img');
                img.src = `images/${value}.png`;
                img.alt = `Dado ${value}`;
                img.style.width = '200px';
                img.style.height = '200px';
                dadoImagenes.appendChild(img);


    }

    console.log(values);
    resultadoDado.textContent = `dado: ${values.join(',')}`;
    
}