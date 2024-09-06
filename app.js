function pesquisar() {
    // 1. Seleciona a seção HTML com o ID "resultados-pesquisa" onde os resultados serão exibidos.
    let section = document.getElementById
    ("resultados-pesquisa");

    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value;

    if (campoPesquisa == "") {
        section.innerHTML = "<p>Digite algo na barra de pesquisa acima.</p>"
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();



    // 2. Inicializa uma string vazia para armazenar os resultados da pesquisa.
    let resultados = "";
    let nome = "";
    let descricao = "";
    let tags = "";

    // 3. Itera sobre cada item (dado) no array "dados" (assumindo que este array já existe e contém os dados da pesquisa).
    for (let dado of dados) {
        nome = dado.nome.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase()
        
        if (nome.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.nome}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Entenda mais sobre</a>
            </div>
        `;
        }
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado. Tente Novamente</p>"
    }

    // 5. Atribui o conteúdo da string "resultados" ao HTML da seção, substituindo o conteúdo anterior.
    section.innerHTML = resultados;
}