var formDetails = document.querySelector("#formContainer");
formDetails.addEventListener("submit", handleFormSubmit);
function handleFormSubmit(event) {
    event.preventDefault();
    //extract the value from each form field
    var nameDest = event.target.elements['name'].value;
    var locationDest = event.target.elements['location'].value;
    var photoDest = event.target.elements['photo'].value;
    var descriptionDest = event.target.elements['description'].value;
    //clear out the form fields
    for (var i = 0; i < formDetails.length; i++) {
        formDetails.elements[i].value = "";
    }
    //if needed,change the header at the top of the destination list
    var cardDes = document.querySelector("#destinationContainer");
    if (cardDes.children.length === 0) {
        document.getElementById('title').innerHTML = "My Wish List";
    }
    var addCard = newCard(nameDest, locationDest, photoDest, descriptionDest);
    document.querySelector('#destinationContainer').appendChild(addCard);
}

function newCard(name, location, photo, description) {
    var card = document.createElement('div');
    card.className = "card";
    var myImg = document.createElement('img');
    myImg.setAttribute('src', photo);
    card.appendChild(myImg);
    var cardBody = document.createElement('div');
    var n = document.createElement('h3');
    n.innerHTML = name;
    cardBody.appendChild(n);
    var l = document.createElement('h4');
    l.innerHTML = location;
    cardBody.appendChild(l);
    var d = document.createElement('p');
    d.innerHTML = description;
    cardBody.appendChild(d);
    var removeBtn = document.createElement('button');
    removeBtn.innerHTML = "remove";
    removeBtn.addEventListener('click', removeDest);
    cardBody.appendChild(removeBtn);
    card.appendChild(cardBody);
    return card;
}
function removeDest(event) {
    var card = event.target.parentElement.parentElement;
    card.remove();
}