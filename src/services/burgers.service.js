const burgers = [
    {
      id: 1,
      nome: 'Voando Alto',
      descricao: 'Pão brioche/caseirinho, burguer de fraldinha 150g (fraldinha), alface, cebola caramelizada, queijo prato e maionese temperada (alho e temperos frescos).',
      foto: '/assets/images/voando-alto.jpg',
      preco: 27.90,
    },
    {
      id: 2,
      nome: 'Espetacular Cheddar',
      descricao: 'Pão australiano, hambúrguer artesanal de costela 150g, cheddar cremoso, cebola caramelizada e bacon.',
      foto: '/assets/images/blitz-cheddar.jpg',
      preco: 32.90,
    },
    {
      id: 3,
      nome: 'Marilú chicken',
      descricao: 'Pão caseiro , um incrível e suculento hambúrguer de frango, alface, tomate, cebola caramelizada, queijo e maionese de limão siciliano.',
      foto: '/assets/images/marilu-chicken.jpg',
      preco: 27.90,
    },
  ];

const findBurgersService = () => {
    return burgers;
  };
  
  const findBurgerByIdService = (id) => {
    return burgers.find((burger) => burger.id == id);
  };
  
  module.exports = {
    findBurgersService,
    findBurgerByIdService,
  };
