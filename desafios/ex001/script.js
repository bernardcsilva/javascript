function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12) {
    // Bom dia!
    img.src = 'pexels-souvenirpixels-1486974.jpg'
    document.body.style.background = `#B4C1D9`
} else if (hora >= 12 && hora <= 18) {
    // Boa tarde
    img.src = 'pexels-andersonmartins-retratos-2386144.jpg'
    document.body.style.background = `#E75F00`
} else {
    // Boa noite
    img.src = 'pexels-pixabay-355465.jpg'
    document.body.style.background = `#0A4AA7`
}
}