const getGoods = () => {
    const links = document.querySelectorAll('.navigation-link')

    const getData = () => {
        fetch('/db/db.json')
            .then((res) => res.json())
            .then((data) => {
                localStorage.setItem('goods', JSON.stringify(data));
                const goods = JSON.parse(localStorage.getItem('goods'));
                console.log(goods);
            })
    }

    links.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            getData();
        })
    })


}

getGoods();