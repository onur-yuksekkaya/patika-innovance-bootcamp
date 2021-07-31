import GetService from './services/GetService';

const PopularLanguage = () => {
  const uniqueCountryLanguages = new Set();
  const countryLanguages = [];
  const result = [];
  const { countries } = GetService();

  const getCountries = (data) => {
    data.forEach((element) => {
      element.languages.forEach((languages) => {
        uniqueCountryLanguages.add(languages.name);
        countryLanguages.push(languages.name);
      });
    });
    uniqueCountryLanguages.forEach((element) => {
      const sameLanguages = countryLanguages.filter((item) => item === element);
      result.push({ name: element, count: sameLanguages.length });
    });
    result.sort((b, a) => a.count - b.count);
    return result.slice(0, 10);
  };
  const topTen = getCountries(countries);

  return { topTen };
};

export default PopularLanguage;
