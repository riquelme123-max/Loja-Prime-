async function carregarProdutos() {
    const container = document.getElementById("produtos");
    try {
        const resposta = await fetch("https://dummyjson.com/products");
        const dados = await resposta.json();

        dados.products.forEach(produto => {
            const card = ` 
                <div class="col mb-5">
                    <div class="card h-100">

                        <img class="card-img-top" src="${produto.thumbnail}" alt="${produto.title}" style="background-color: #A52A2A"/>
                        <div class="card-body p-4" style="background-color: #8B0000">
                        <div class="text-center">
                            <h5 class="fw-bolder" style="color: white;">${produto.title}</h5>
                            <h5 class="fw-bolder" style="color: white;"> $${produto.price}</h5>
                           
                        </div>
                        </div>
                        <div class="card-footer p-4 pt-0 border-top-0 "    style="background-color: #8B0000">
                        <div class="text-center"><a style="background-radius: 50px; color: white;" href="#">Adicionar ao carrinho</a></div>
                        </div>
                    </div>
                </div>
            `;

            container.innerHTML += card;

        });

    } catch (error) {
        console.error("Erro ao carregar os produtos:", error);
        container.innerHTML = "<p>Erro ao carregar os produtos. Por favor, tente novamente mais tarde.</p>";
    }

}

carregarProdutos();