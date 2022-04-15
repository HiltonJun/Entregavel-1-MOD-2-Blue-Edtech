const baseUrl = 'http://localhost:3000/burgers';

async function findAllBurgers() {
  const response = await fetch(`${baseUrl}/find-burgers`);
  const burgers = await response.json();

  burgers.forEach((burger) => {
    document.getElementById('burgerList').insertAdjacentHTML(
      'beforeend',
      `<div class="BurgerListaItem">
        <div>
          <div class="BurgerListaItem__nome">${burger.nome}</div>
          <div class="BurgerListaItem__descricao">${burger.descricao}</div>
          <div class="BurgerListaItem__preco">R$ ${burger.preco.toFixed(
            2,
          )}</div>
        </div>
          <img class="BurgerListaItem__foto" src=${
            burger.foto
          } alt=${`${burger.nome}`} />
      </div>`,
    );
  });
}

findAllBurgers();

const findByIdBurgers = async () => {

  const id = document.getElementById('idBurger').value;
 

  const response = await fetch(`${baseUrl}/find-burgers/${id}`);

  const burger = await response.json();

  const burgerEscolhidoDiv = document.getElementById('burgerEscolhido');


  burgerEscolhidoDiv.innerHTML = `
  <div class="BurgerCardItem">
    <div>
      <div class="BurgerCardItem__nome">${burger.nome}</div>
      <div class="BurgerCardItem__descricao">${burger.descricao}</div>
      <div class="BurgerCardItem__preco">R$ ${burger.preco.toFixed(2)}</div>
    </div>
    <img class="BurgerCardItem__foto"
    src=${burger.foto} 
    alt=${`${burger.nome}`} />
  </div>`;
};

function abrirModalCadastro() {
  document.querySelector(".modal-overlay").style.display = "flex";
}

function fecharModalCadastro() {
  document.querySelector(".modal-overlay").style.display = "none";
  document.querySelector("#nome").value = "";
  document.querySelector("#preco").value = 0;
  document.querySelector("#descricao").value = "";
  document.querySelector("#foto").value = "";
}

async function createBurger() {
  const nome = document.querySelector("#nome").value;
  const preco = document.querySelector("#preco").value;
  const descricao = document.querySelector("#descricao").value;
  const foto = document.querySelector("#foto").value;

  const burger = {
    nome,
    preco,
    descricao,
    foto,
  };
  const response = await fetch(baseUrl + "/create", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
    body: JSON.stringify(burger),
  });

  const novoBurger = await response.json();

  const html = `<div class="BurgerListaItem">
  <div>
    <div class="BurgerListaItem__nome">${novoBurger.nome}</div>
    <div class="BurgerListaItem__descricao">${novoBurger.descricao}</div>
    <div class="BurgerListaItem__preco">R$ ${novoBurger.preco}</div>
  </div>
    <img class="BurgerListaItem__foto" src=${
      novoBurger.foto
    } alt=${`${novoBurger.nome}`} />
  </div>`;

  document.getElementById("burgerList").insertAdjacentHTML("beforeend", html);

  fecharModalCadastro();
};
