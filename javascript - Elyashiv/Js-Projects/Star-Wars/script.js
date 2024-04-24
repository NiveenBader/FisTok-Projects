document.addEventListener("DOMContentLoaded", () => {
    const fetchButtonIds = ["fetchPlanets", "fetchStarships", "fetchVehicles", "fetchPeople", "fetchFilms", "fetchSpecies"];
    const dataElement = document.getElementById("data");
    const errorMessage = document.getElementById("error-message");

    fetchButtonIds.forEach(buttonId => {
        document.getElementById(buttonId).addEventListener("click", () => {
            fetchData(buttonId.replace("fetch", "").toLowerCase());
        });
    });

    function fetchData(category) {
        dataElement.innerHTML = ""; // Clear previous data
        errorMessage.style.display = "none"; // Hide error message
        fetch(`https://www.swapi.tech/api/${category}/`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to fetch ${category}: ${response.status} ${response.statusText}`);
                }
                return response.json();
            })
            .then(data => {
                if (data.results) {
                    data.results.forEach(item => {
                        const card = document.createElement("div");
                        card.classList.add("card");
                        console.log(category);


                        // Iterate over each property of the item object
                        for (const key in item) {
                            if (item.hasOwnProperty(key)) {
                                const propertyElement = document.createElement("p");
                                propertyElement.textContent = `${key}: ${item[key]}`;
                                card.appendChild(propertyElement);
                            }
                        }

                        dataElement.appendChild(card);
                    });
                } else {
                    const li = document.createElement("li");
                    li.textContent = "No data available";
                    dataElement.appendChild(li);
                }
            })
            .catch(error => {
                errorMessage.textContent = error.message;
                errorMessage.style.display = "block";
            });
    }
});

//https://www.swapi.tech/documentation
