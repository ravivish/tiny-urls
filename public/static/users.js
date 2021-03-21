function listall() {
    fetch(`api/urls`)
        .then((res) => res.json())
        .then((res) => {
            const tbody = document.querySelector('#url-list-body');
            // div.innerHTML('');
            res.forEach((element) => {
                const tr = document.createElement('tr');
                const longurl = document.createElement('td');
                const shorturl = document.createElement('td');
                longurl.innerHTML = element.url;
                shorturl.innerHTML = `${document.location.origin}/${element.id}`;
                tr.append(longurl);
                tr.append(shorturl);
                tbody.appendChild(tr);
            });
        });
}
function reload() {
    setTimeout(() => {
        window.location.reload();
    }, 5000);
}
const shorten = document.querySelector('#generate');
shorten.addEventListener('click', () => {
    const url = { url: document.querySelector('#url').value };
    // console.log(JSON.stringify(url));
    if (url !== '') {
        fetch(`api/urls`, {
            method: 'POST',
            body: JSON.stringify(url),
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
        })
            .then((res) => res.json())
            .then((res) => {
                document.querySelector('#url').value = `${document.location.origin}/${res.id}`;
                shorten.style.display = 'none';
                const copybtn = document.querySelector('#copybtn');
                copybtn.style.display = 'inline-block';
                // listall();
                reload();
            });
    }
});

const copybtn = document.querySelector('#copybtn');
copybtn.addEventListener('click', () => {
    const url = document.getElementById('url');
    url.select();
    document.execCommand('copy');
});

window.onload = listall();
