fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // Get all the countries from Asia continent / region using Filter function
    const countriesInAsia = data.filter(country => country.region === 'Asia');

    // Get all the countries with a population of less than 2 lakhs using Filter function
    const countriesWithPopulationLessThan2Lakhs = data.filter(country => country.population < 200000);

    // Print the following details name, capital, flag, using forEach function
    data.forEach(country => {
      console.log("Name:", country.name.common);
      console.log("Capital:", country.capital[0]);
      console.log("Flag:", country.flags.png);
    });

    // Print the total population of countries using reduce function
    const totalPopulation = data.reduce((acc, country) => acc + country.population, 0);
    console.log("Total Population:", totalPopulation);

    // Print the country that uses US dollars as currency
    const countryWithUSD = data.find(country => country.currencies.USD);
    console.log("Country with US dollars as currency:", countryWithUSD.name.common);
  })
  .catch(error => console.log("Error:", error));
