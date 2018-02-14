const form = document.getElementById('search-form');
const searchField = document.getElementById('search-keyword');
const responseContainer = document.getElementById('response-container');
const container=document.getElementById('container');
let searchedForText;

var submit = document.querySelector("#submit");

submit.addEventListener("click", function (e) {
  e.preventDefault();
  responseContainer.innerHTML = '';
  searchedForText = searchField.value;
  const url = `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}&api-key=2c03c764d6cc430496402090c67d443b`;

  fetch(url)
    .then(parseJSON)
    .then(addNews)
    .catch(displayErrors);
});

function handleErrors(res) {
  if (!res.ok) {
    throw Error(res.status);
  }
  return res;
  console.log(res);
}

function parseJSON(res) {
  console.log('parseJSON');
  return res.json()
    .then(function (parsedData) {
      // console.log(parsedData.response.docs[0]);
      return parsedData.response.docs[0];
    })
}

function addNews(data) {
  // const data = res
  const title = data.headline.main;
  console.log(title);
  const snippet = data.snippet;
  console.log(data);
  // const article = data.docs[0];
  let h1 = document.createElement('h1');
  h1.className='titleArticle';
  h1.innerText = title;
  let li = document.createElement('li');
  li.className = 'articleClass';
  li.innerText = snippet;

  container.appendChild(h1);
  responseContainer.appendChild(li);

}

function displayErrors(err) {
  console.log("INSIDE displayErrors!");
  console.log(err);
}