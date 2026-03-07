export function ajax(method, url, data = null) {

    var xhr = new XMLHttpRequest();

    xhr.open(method, url, true);

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {

        if (xhr.readyState === 4) {

            if (xhr.status === 200 || xhr.status === 201) {
                console.log(xhr.responseText);
            } else {
                console.error(xhr.status);
            }

        }

    };

    xhr.send(data ? JSON.stringify(data) : null);

}

export function ajaxGet(url) {

    var xhr = new XMLHttpRequest();

    xhr.open("GET", url, true);

    xhr.onreadystatechange = function () {

        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(xhr.responseText);
        }

    };

    xhr.send();

}

export function ajaxPost(url, data) {
    ajax("POST", url, data);
}

export function ajaxPut(url, data) {
    ajax("PUT", url, data);
}

export function ajaxDelete(url) {
    ajax("DELETE", url);
}