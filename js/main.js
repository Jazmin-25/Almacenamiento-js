/*
localstorage - almacena información en en navegador y se mantiene aunque el navegador se cierre
sessionstorage - almacena infromación en el navegador, y se pierde cuando el navegador se cierre.
localstorage vs sessiostorage es por el tiempo en que la información se almacena  */
let btnGuardar = document.getElementById("btnGuardar");
let btnVer = document.getElementById("btnVer");
let btnBorrar = document.getElementById("btnBorrar");
let txtData = document.getElementById("data");
let alertResultado = document.getElementById("alertResultado");
let key = "info";

btnGuardar.addEventListener("click", function(event){
    event.preventDefault(); 
    //localStorage.setItem(key,txtData.value); //
    sessionStorage.setItem(key, txtData.value); //
});

btnVer.addEventListener("click", function(event){
    event.preventDefault();
    //alertResultado.innerText = localStorage.getItem(key); //
    alertResultado.innerText = sessionStorage.getItem(key);//
});

btnBorrar.addEventListener("click", function(event){
    event.preventDefault();
    //localStorage.removeItem(key); este es local
    sessionStorage.removeItem(key); //este es sesion
});

