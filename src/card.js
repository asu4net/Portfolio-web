const cardsResourcePath = "resources/json/cards.json";
const cardContainer = ".cards";
const cardVideoFormat = "video/mp4";
const cardWidth = "18rem";

class Card 
{
    videoPath;
    title;
    description;
    
    constructor(videoPath, title, description)
    {
        this.videoPath = videoPath;
        this.title = title;
        this.description = description;

        let cards = document.querySelector(cardContainer);
        cards.append(this.createCard());
    }

    createBody()
    {
        let body = document.createElement("div");
        body.classList.add("card-body");
        
        let title = document.createElement("h5");
        title.classList.add("card-title");
        title.innerText = this.title;

        let description = document.createElement("p");
        description.classList.add("card-text");
        description.innerText = this.description;

        body.append(title, description);
        return body;
    }
    createVideo()
    {
        let video = document.createElement("video");
        video.classList.add("embed-responsive-item");
        video.controls = true;
        video.autoplay = true;
        video.loop = true;
        video.mute = true;

        let source = document.createElement("source");
        source.src = this.videoPath;
        source.type = cardVideoFormat;

        video.append(source);

        return video;
    }
    createCard()
    {
        let card = document.createElement("div");    
        card.classList.add("card");
        card.style.width = cardWidth;
        card.append(this.createVideo(), this.createBody());
        return card;
    }
}