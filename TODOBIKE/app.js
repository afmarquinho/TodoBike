const btnFooter=document.querySelector('.btnFooter');
const footer = document.querySelector('.footer')
btnFooter.addEventListener('click',mostarOcultarFooter);

function mostarOcultarFooter(e){
    e.preventDefault;

    if(footer.classList.contains('activo')){
        footer.classList.remove('activo');
        btnFooter.classList.remove('activo');
        btnFooter.textContent= '+ MÁS';
            
    

    } else{
        footer.classList.add('activo');
        btnFooter.classList.add('activo');
        btnFooter.textContent='X CERRAR';


    }
}