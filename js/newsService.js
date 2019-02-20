const http = new CustomHttp();

class NewsService {
    constructor() {
        this.apiUrl = 'https://newsapi.org/v2';
        this.apiKey = '9c27b0f722b84da5a08312d2b125351b';
        this.country = 'ua';
        this.category = 'technology';
        this.value = '';
    }

/** 
* @desc receives news on api depending on the selected country and subject
* @param (callback) 
* @param (category) 
* @param (country) 
* @returns (*)
*/

    getTopHeadlinesNews(callback, category = this.category, country = this.country) {
        http.get(`${this.apiUrl}/top-headlines?country=${country}&category=${category}&apiKey=${this.apiKey}`, callback);
    }

/** 
* @desc receives news on api depending on the word entered
* @param (callback) 
* @param (value) 
* @returns (*)
*/

    newsSearch(callback, value = this.value) {
        http.get(`${this.apiUrl}/everything?q=${value}&apiKey=${this.apiKey}`, callback);
    }
}
