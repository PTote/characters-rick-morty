const img = document.getElementById("imagen");
const spanName = document.getElementById("nameImg");
const API = "https://rickandmortyapi.com/api/character";

const getRandomValue = () => {
  return Math.floor(Math.random() * 20) + 1;
};

let value = getRandomValue();

const changeValue = () => {
  value = getRandomValue();
  getData(API, value);
};

const fetchData = async (urlAPI) => {
  const response = await fetch(urlAPI);
  return await response.json();
};

const getData = async (urlAPI, value) => {
  try {
    const {image, name} = await fetchData(`${urlAPI}/${value}`);
    
    img?.setAttribute('src', image );

    if(spanName){
      spanName.innerHTML = `Nombre de personaje: ${name}`;
    }

  } catch (error) {
    console.log(error);
  }
};

getData(API, value);
