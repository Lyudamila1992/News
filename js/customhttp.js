class CustomHttp {

/** 
* @desc gets url
* @param (url) 
* @param (callback) 
* @returns (*)
*/

    get(url, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send();
        xhr.addEventListener('load', () => callback(JSON.parse(xhr.responseText)));
    }

/** 
* @desc post url
* @param (url) 
* @param (data) 
* @param (callback) 
* @returns (*)
*/

    post(url, data, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.send(data);
        xhr.addEventListener('load', () => callback(xhr.responseText));
    }
}