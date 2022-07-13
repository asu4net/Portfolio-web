function main()
{
   
        fetch(cardsResourcePath)
        .then(response => response.json())
        .then(data => 
            {
                let cards = data.cards;
                let cardObjects = new Array(cards.length);
                for (let i = 0; i < cards.length; i++)
                {
                    const element = cards[i];
                    cardObjects[i] = new Card(element.videoPath, element.title, element.description);
                }

                let container = document.createElement("div");
               
                container.classList.add("cards");

                for (let i = 0; i < cardObjects.length; i++) {
                    const element = cardObjects[i];
                    container.append(element.cardInstance);
                }
                
                let body = document.querySelector("body");
                body.append(container);
            })
        .catch(error => console.log(error));
    
}