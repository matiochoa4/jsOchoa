/* ajax */

    
document.querySelector("#json").addEventListener('click', informacionAdicional);

function informacionAdicional(){

    document.getElementById("tabla").style.display = 'table';

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'catalogo.json', true);

    xhttp.send();

    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
            
            let datos = JSON.parse(this.responseText);
            
            let res = document.querySelector('#res');
            res.innerHTML = '';

            for (let items of datos){
                
                res.innerHTML += `
                <tr>
                  <td>${items.PRODUCTO}</td>
                  <td>${items.PRECIO}</td>
                  <td>${items.DESCRIPCION}</td>
                  <td>${items.STOCK}</td>
                </tr>
                `
            }
        }
    }

}
