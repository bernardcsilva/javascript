function verificar() {
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.getElementById('res')
   var img = window.getElementById('foto')
   if (fano.value.length == 0 || fano.value > ano) {
    window.alert(`[ERRO] Verifique os dados e tente novamente!`)
   } else {
     var fsex = document.getElementsByName('radsex')
     var idade = ano - Number(fano.value)
     var genero = ''
     if (fsex[0].checked) {
        genero = 'Homem'
        if (idade >= 0 && idade < 10) {
            //criança
            img.src = 'pexels-pixabay-208134.jpg'
        } else if (idade >= 10 && idade < 21) {
            //jovem
            img.src = 'pexels-colordragon-20199564.jpg'
        } else if (idade < 50) {
            //adulto
            img.src = 'pexels-serkanugurla-15924325.jpg'
        } else {
            //idoso
            img.src = 'pexels-olly-3771807.jpg'
        }
     } else if (fsex[1].checked) {
        genero = 'Mulher'
        if (idade >= 0 && idade < 10) {
            //criança
        } else if (idade >= 10 && idade < 21) {
            //jovem
        } else if (idade < 50) {
            //adulto
        } else {
            //idoso
        }
     }
     res.innerHTML = `Detectamos ${genero} com ${idade} anos. ` 
     
   }
}