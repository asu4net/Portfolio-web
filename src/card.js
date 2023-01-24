const cardsResourcePath = "resources/json/cards.json";
const cardContainer = ".cards";
const cardVideoFormat = "video/mp4";
class Card 
{
    cardInstance;
    videoPath;
    title;
    description;
    link;

    constructor(videoPath, title, description, link)
    {
        this.videoPath = videoPath;
        this.title = title;
        this.description = description;
        this.link = link;

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
        let newVideo = document.createElement("video");
        newVideo.classList.add("embed-responsive-item");
        
        newVideo.muted = true;
        newVideo.autoplay = true;
        newVideo.loop = true;
        newVideo.controls = true;
        
        let source = document.createElement("source");
        source.src = this.videoPath;
        source.type = cardVideoFormat;

        newVideo.append(source);

        return newVideo;
    }
    createCard()
    {
        let card = document.createElement("div");    
        card.classList.add("card");
        card.classList.add("closed");
        card.append(this.createVideo(), this.createBody());
    
        card.link = this.link;
        card.onclick = function() { window.open(this.link, '_blank'); };

        return card;
    }
}