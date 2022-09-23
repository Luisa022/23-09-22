function confirmar() {

    const url = 'http://10.0.3.132.1313/listar-alunos'
    const body = document.getElementById("corpoTabela");

    fetch (url, {
        headers: {
            Accept: 'aplication/json',
            "Content-type": "aplication/json"
        },
        method: 'GET'
    }).then((resultado)=> {
        return resultado.json();
    })
    .then((dados)=> {
        corpoTabela.innerHTML = ''
        for (let num = 0; num< dados.lenght; num++){
            const criaLinha = document.createElement("tr");
            
            criaLinha.innerHTML = `            
            <tr>
            <th scope="row">${dados[num].id}</th>
            <td>${dados[num].nome}</td>
            <td>${dados[num].telefone}</td>
            <td>${dados[num].email}</td>
            <td>${dados[num].turma}</td>
        </tr>`

            corpoTabela.appendChild(criaLinha);

            console.log(dados[num]);
        }
    } );
    
}








<tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
