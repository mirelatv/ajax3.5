const form = document.getElementById('search-form');
const searchField=document.getElementById('search-keyword');
const responseContainer= document.getElementById('response-container');
let searchedFordText;


form.addEventListener('submit',function(e){
    e.preventDefault();
    responseContainer.innerHTML='';
    searchedFordText=searchField.value;
    getNews();

})

function getNews(){
    const articleRequest = new XMLHttpRequest();
    articleRequest.open('GET',`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedFordText}&api-key=2c03c764d6cc430496402090c67d443b`);
    articleRequest.onload=addNews;
    articleRequest.onerror=handlelError;
    articleRequest.send();
}
function handlelError(){
    console.log('se ha producido unerror');
}
function addNews(){
 const data = JSON.parse(this.responseText);
 console.log(data);
 const article = data.response.docs[0];
 const title= article.headline.main;
 const snipped= article.snipped;
 let li = document.createElement('li');
 li.className='articleClass';
 li.innerText = snipped;
 responseContainer.appendChild(li);
}

