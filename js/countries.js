const loadCountriesData = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountry(data))
}

const displayCountry = countries =>{
    const getSection = document.getElementById('container-section');
    countries.forEach(country =>{
        // console.log(country.cca2)
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
        <h3>Name:${country.name.common}</h3>
        <p>Capital:${country.capital ? country.capital[0] : 'no capital'}</p>
        <button onclick="getCountryDetail('${country.cca2}')">Get Details</button>`;
        getSection.appendChild(div);
    })
    
}

const getCountryDetail = code =>{
    const url = `https://restcountries.com/v3.1/alpha/${code}`;
    fetch(url)
    .then(res => res.json())
    .then(data => countryDetailsDisplay(data[0]))
}

const countryDetailsDisplay = country =>{
console.log(country);
const getDetails = document.getElementById('country-details');
getDetails.innerHTML = `
<h2>Country Name:${country.name.common}</h2>
<img src="${country.flags.png}"/>
`;
}

loadCountriesData();