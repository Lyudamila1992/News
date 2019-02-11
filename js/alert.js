class Alert {
    constructor() {  
        this.newsContainer = document.querySelector('.news-wrap');
    }

/** 
* @desc displays an alert in the markup
* @param (*) 
* @returns (*)
*/

    alertOn() {
        const template = Alert.alertT();
        this.newsContainer.insertAdjacentHTML('afterbegin', template);
    }

/** 
* @desc creates alert markup
* @param (*) 
* @returns (*) markup
*/

    static alertT() {
        return `
            <div class="card red darken-1 white-text" >Новости не найдены!</div>
        `;
    }

/** 
* @desc hides the alert
* @param (*) 
* @returns (*)
*/

    alertOff() {
        const currentAlert = document.querySelector('.red');
        if (currentAlert) this.newsContainer.removeChild(currentAlert)
    }
}