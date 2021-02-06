fetch('https://restcountries.eu/rest/v2/all')
.then(res => res.json())
.then(data => displayCountry(data))

const displayCountry = countries =>{
        const countriesDiv = document.getElementById('countries');
        for (let i = 0; i < countries.length; i++) {
            const country = countries[i];
            const countryDiv = document.createElement('div');
            countryDiv.className = 'country';
            const countryInfo = `
                <h2 class="name">${country.name}</h2>
                <h4 class="capital">${country.capital}</h4>
                <button onClick= "displayCountryDetail('${country.name}')">Details</button>           
            `
            countryDiv.innerHTML = countryInfo;
            countriesDiv.appendChild(countryDiv);
        }

}

const displayCountryDetail = name =>{
    fetch(`https://restcountries.eu/rest/v2/name/${name}`)
    .then(res => res.json())
    .then(data => displayCountryInfo(data[0]))
}

const displayCountryInfo = country =>{
    const countryDetail = document.getElementById('countryDetail');
    countryDetail.innerHTML = `
        <h2>${country.name}</h2>
        <p>Population: ${country.population}</p>
        <p>Area: ${country.area} km<sup>2</sup></p>
        <p>Region: ${country.region}</p>
        <p>Language: ${country.languages[0].name}</p>
        <p>Currency: ${country.currencies[0].name}</p>
        <img src="${country.flag}" >        
    `
}