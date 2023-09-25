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

const setInfoUser = (usuariox) => {

    const card = document.createElement('div');
    card.classList.add('profile', 'container');

    const userElements = {
        user_name: document.createElement('h2'),
        age: document.createElement('h3'),
        description: document.createElement('p'),
        bandsList: document.createElement('ul'),
        bands: []
    };
    
    userElements.user_name.textContent = usuariox.user_name;
    userElements.age.textContent = usuariox.age + ' years old';
    userElements.description.textContent = usuariox.description;
    usuariox.fav_music.bands.forEach(bandTxt => {
        const liElement = document.createElement('li');
        liElement.textContent = bandTxt;
        userElements.bandsList.appendChild(liElement);
    });

    card.append(userElements.user_name, userElements.age, userElements.description, userElements.bandsList);
    return card;
}

users.forEach(user => {
    const card = setInfoUser(user);
    CARD_SECTION.appendChild(card);
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