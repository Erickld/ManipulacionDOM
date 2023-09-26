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


///-------AÑADIENDO MULTIPLES USUARIOS PREESTABLECIDOS---------------->
///------------------------------------------------------------------->

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
    //Se crea un elemento "div" y se le agregan clases
    const card = document.createElement('div');
    card.classList.add('profile', 'container');
    //Se crean los elementos hijos del "div" que contendrán la info del usuario
    const userElements = {
        user_name: document.createElement('h2'),
        age: document.createElement('h3'),
        description: document.createElement('p'),
        bandsList: document.createElement('ul'),
        bands: []
    };
    //Se establece el valor de los elementos hijos con la info proveniente del usuario 
    userElements.user_name.textContent = usuariox.user_name;
    userElements.age.textContent = usuariox.age + ' years old';
    userElements.description.textContent = usuariox.description;
    //Se obtienen las bandas y se crean elementos "li" por cada banda, para posteriormente almacenarlos en la lista desordenada "ul"
    usuariox.fav_music.bands.forEach(bandTxt => {
        const liElement = document.createElement('li');
        liElement.textContent = bandTxt;
        userElements.bandsList.appendChild(liElement);
    });
    //Se agregan los elementos hijos al elemento padre "div" y lo retornamos
    card.append(userElements.user_name, userElements.age, userElements.description, userElements.bandsList);
    return card;
}

users.forEach(user => {
    const card = setInfoUser(user);
    CARD_SECTION.appendChild(card);
})


//-----------AÑADIENDO NUEVOS USUARIOS CON INPUTS Y BOTON------------->
///------------------------------------------------------------------->
const setNewUser = (usuariox) => {
    //Se crea un elemento "div" y se le agregan clases
    const card = document.createElement('div');
    card.classList.add('profile', 'container');
    //Se crean los elementos hijos del "div" que contendrán la info del nuevo usuario
    const userElements = {
        user_name: document.createElement('h2'),
        age: document.createElement('h3'),
        email: document.createElement('p')
    };
    //Se establece el valor de los elementos hijos con la info proveniente del usuario 
    userElements.user_name.textContent = usuariox.user_name;
    userElements.age.textContent = usuariox.age + ' years old';
    userElements.email.textContent = usuariox.email;
    //Se agregan los elementos hijos al elemento padre "div" y lo retornamos
    card.append(userElements.user_name, userElements.age, userElements.email);
    return card;
}


const addBTN = document.getElementById('profileBtn');
addBTN.addEventListener('click', () => {
    //Leer inputs
    const inputName = document.getElementById('name');
    const inputAge = document.getElementById('user-age');
    const inputEmail = document.getElementById('email');

    //validar que los inputs tengan valores correctos
    if (inputName.value == "") {
        return alert ('Ingresa un nombre de usuario')
    };

    if (inputAge.value == "" || isNaN(inputAge.value) || inputAge.value <= 0) {
        return alert ('Ingresa una edad de usuario válida')
    };

    if (inputEmail.value == "") {
        return alert ('Ingresa una dirección de correo válida')
    };

    //Se crea el objeto new user con los valores válidos
    const newUser = {
        user_name: inputName.value,
        age: inputAge.value,
        email: inputEmail.value
    };

    //Se crea la card del nuevo usuario y se agrega al contenedor CARD_SECTION
    const newUserCard = setNewUser(newUser);
    CARD_SECTION.appendChild(newUserCard);

    //Se limpian los valores de los inputs
    inputName.value = "";
    inputAge.value = "";
    inputEmail.value = "";

    //Se avisa que se ha agregado nuevo usuario al contenedor
    return alert ('Carta de nuevo usuario agregada correctamente.');
});