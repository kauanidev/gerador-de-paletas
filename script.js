function criarCor() {
    // return Math.floor(Math.random()*16777215).toString(16);
    let R = Math.floor((Math.random() * 127) + 127);
    let G = Math.floor((Math.random() * 127) + 127);
    let B = Math.floor((Math.random() * 127) + 127);
    
    let rgb = (R << 16) + (G << 8) + B;
    return `#${rgb.toString(16)}`;
}

function gerarCor() {
    const sectionCor1 = document.getElementById("color1");
    const sectionCor2 = document.getElementById("color2");
    const sectionCor3 = document.getElementById("color3");
    const sectionCor4 = document.getElementById("color4");
    const sectionCor5 = document.getElementById("color5");
    const sectionCor6 = document.getElementById("color6");

    const cor1 = criarCor();
    const cor2 = criarCor();
    const cor3 = criarCor();
    const cor4 = criarCor();
    const cor5 = criarCor();
    const cor6 = criarCor();

    sectionCor1.style.background = cor1;
    sectionCor2.style.background = cor2;
    sectionCor3.style.background = cor3;
    sectionCor4.style.background = cor4;
    sectionCor5.style.background = cor5;
    sectionCor6.style.background = cor6;
    
    sectionCor1.children[0].innerHTML = cor1;
    sectionCor2.children[0].innerHTML = cor2;
    sectionCor3.children[0].innerHTML = cor3;
    sectionCor4.children[0].innerHTML = cor4;
    sectionCor5.children[0].innerHTML = cor5;
    sectionCor6.children[0].innerHTML = cor6;
}

window.onload = function(e){ 
    gerarCor() 
}