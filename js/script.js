//Selector de Id
const title = document.getElementById('title1');

//Selector de Clase
const subtitle = document.getElementsByClassName('subtitulo');

//QuerySelector regresa el primer nodo que coincide, puede ser ID o Clase
const secondTitle = document.querySelector('.subtitulo');

//QuerySelectorAll regresa todos los nodos coincidentes de la clase
const subtitles = document.querySelectorAll('.subtitulo');

// console.log(title, subtitle, subtitles);

secondTitle.innerHTML = "DOM API";

//Creacion del perfil de usuario
const user = {
    name: 'Jane Doe',
    age: 25,
    email: 'jane@mail.com',
    favFilms: ['Spencer', 'Ice Age 3', 'Se7en', 'Inception', 'SAW'] 
};

function createUser(user) {

    document.getElementById('username').textContent = user.name;
    document.getElementById('age').textContent = user.age + ' years old';
    document.getElementById('mail').textContent = user.email;
    
    const ul = document.getElementById('fav-films');
    user.favFilms.forEach(film => {
        const li = document.createElement('li');
        li.textContent = film;
        ul.appendChild(li);
    });
}

createUser(user);


///-----------------CON MULTIPLES USUARIOS---------------->
///------------------------------------------------------->

const users = [
    {
        id: 1,
        user_name: 'Zabdiel Diaz',
        description: 'Me gustan los conejos',
        age: '25',
        fav_music: {
            bands: [
                'Rammstein', 'Interpol', 'TOOL', 'Black Sabbath'
            ]
        }
    },
    {
        id: 2,
        user_name: 'Fernando Aguilar',
        description: 'Me gusta el calor',
        age: '22',
        fav_music: {
            bands: [
                'Los Temerarios', 'Grupo Frontera', 'Conjunto Primavera', 'Tigres del Norte'
            ]
        }
    }
]

const CARD_SECTION = document.getElementById('profiles');

const createCard = () => {
    const card = document.createElement('div');
    card.classList.add('profile', 'container');
    return card;
}

const createDecription = () => {
    const userElements = {
        user_name: document.createElement('h2'),
        age: document.createElement('h3'),
        description: document.createElement('p'),
        bands: []
    }
    return userElements;
}


const populateElements = (user, userElements) => {
    userElements.user_name.textContent = user.user_name;
    userElements.age.textContent = user.age + ' years old';
    userElements.description.textContent = user.description;

    const bandList = user.fav_music.bands.map(e => {
        const pElement = document.createElement('p');
        pElement.textContent = e;
        return pElement;
    });

    userElements.bands = bandList;
    return userElements;
}

const rederedElements = (card, elements) => {
    card.append(elements.user_name, elements.age, elements.description);
    return card;
}

users.forEach(user => {
    const card = createCard();
    const userElements = createDecription();
    const elementWithData = populateElements(user, userElements);
    const renderElements = rederedElements(card, elementWithData);
    CARD_SECTION.appendChild(renderElements);
})


/*
//inputs
const inputName = document.getElementById('name');
//seccion donde se miestra el nombre del usuario
const userName = document.getElementById('username');

const profileBtn = document.getElementById('profileBtn');

profileBtn.addEventListener('click', () => {
    userName.textContent = inputName.value;
});
*/