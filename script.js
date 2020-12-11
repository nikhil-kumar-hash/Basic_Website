
const url = 'http://api.openweathermap.org/data/2.5/group?id=524901,703448,700871,3112403,6052034,6052153,6052583,7873547,2511138,7873557,2643743&appid=17b20d9f8227708cf668b914bb218e7d'

let data = [];


window.onload = () => {
    getData();
}

// filling data locally
function populateData(items){

for(let i = 0; i<items.length; i++){
    let temp = {};
        temp.name = items[i].name;
        temp.weather = items[i].weather[0].description;
        temp.windspeed = items[i].wind.speed;
        data.push(temp);
    }

    //console.log(data);
   populateTable();
}

// fetching data

async function getData() {
const response = await fetch(url);
const {list}  = await response.json();
  //console.log(list);
populateData(list);
}

// populating table 
function populateTable(){

let tablebody = document.getElementById("tabledata");

let dataHtml = '';

for(let i in data){
    dataHtml += `<tr><td>${data[i].name}</td><td>${data[i].weather}</td>
<td>${data[i].windspeed}</td></tr>`
}
 //console.log(dataHtml);
tablebody.innerHTML = dataHtml;

}



