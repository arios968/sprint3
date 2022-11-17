
import { consumir_base } from "./api.js"
import {  crear_tarjetas} from "./crearcard.js"

document.addEventListener("DOMContentLoaded" , async()=>{
    const selector = document.querySelector("#contenedores-menu");
    const viviendas = await consumir_base();
   
    viviendas.forEach(propiedad => {
        selector.innerHTML= crear_tarjetas(propiedad)+selector.innerHTML
     });
})



