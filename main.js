const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function(){
    if(xhr.readyState  == 4  && xhr.status == 200){
        console.log(JSON.parse(xhr.responseText));       
    }
}

xhr.open("GET", "cars.json");
xhr.send();

// console.log("test")

