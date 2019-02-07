const http = new CustomHttp();

class NewsService {
    constructor() {
        this.apiUrl = 'https://newsapi.org/v2';
        this.apiKey = '9c27b0f722b84da5a08312d2b125351b';
        this.country = 'ua';
        this.category = 'technology';
    }

    getTopHeadlinesNews(callback, category = this.category, country = this.country) {
        http.get(`${this.apiUrl}/top-headlines?country=${country}&category=${category}&apiKey=${this.apiKey}`, callback);
    }
}

class NewsSearch {
    constructor() {
        this.apiUrl = 'https://newsapi.org/v2';
        this.apiKey = '9c27b0f722b84da5a08312d2b125351b';
        this.value = '';
    }

    getSearchNews(callback, value = this.value) {
        http.get(`${this.apiUrl}/everything?q=${value}&apiKey=${this.apiKey}`, callback);
    }
}

class Alert {
    constructor() {  
    }

    alertOn() {
        const template = Alert.alertT();
        let container = document.querySelector(".news-wrap");
        container.insertAdjacentHTML('afterbegin', template);
    }

    static alertT() {
        return `
            <div class="card red darken-1 white-text" >Новости не найдены!</div>
        `;
    }

    alertOff() {
        const currentAlert = document.querySelector('.red');
        let container = document.querySelector(".news-wrap");
        if (currentAlert) container.removeChild(currentAlert);
    }
}