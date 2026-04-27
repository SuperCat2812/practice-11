import { getCityCoordinetes, getWeatherByCityName } from './openweathermap-api';
import { refs } from './refs';
import { createWeatherCardTemplate } from './render-function';

export function onFormSubmit(event) {
  event.preventDefault();
  const cityName = event.target.elements.user_country.value.trim();
  if (!cityName) {
    return alert('Заповніть поле пошуку!');
  }
  getCityCoordinetes(cityName).then(data => {
    if (data.length === 0) {
      return alert('Міста не знайдено!');
    }
    const { lat, lon } = data[0];
    return getWeatherByCityName(lat, lon)
      .then(data => {
        // data.sys.sunrise = convertSecondsToHoursAndMinutes(data.sys.sunrise);
        // data.sys.sunset = convertSecondsToHoursAndMinutes(data.sys.sunset);

        const weatherCardTemplate = createWeatherCardTemplate(data);

        refs.weatherContainer.innerHTML = weatherCardTemplate;
      })
      .catch(err => console.log(err));
  });
}
