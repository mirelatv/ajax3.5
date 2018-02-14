const form = document.getElementById('search-form');
const searchField = document.getElementById('search-keyword');
const responseContainer = document.getElementById('response-container');

const url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedFordText}&api-key=2c03c764d6cc430496402090c67d443b';


var submit = document.querySelector("#submit");
submit.addEventListener("click", function(){
  fetch(url)
  .then(handleErrors)
  .then(parseJSON)
  .then(addNews)
  .catch(displayErrors);
});

function handleErrors(response){
  if(!res.ok){
    throw Error(response.status);
  }
  return res;
}

function parseJSON(response){
  return response.json()
    .then(function(parsedData){
    return parsedData.results[0];
  })
}

function addNews (data){
  const article = data.response.docs[0];
  const title= article.headline.main;
  const snipped= article.snipped;
  let li = document.createElement('li');
  li.className='articleClass';
  li.innerText = snipped;
  responseContainer.appendChild(li);
 }

function displayErrors(err){
  console.log("INSIDE displayErrors!");
  console.log(err);
}