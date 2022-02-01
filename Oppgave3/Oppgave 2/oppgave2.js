const users = [
    { id: 0, name: "Trude", age: 77 },
    { id: 1, name: "Simen", age: 85 },
    { id: 2, name: "Lars", age: 99 },
    { id: 3, name: "Ali", age: 34 },
    { id: 4, name: "Finn", age: 60 },
    { id: 5, name: "Kåre", age: 70 },
    { id: 6, name: "Hanne", age: 20 },
    { id: 7, name: "Åse", age: 21 },
    { id: 8, name: "Anne", age: 6 },
    { id: 9, name: "Amanda", age: 31 },
    { id: 10, name: "Morgan", age: 87 }
];

// TODO: Hent HTML #id med getElementById 
const searchInput = document.getElementById("name");
const filterInput = document.getElementById("age");
const filterButton = document.getElementById("filter");
const userUl = document.getElementById("users");

//kommuniserte med gruppa (Hallvard Dahle og Tore Pedersen) da jeg gjorde oppgava. 

const createTableUI = (users) => {
    userUl.innerHTML = null;
    userUl.innerHTML += `<li><span>Id</span><span>Navn</span><span>Alder</span></li>`;
    for (const user of users) {
        userUl.innerHTML += `<li><span>${user.id}</span><span>${user.name}</span><span>${user.age}</span></li>`;
    }
};

const handleSearch = (inputSearch) => {
    // TODO: Hent ut verdien fra søke input feltet 
    //HENTER INPUT VALUE FRA SEARCH. 
    const searchNameValue = inputSearch.target.value.toLowerCase();
    console.log(searchNameValue);

    //SJEKKER OM LISTA INNEHOLDER NAVNET. 
    //const searchList = users.find(searchedName => searchedName.name.toLowerCase() === searchNameValue.toLowerCase());
    //console.log(searchList);

    // TODO: Bruk .find for å finne navnet til den brukeren som matcher søkeordet 
    if (searchList = users.find(searchedName => searchedName.name.toLowerCase() === searchNameValue.toLowerCase())) {
        let userId = searchList;
        console.log(userId);
        // TODO: Oppdatere grensesnittet med createTableUI og resultatet av søket 
        userUl.innerHTML = null;
        userUl.innerHTML += `<li><span>Id</span><span>Navn</span><span>Alder</span></li>`;
        userUl.innerHTML += `<li><span>${userId.id}</span><span>${userId.name}</span><span>${userId.age}</span></li>`;
    }
    // TODO: Oppdatere grensesnittet med userUl.innerHTML og en passende tekst når vi ikke finner noe 
    else if (searchNameValue !== searchList) {
        userUl.innerHTML = `<li>` + `Finner ingen personer ved det navnet.` + `</li>`;
    }
    // TODO: Hvis ingen søkeord vis default liste med brukere via createTableUI 
    if (searchInput.value == 0 || searchInput.value == undefined || searchInput.value.trim() == ``) {
        main();
    }
};

const handleFilter = () => {
    // TODO: Hent ut verdien fra filter input feltet 
    const filterValue = filterInput.value;
    console.log(filterValue);
    const numberOfFilter = parseInt(filterValue);
    console.log(numberOfFilter);
    const checkNumber = Number.isNaN(numberOfFilter);
    console.log(checkNumber);

    // TODO: Bruk .filter for å hente ut de brukeren  som har en alder høyere en filterverdien 
    const userAge = users.filter(agePerson => {
        return agePerson.age > filterValue;
    })
    console.log(userAge);

    //SORTERER ARRAY FRA LAVEST --> HØYEST
    const sortByAge = users.sort(function (a, b) {
        return a.age - b.age;
    });
    console.log(sortByAge);

    //HØYEST ALDER)
    const highestAge = sortByAge[sortByAge.length - 1].age;
    console.log(highestAge);

    //LAVEST ALDER)
    const lowestAge = sortByAge[0].age;
    console.log(lowestAge);

    userUl.innerHTML = null;

    //TODO: Hvis ingen filter eller filteret ikke er et tall vis default liste med brukere via createTableUI 
    if (filterInput.value == null || typeof filterInput === 'string' || checkNumber === true) {
        userUl.innerHTML = null;
        main();
    }
    // TODO: Oppdatere grensesnittet med userUl.innerHTML og en passende tekst når vi ikke finner noe 
    else if (numberOfFilter >= highestAge) {
        userUl.innerHTML = `<li>` + `Finner ingen personer som har høyere alder.` + `</li>`;
    }
    // TODO: Oppdatere grensesnittet med createTableUI og resultatet av filteret 
    else if (typeof numberOfFilter === 'number') {
        userUl.innerHTML += `<li><span>Id</span><span>Navn</span><span>Alder</span></li>`;
        for (i = 0; i < userAge.length; i++) {
            userUl.innerHTML +=
                `<li>
            <span>` + userAge[i].id + `</span>
            <span>` + userAge[i].name + `</span>
            <span>` + userAge[i].age + `</span>
            </li>`
        }
    }
    else {
        main();
    }
};

const main = () => {
    createTableUI(users);
};

main();

// TODO: Lytt til tastatur klikk på søkefeltet, den skal trigge søkefunksjonen (handleSearch) 
searchInput.addEventListener('input', handleSearch);
// TODO: Lytt til klikk på filter-knappen, den skal trigge filterfunksjonen (handleFilter) 
filterButton.addEventListener('click', handleFilter);