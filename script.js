const listEl = document.getElementById('countriesList');
const visitEl = document.getElementById('visitContainer');

let countriesName = [
  {
    id: 1,
    name: 'Australia',
    img: './images/australia.png',
    isVisited: false,
  },
  {
    id: 2,
    name: 'Canada',
    img: './images/Canada.png',
    isVisited: false,
  },
  {
    id: 3,
    name: 'Greenland',
    img: './images/Greenland.png',
    isVisited: false,
  },
  {
    id: 4,
    name: 'India',
    img: './images/India.png',
    isVisited: false,
  },
  {
    id: 5,
    name: 'Netherlands',
    img: './images/Netherlands.png',
    isVisited: false,
  },
  {
    id: 6,
    name: 'Portugal',
    img: './images/Portugal.png',
    isVisited: false,
  },
  {
    id: 7,
    name: 'Switzerland',
    img: './images/Switzerland.png',
    isVisited: false,
  },
  {
    id: 8,
    name: 'Thailand',
    img: './images/Thailand.png',
    isVisited: false,
  },
  {
    id: 9,
    name: 'United Kingdom',
    img: './images/United-kingdom.png',
    isVisited: false,
  },
  {
    id: 10,
    name: 'Venezuela',
    img: './images/Venezuela.png',
    isVisited: false,
  },
];

let flag = [];

const init = () => {
  addCountries();
  flag.forEach((item) => {});
};

const addCountries = () => {
  listEl.innerHTML = ``;
  countriesName.map((item) => {
    const { id, name, isVisited } = item;
    const liEL = document.createElement('li');
    liEL.id = `${id}`;
    liEL.innerHTML = `
          <span>${name}</span>
          <button class="visitBtn" onclick="addImage(this)">${
            isVisited ? 'Visited' : 'Visit'
          }</button>
    `;
    listEl.appendChild(liEL);
  });
};

const addImage = (e) => {
  const buttonName = e.innerText;
  if (buttonName === 'Visit') {
    e.innerText = 'Visited';
    const id = e.parentElement.id;
    const object = countriesName.find((obj) => obj.id == id);
    object.isVisited = true;
    console.log(countriesName);
    flag.push(object);
    showItem(object);
    return;
  }
};

const showItem = (object) => {
  const liEl = document.createElement('li');
  liEl.id = `${object.id}`;
  liEl.innerHTML = `
    <div class="image">
      <img src=${object.img} alt=${object.name} />
      <div class="content">
        <span class="name">${object.name}</span>
        <button  onclick="deleteItem(${object.id})">Remove</button>
      </div>
    </div>`;
  visitEl.appendChild(liEl);
};

const deleteItem = (id) => {
  flag = flag.filter((item) => item.id !== id);
  visitEl.innerHTML = '';
  flag.map((item) => showItem(item));

  countriesName = countriesName.map((item) => {
    if (item.id === id) {
      return { ...item, isVisited: false };
    } else {
      return item;
    }
  });

  addCountries();
};

init();
