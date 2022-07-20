
const sat = "https://api.datos.gob.mx/v2/Releases_SFP"
    fetch (sat).then(resp => resp.json())
        .then(datos => {/* console.log(datos.results) */
        
        const tabla = document.getElementById("info")

        datos.results.forEach(element => {

        const secretaria = {
            nombre: element.publisher.name,
            ciclo: element.cycle,
            comprador: element.buyer.name,
            proyecto: element.tender.title,
            empresa: element.awards[0].suppliers[0].name,
            contrato: element.contracts[0].value.amount
        }

       console.log(secretaria.empresa);

        const template = `<th>${secretaria.empresa}</th><th>${secretaria.ciclo}</th><th>${secretaria.comprador}</th><th>${secretaria.proyecto}</th><th>${secretaria.contrato}</th>`
       tabla.innerHTML += template
             
        });
        
        
        
        })