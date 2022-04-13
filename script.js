const baseUrl = "http://localhost:3000/burgers";

async function findAllBurgers() {
  const response = await fetch(`${baseUrl}/find-burgers`);

  const burgers = await response.json();
}

findAllBurgers();
