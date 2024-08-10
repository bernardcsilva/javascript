function verificar() {
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.getElementById('res')
   
   if (fano.value.length == 0 || fano.value > ano) {
    window.alert(`[ERRO] Verifique os dados e tente novamente!`)
   } else {
     var fsex = document.getElementsByName('radsex')
     var idade = ano - Number(fano.value)
     var genero = ''
     var img = document.createElement('img')
     img.setAttribute('id', 'foto')
     if (fsex[0].checked) {
        genero = 'Homem'
        if (idade >= 0 && idade < 10) {
            //criança
            img.setAttribute('src', 'pexels-pixabay-20813.jpg')
        } else if (idade >= 10 && idade < 21) {
            //jovem
            img.setAttribute('src', 'pexels-colordragon-20199564.jpg')
        } else if (idade < 50) {
            //adulto
            img.setAttribute('src', 'pexels-serkanugurla-15924325.jpg')
        } else {
            //idoso
            img.setAttribute('src', 'pexels-olly-3771807.jpg')
        }
     } else if (fsex[1].checked) {
        genero = 'Mulher'
        if (idade >= 0 && idade < 10) {
            //criança
            img.setAttribute('src', 'pexels-cotton-3662874.jpg')
        } else if (idade >= 10 && idade < 21) {
            //jovem
            img.setAttribute('src', 'pexels-kobby-katalist-1112446271-23710184.jpg')
        } else if (idade < 50) {
            //adulto
            img.setAttribute('src', 'pexels-vinicius-wiesehofer-289347-1130626.jpg')
        } else {
            //idoso
            img.setAttribute('src', 'pexels-rethaferguson-3867130.jpg')
        }
     }
     res.style.textAlign = 'center'    
     res.innerHTML = `Detectamos ${genero} com ${idade} anos.` 
     res.appendChild(img)
   }
    
}