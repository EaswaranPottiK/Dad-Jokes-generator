let showMore = document.getElementById('showMore')
let modifyHere = document.getElementById('modifyHere')
showMore.addEventListener('click',getAJoke)
let fontSize =18;

function getAJoke(){
    console.log("button clicked")
    var limit = 1
    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/dadjokes?limit=' + limit,
        headers: { 'X-Api-Key': 'mdHMyLal08OkL+Ng/FoAHQ==U0Ebsvwo6GqGtj7Y'},
        contentType: 'application/json',
        success: function(result) {
            modifyHere.innerText = result[0].joke
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });
}

function addToFav(){

    let text = modifyHere.innerHTML;
    document.getElementById('collection').innerHTML +=`<p>${text}</P>`
}

function reduceFont(){
    fontSize -=2
    document.getElementById("modifyHere").style.fontSize =fontSize+ "pt";
    document.getElementById("collection").style.fontSize =fontSize+ "pt";
}

function increaseFont(){
    fontSize +=2
    document.getElementById("modifyHere").style.fontSize =fontSize+ "pt";
    document.getElementById("collection").style.fontSize =fontSize+ "pt";
}