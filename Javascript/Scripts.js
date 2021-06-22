function leiaMais(){
    var pontos=document.getElementById("pontos");
    var maisTexto=document.getElementById("mais");
    var btnLeiaMais=document.getElementById("btnLeiaMais");

    if(pontos.style.display === "none"){
        pontos.style.display="inline";
        maisTexto.style.display="none";
        btnLeiaMais.innerHTML="Ver mais";
    }
    else{
        pontos.style.display="none";
        maisTexto.style.display="inline";
        btnLeiaMais.innerHTML="Ver menos";
    }
}

function mostra(){
    document.getElementById('ma').style.display='none';
    document.getElementById('mb').style.display='block';
}
function mostra_2(){
    document.getElementById('mb').style.display='none';
    document.getElementById('mc').style.display='block';
    document.getElementById('mca').style.display='block';
}
function mostra_3(){
    document.getElementById('mc').style.display='none';
    document.getElementById('mca').style.display='none';
    document.getElementById('ma').style.display='block';
}
function mostra_comentario(){
    var comentario=document.getElementById('comentario');
    var btn_icon=document.getElementById('btn-icon');
    var btn_icon_2=document.getElementById('btn-icon-2');

    if(comentario.style.display === 'inline'){
        comentario.style.display='none';
        btn_icon.innerHTML='1 likes';
        btn_icon_2.innerHTML='1 respostas';
    }
    else{
        comentario.style.display='inline';
        btn_icon.innerHTML='4 likes';
        btn_icon_2.innerHTML='4 respostas';
    }
}
