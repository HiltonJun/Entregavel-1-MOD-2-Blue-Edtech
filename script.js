const baseUrl = "http://localhost:3000/burgers";

async function findAllBurgers() {
  const response = await fetch(`${baseUrl}/find-burgers`);

  const burgers = await response.json();
  burgers.forEach((burger) => {
    document.getElementById("burgerList").insertAdjacentHTML(
      "beforeend",
      `<div class="burgerListaItem">
        <div>
            <div class="burgerListaItem-nome">${burger.nome}</div>
            <div class="burgerListaItem-preco">R$ ${burger.preco.toFixed(
              2
            )}</div>
            <div class="burgerListaItem-descricao">${burger.descricao}</div>
          </div>
            <img class="burgerListaItem-foto" src=${
              paleta.foto
            } alt=${`${burger.nome}`} />
        </div>`
    );
  });
}

findAllBurgers();

const findBurgerById = async () => {
  const id = document.getElementById("idburger").value;

  const response = await fetch(`${baseUrl}/find-burger/${id}`);

  const burger = await response.json();

  const burgerEscolhidoDiv = document.getElementById("burgerEscolhido");

  burgerEscolhidoDiv.innerHTML = `<div class="burgerCardItem">
      <div>
        <div class="burgerCardItem__nome">${burger.nome}</div>
        <div class="burgerCardItem__preco">R$ ${burger.preco.toFixed(2)}</div>
        <div class="burgerCardItem__descricao">${burger.descricao}</div>
      </div>
        <img class="burgerCardItem__foto" src=${
          burger.foto
        } alt=${`${burger.nome}`} />
    </div>`;
};
