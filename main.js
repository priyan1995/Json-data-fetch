function displayData(carData) {
    const carInfo = `
    <div class="car-data-wrapper">
                        <img src="${carData.image}" class="w-100">
                        <h4>
                            Brand: <strong>${carData.brand}</strong>
                        </h4>
                        <p>
                            Model: <strong>${carData.model}</strong>
                        </p>
                        <p>
                            Year: <strong>${carData.year}</strong>
                        </p>
                        <p>
                            Engine Type: <strong>${carData.engine.type}</strong>
                            <br>
                            Engine Capacity: <strong>${carData.engine.capacity}</strong>
                        </p>
                        <p>
                            Features:
                        </p>
                        <ul>
                            <li>${carData.features[0]}</li>
                            <li>${carData.features[1]}</li>
                            <li>${carData.features[2]}</li>
                        </ul>
                        <p>
                            Color: <strong>${carData.color}</strong>
                        </p>
                        <h3>Price: <strong>${carData.Price}</strong> </h3>
                    </div>`;
                    document.querySelector('.vehicl-data-div').innerHTML = carInfo;
}


const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        displayData(JSON.parse(xhr.responseText));
    }
}

xhr.open("GET", "cars.json");
xhr.send();

// console.log("test")

