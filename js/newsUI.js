class NewsUI {
    constructor() {
        this.newsContainer = document.querySelector('.news-wrap .row');
    }

/** 
* @desc clears the container
* @param (*) 
* @returns (*)
*/

    clearContainer() {
        let first = this.newsContainer.firstElementChild;
        while (first) {
            this.newsContainer.removeChild(first);
            first = this.newsContainer.firstElementChild;
        };
    }

/** 
* @desc creates markup with news
* @param (news) 
* @returns (*)
*/

    newsTemplate(news) {
        let col = document.createElement('div');
        let card = document.createElement('div');
        let cardImage = document.createElement('div');
        let img = document.createElement('img');
        let cardContent = document.createElement('div');
        let cardTitle = document.createElement('span');
        let p = document.createElement('p');
        let cardAction = document.createElement('div');
        let a = document.createElement('a');
        a.href = `${news.url}`;
        a.target = "_blank"; 
        a.insertAdjacentText('beforeend', "Read more");
        cardAction.appendChild(a);
        cardAction.className = "card-action";
        p.insertAdjacentText('beforeend', `${news.description || ''}`);
        cardTitle.className = "card-title";
        cardTitle.insertAdjacentText('beforeend', `${news.title || ''}`);
        cardContent.appendChild(cardTitle);
        cardContent.appendChild(p);
        cardContent.className = "card-content";
        cardImage.className = "card-image";
        card.appendChild(cardImage);
        card.appendChild(cardContent);
        card.appendChild(cardAction);
        img.src = `${news.urlToImage}`;
        cardImage.appendChild(img);
        card.className = "card";
        col.appendChild(card);
        col.className = "col s12 m6";
        let container = document.querySelector('.news-wrap');
        container.firstElementChild.appendChild(col);
    }   
}
//         <div class="col s12 m6">
//             <div class="card">
//                 <div class="card-image">
//                     <img src="${news.urlToImage}">
//                 </div>
//                 <div class="card-content">
//                     <span class="card-title">${news.title || ''}</span>

//                     <p>${news.description || ''}</p>
//                 </div>
//                 <div class="card-action">
//                     <a href="${news.url}" target="_blank">Read more</a>
//                 </div>
//             </div>
//         </div>
//         `;