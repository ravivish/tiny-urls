function listall() {
    fetch(`api/urls`)
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
            const div = document.querySelector('#list');
            res.forEach((element) => {
                const ele = document.createElement('p');
                ele.innerHTML = element.url;
                div.appendChild(ele);
            });
        });
}
const shorten = document.querySelector('#generate');
shorten.addEventListener('click', () => {
    const url = { url: document.querySelector('#url').value };
    // console.log(JSON.stringify(url));
    if (url !== '') {
        fetch(`api/urls`, {
            method: 'POST',
            data: JSON.stringify(url),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                listall();
            });
    }
});
