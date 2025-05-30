const recupera=async()=>{
    let respuesta=await fetch("http://localhost:3000/leedatos")
    let datos=await respuesta.json()
    console.log(datos)
    let br1=document.createElement('br')
    let ul1=document.createElement('ul')
    datos.datos.forEach(dato=>{
        let li1=document.createElement('li')
        
        let dirty=dato.dato
        const clean = DOMPurify.sanitize(dirty, { USE_PROFILES: { html: false } })
        console.log({dirty, clean})
        const config = {
            // ALLOWED_TAGS: ['b', 'i'], // Permitir solo <b> y <i>
            FORBID_TAGS: ["a"],
            ALLOWED_ATTR: [] // No permitir atributos (útil si quieres desactivar todos los atributos)
        };
        // li1.innerHTML=DOMPurify.sanitize(dato.dato, { USE_PROFILES: { html: false } })
        li1.innerHTML=DOMPurify.sanitize(dato.dato, config)
        // li1.innerHTML=DOMPurify.sanitize(dato.dato)
        
        // li1.innerHTML=dato.dato
        // li1.textContent=dato.dato
        ul1.append(li1)
    })
    let divDatos=document.getElementById('datos')
    divDatos.innerHTML=``
    divDatos.append(br1)
    divDatos.append(ul1)
}
