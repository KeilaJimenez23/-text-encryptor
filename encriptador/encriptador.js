
function encriptar() {
    const shift = 3; 
    let texto = document.getElementById('texto').value;
    let encriptado = texto.split('').map(char => {
        if (char.match(/[a-z]/)) {
            const code = char.charCodeAt(0);
            let base = 97; 
            return String.fromCharCode(((code - base + shift) % 26) + base);
        }
        return char;
    }).join('');

    document.getElementById('mensaje').value = encriptado;
    document.getElementById('titulo-mensaje').innerText = 'Mensaje Encriptado';
    document.getElementById('Parrafo a').innerText = '';
}


function desencriptar() {
    const shift = 3; 
    let texto = document.getElementById('mensaje').value; 
    let desencriptado = texto.split('').map(char => {
        if (char.match(/[a-z]/)) {
            const code = char.charCodeAt(0);
            let base = 97; 
            return String.fromCharCode(((code - base - shift + 26) % 26) + base);
        }
        return char;
    }).join('');

    document.getElementById('mensaje').value = desencriptado;
    document.getElementById('titulo-mensaje').innerText = 'Mensaje Desencriptado';
    document.getElementById('Parrafo a').innerText = '';
}
