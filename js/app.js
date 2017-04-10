 /*jshint esversion: 6*/

//outgoing request function
function request(listener, url){
  const oReq = new XMLHttpRequest();
  oReq.addEventListener('load', listener);
  oReq.open('GET' , url);
  oReq.send();
}

//darth vader
request(darthVader, 'http://swapi.co/api/people/4/');

function darthVader(){
  const requestData = JSON.parse(this.responseText);
  console.log('requestData: ', requestData);
  const personName = document.querySelector('#person4Name');
  personName.innerHTML = requestData.name;

  request(homeworld, requestData.homeworld);
}

function homeworld(){
  const requestData = JSON.parse(this.responseText);
  console.log('requestData: ', requestData);
  const person4HomeWorld = document.querySelector('#person4HomeWorld');
  person4HomeWorld.innerHTML = requestData.name;
}

//han solo
request(hanSolo, 'http://swapi.co/api/people/14/');

function hanSolo(){
  const requestData = JSON.parse(this.responseText);
  console.log('requestData: ', requestData);
  const hanSolo = document.querySelector('#person14Name');
  hanSolo.innerHTML = requestData.name;

  request(species, requestData.species[0]);
}

function species(){
  const requestData = JSON.parse(this.responseText);
  console.log('requestData: ', requestData);
  const soloSpecies = document.querySelector('#person14Species');
  soloSpecies.innerHTML = requestData.name;
}

//film list
request(filmList, 'http://swapi.co/api/films/');

function filmList(){
  const requestData = JSON.parse(this.responseText);
  console.log('requestData: ', requestData);

  //Prints list of films to screen
  for(let i = 0; i < requestData.results.length; i++){
    const films = document.querySelector('#filmList');
    let liFilm = document.createElement('h2');
    liFilm.innerHTML = requestData.results[i].title;
    films.appendChild(liFilm);

    //Prints list of planets under each film
    for(let j = 0; j < requestData.results[i].planets.length; j++){
      request(planets, requestData.results[i].planets[j]);
    }

      function planets(){
        const requestData = JSON.parse(this.responseText);
        console.log('requestData: ', requestData);
        // const planet = document.querySelector('#filmList');
        const liPlanet = document.createElement('ul');
        liPlanet.innerHTML = requestData.name;
        liFilm.appendChild(liPlanet);
      }

  }
}



