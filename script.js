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
