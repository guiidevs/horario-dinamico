setInterval(() => {
    var h_horas = new Date().getHours() < 10 ? '0' + new Date().getHours() : new Date().getHours();
    var h_minuto = new Date().getMinutes() < 10 ? '0'+ new Date().getMinutes() : new Date().getMinutes() ;
    var h_segundos = new Date().getSeconds() < 10 ? '0'+ new Date().getSeconds() : new Date().getSeconds() ;
    
    var saud = document.getElementById('saud');

    var horas = document.getElementById('horario');
    var img = document.getElementById('imagem');
    
    var saudacoes = '';
    
    if(h_horas >= 12 && h_horas <= 17){
        saudacoes = 'Boa tarde';
    }else if(h_horas >= 18 && h_horas <= 23){
        saudacoes = 'Boa noite';
    }else if(h_horas >= 0 && h_horas <= 5){
        saudacoes = 'Boa madrugada';
    }else{
        saudacoes = 'Bom dia';
    }
    
    saud.innerText = saudacoes; 
    horas.innerHTML = ' ' + h_horas + ':' + h_minuto + '<span style="font-size: 2rem;">.' + h_segundos + 's</span>';
    
    if(12 >= h_horas && 13 < h_horas){
        img.src = "imagens/meio.png";
        document.body.style.background = '#09181B';
        document.body.style.color = 'white';
    }else if(h_horas >= 13 && h_horas < 17){
        img.src = "imagens/tarde.png";
        document.body.style.background = '#b4a193';
    }else if(h_horas >= 17 && h_horas < 18){
        img.src = "imagens/por-do-sol.png";
        document.body.style.background = '#eba743';
    }else if(h_horas >= 18 && h_horas <= 23){
        img.src = "imagens/noite.png";
        document.body.style.background = '#09181B';
        document.body.style.color = 'white';
    }else if(h_horas >= 0 && h_horas < 5){
        img.src = "imagens/madrugada.png";
        document.body.style.background = '#151b26';
        document.body.style.color = 'white';
    }else if(h_horas >= 5 && h_horas < 6){
        img.src = "imagens/amanhecer.png";
        document.body.style.background = '#966C4C';
        document.body.style.color = 'white';
    }else if(h_horas >= 6 && h_horas < 12){
        img.src = "imagens/manha.png";
        document.body.style.background = '#684D3F';
        document.body.style.color = 'white';
    }
    
}, 1);




