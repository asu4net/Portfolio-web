const cardsResourcePath = "resources/json/cards.json";
const cardContainer = ".cards";
const cardVideoFormat = "video/mp4";
class Card 
{
    cardInstance;
    videoPath;
    title;
    description;
    
    constructor(videoPath, title, description)
    {
        this.videoPath = videoPath;
        this.title = title;
        this.description = description;

        this.cardInstance = this.createCard();
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
        description.innerHTML = this.description;

        body.append(title, description);
        return body;
    }
    createVideo()
    {
        let video = document.createElement("video");
        video.classList.add("embed-responsive-item");

        //TODO: this not seems to be working...
        video.autoplay = true;
        video.controls = true;
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
        card.append(this.createVideo(), this.createBody());
        return card;
    }
}