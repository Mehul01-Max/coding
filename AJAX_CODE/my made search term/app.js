
const form = document.querySelector('#form');
const btn = document.querySelector('#btn');
const container = document.querySelector('#container');

const onFormSubmit = async (e) => {
    e.preventDefault();
    container.innerHTML = '';

    const inputValue = form.elements.query.value;
    //   console.log('clicked', inputValue);
    const params = { params: { q: inputValue } };
    let res = await axios.get(`https://api.tvmaze.com/search/shows?`, params);

    getImgs(res.data);
    form.elements.query.value = '';
};

const getImgs = (data) => {
    data.map((tv) => {
        if (tv.show.image) {
            const img = document.createElement('img');
            img.src = tv.show.image.medium;
            container.append(img);
        }
    });
};

form.addEventListener('submit', onFormSubmit);