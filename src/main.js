function main()
{
    fetch(cardsResourcePath)
    .then(response => response.json())
    .then(data => 
        {
            let cards = data.cards;
            for (let index = 0; index < cards.length; index++)
            {
                const element = cards[index];
                new Card(element.videoPath, element.title, element.description);
            }
        })
    .catch(error => console.log(error)); 
}