export function ajax(method, url, data = null) {

    return new Promise((resolve, reject) => {

        const xhr = new XMLHttpRequest();

        xhr.open(method, url, true);

        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.onreadystatechange = function () {

            if (xhr.readyState === 4) {

                if (xhr.status >= 200 && xhr.status < 300) {

                    const result = xhr.responseText
                        ? JSON.parse(xhr.responseText)
                        : null;

                    resolve(result);

                } else {

                    reject({
                        status: xhr.status,
                        message: xhr.responseText
                    });

                }

            }

        };

        xhr.send(data ? JSON.stringify(data) : null);

    });

}
