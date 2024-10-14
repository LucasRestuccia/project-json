fetch("./data/data.json")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        const frame = document.getElementById("loop");
        data.forEach((element) => {
            console.log(element);
            let newCard = document.createElement("card");
            newCard.id = element.id;
            newCard.className="card";
            newCard.innerHTML="<h2>" + element.name + "</h2>" + "<p>" + element.desc + "</p>";
            frame.appendChild(newCard);
        });
    })
    .catch((error) => console.error("Error loading JSON file", error));
