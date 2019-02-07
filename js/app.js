const newsService = new NewsService();
const newsSearch = new NewsSearch();
const newsUI = new NewsUI();
const alert = new Alert();

// UI Elements
const form = document.forms['newsControlForm'];
const countrySelect = form['country'];
const categorySelect = form['category'];
const search = form['search'];

/** function onSelectChange
* @desc displays news on the page depending on the selected parameters
* @param (e) 
* @returns {*}
*/

function onSelectChange(e) {
    const country = countrySelect.value;
    const category = categorySelect.value;    
    if (!country || !category) return console.log('Выберите страну и категорию');
    newsService.getTopHeadlinesNews((response) => {
        const { articles } = response;
        newsUI.clearContainer();
        articles.forEach((news) => newsUI.addNews(news));
    }, category, country);
}

/** function searchOn
* @desc displays news on the page depending on the letters entered
* @param (e) 
* @returns {*}
*/

function searchOn(e) {
   const value = search.value;
   alert.alertOff();  
    if (value.length >= 3) {
        newsSearch.getSearchNews((response) => {
            const { articles } = response;
            if (articles.length === 0) {
                alert.alertOn();
            }; 
            newsUI.clearContainer();
            articles.forEach((news) => newsUI.addNews(news));
        }, value);
    };    
}

// Event listeners
countrySelect.addEventListener('change', onSelectChange);
categorySelect.addEventListener('change', onSelectChange);
search.addEventListener("input", searchOn);

