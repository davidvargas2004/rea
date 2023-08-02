









const formulario = document.getElementById("formulario");
const buttonSubmit = document.querySelector('#submit');
const userName = document.querySelector(".userName");
const userProducto = document.querySelector(".userProducto");
const userCity = document.querySelector(".userCity");
const userLocalidad = document.querySelector(".userLocalidad");
const userExtra = document.querySelector(".userExtra");
const userFecha = document.querySelector(".userFecha");


/* VARIABLES DE ALERTAS*/
const alertName = document.getElementById("alertName");
const alertProducto = document.getElementById("alertProducto");
const alertCity = document.getElementById("alertCity");
const alertLocalidad = document.getElementById("alertLocalidad");
const alertExtra = document.getElementById("alertExtra");
const alertFecha = document.getElementById("alertFecha");
const alert = document.getElementById("alert");
/*expreciones regulares*/
const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/
const regUserProducto = /^[0-5]|[0-4][0-9]|[01]?[0-9][0-9]?$/  /*expresión regular */
const regUserCity = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/
const regUserLocalidad = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/
const regUserExtra = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/
const regUserFecha = /^[0-5]|[0-4][0-9]|[01]?[0-9][0-9]?$/
/*VARIABLES DE LA PARTE DE ENVIO DEL FORM A WHATSAPP*/
const comprar = document.querySelector(".botonComprar");
const urlDesktop = 'https://web.whatsapp.com/';
const urlMobile = 'whatsapp://';
const telefono = '573214431521';



const pintarMensajeExito = ()=>{
    alert.classList.remove("d-none");
        
}

const pintarMensajeError = (errores)=>{
    errores.forEach(item =>{
        item.tipo.classList.remove("d-none");
        item.tipo.textContent = item.msg
        item.tipo.classList.add("is-invalid")
    })
}

formulario.addEventListener("submit",(e)=>{
    e.preventDefault();
    alert.classList.add("d-none");
    const errores = [];

    if(!regUserName.test(userName.value) || !userName.value.trim()){
    userName.classList.add("is-invalid");
    errores.push({
        tipo: alertName,
        msg:"Nombre no valido,solo letras😲😲"
            
       })
    }else{
        userName.classList.remove("is-invalid")
        userName.classList.add("is-valid")
        alertName.classList.add("d-none")
    }

    if(!regUserProducto.test(userProducto.value)|| !userProducto.value.trim()){
        userProducto.classList.add("is-invalid")
        errores.push({
            tipo: alertProducto,
            msg:"El producto no esta selececionado😲😲"
       })
    }else{
        userProducto.classList.remove("is-invalid")
        userProducto.classList.add("is-valid")
        alertProducto.classList.add("d-none")
    }

    if(!regUserCity.test(userCity.value)|| !userCity.value.trim()){
        userCity.classList.add("is-invalid")
        errores.push({
            tipo:alertCity,
            msg:"No seleciono ciudad😲😲"
        })
    }else{
        userCity.classList.remove("is-invalid");
        userCity.classList.add("is-valid");
        alertCity.classList.add("d-none")
    }

    if(!regUserLocalidad.test(userLocalidad.value)|| !userLocalidad.value.trim()){
        userLocalidad.classList.add("is-invalid")
        errores.push({
            tipo:alertLocalidad,
            msg:"No seleciono localidad😲😲"
        })
    }else{
        userLocalidad.classList.remove("is-invalid");
        userLocalidad.classList.add("is-valid");
        alertLocalidad.classList.add("d-none")
    }
    if(!regUserExtra.test(userExtra.value)|| !userExtra.value.trim()){
        userExtra.classList.add("is-invalid")
        errores.push({
            tipo:alertExtra,
            msg:"No has selecionado algo o marca 'nada'😲😲"
        })
    }else{
        userExtra.classList.remove("is-invalid");
        userExtra.classList.add("is-valid");
        alertExtra.classList.add("d-none")
    }

    if(!regUserFecha.test(userFecha.value)|| !userFecha.value.trim()){
        userFecha.classList.add("is-invalid")
        errores.push({
            tipo:alertFecha,
            msg:"Ingresar una fecha😲😲"
        })
    }else{
        userFecha.classList.remove("is-invalid");
        userFecha.classList.add("is-valid");
        alertFecha.classList.add("d-none")
    }







    if(errores.length !== 0){
        pintarMensajeError(errores);
        return;
    }

    console.log("formulario no se envio")
    pintarMensajeExito();
})


/*part form whatsapp*/




comprar.addEventListener('click', (event) => {
    event.preventDefault()
    buttonSubmit.innerHTML = `
    <div class="spinner-border" role="status">
        <P>🥳</P>
    </div>
    
    `
    buttonSubmit.disabled = true
    setTimeout(() => {
        let nombre = document.getElementById('userName').value
        let producto = document.getElementById('userProducto').value
        let destino = document.getElementById('userCity').value
        let localidad = document.getElementById('userLocalidad').value
        let date = document.getElementById('userFecha').value
        let extras = document.getElementById('userExtra').value
        let mensaje = 'send?phone=' + telefono + '&text=*🎁🎀MI PEDIDO*%0A*¿Cual es tu nombre?*%0A' + nombre  + '%0A*¿Cuál es tu Producto👉?*%0A'+ producto + '%0A*¿Cuál es tu Ubicación👉?*%0A' + destino + '%0A*¿Cuál es tu localidad👉?*%0A' + localidad + '%0A*¿Que quieres agregar☺️✨🎈?*%0A'+ extras   + '%0A*¿Fecha de entrega de tu regalo🪐🌍🪂🛬?*%0A'+ date + ''

        function isMobile() {
            if (sessionStorage.desktop)
                return false;
            else if (localStorage.mobile)
                return true;
            var mobile = ['iphone','samsung','xiaomi', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile', 'windows phone', 'iemobile','vivo'];
            for (var i in mobile)
                if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) return true;
            return false;
        }
        
        if(isMobile()) {
            window.open(urlMobile + mensaje, '_blank')
        }else{
            window.open(urlDesktop + mensaje, '_blank')
        }
        buttonSubmit.innerHTML = '<i class="bi bi-whatsapp"> PEDIR AHORA </i>'
        buttonSubmit.disabled = false
    }, 1100);
});

