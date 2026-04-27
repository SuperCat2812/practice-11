(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();function l(e){return fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${e}&limit=1&appid=95632b02f9162f375a368971925f5209`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}function u(e,r){return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${e}&lon=${r}&appid=95632b02f9162f375a368971925f5209&units=metric`).then(i=>{if(!i.ok)throw new Error(i.status);return i.json()})}const c={form:document.querySelector(".js-search-form"),weatherContainer:document.querySelector(".js-weather-wrapper")};function a(e){const r=new Date(e*1e3),i=String(r.getHours()).padStart(2,"0"),n=String(r.getMinutes()).padStart(2,"0");return`${i}:${n}`}function f(e){return console.log(e),`<div class="weather-card">
        <h2 class="city-name">${e.name}</h2>
        <ul class="weather-info list">
          <li class="weather-info-item">
            <p class="temp">
              Температура: ${e.main.temp}<sup>&#176;</sup>
            </p>
          </li>
          <li class="weather-info-item">
            <p class="feels-like-temp">
              Відчувається як: ${e.main.feels_like}<sup>&#176;</sup>
            </p>
          </li>
          <li class="weather-info-item">
            <p class="sunrise-time">Схід сонця: ${a(e.sys.sunrise)}</p>
          </li>
          <li class="weather-info-item">
            <p class="sunset-time">Захід сонця: ${a(e.sys.sunset)}</p>
          </li>
          <li class="weather-info-item">
            <p class="clouds">Хмарність: ${e.clouds.all}%</p>
          </li>
        </ul>
      </div>
    `}function p(e){e.preventDefault();const r=e.target.elements.user_country.value.trim();if(!r)return alert("Заповніть поле пошуку!");l(r).then(i=>{if(i.length===0)return alert("Міста не знайдено!");const{lat:n,lon:t}=i[0];return u(n,t).then(s=>{const o=f(s);c.weatherContainer.innerHTML=o}).catch(s=>console.log(s))})}c.form.addEventListener("submit",p);
//# sourceMappingURL=index.js.map
