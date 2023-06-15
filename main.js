const img = document.getElementById("imagen");
const spanName = document.getElementById("nameImg")
const API = "https://rickandmortyapi.com/api/character";

const getRandomValue = () => {
  return Math.floor(Math.random() * 20) + 1;
};

let value = getRandomValue();

const changeValue = () => {
  value = getRandomValue();
  generateImage(value);
};

const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    throw new Error("Something it´s wrong");
  }
};


const generateImage = (value) => {
  fetchData(`${API}/${value}`)
  .then((data) => {
    const { image, name } = data;
    img?.setAttribute("src", image);

    if(spanName){
      spanName.innerHTML = `Nombre de personaje: ${name}`;
    }
  })
  .catch((error) => console.log(error));
};



generateImage(value);