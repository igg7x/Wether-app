import { Wether } from "./Wether.js";
const searchBarEl = document.querySelector(".search-bar");
const searchButtonEl = document.querySelector(".search-button");

const {
  VITE_API_URL: apiUrl,
  VITE_API_KEY: apiKey,
  VITE_API_HOST: apiHost,
} = import.meta.env;

const wether = new Wether(apiUrl, apiKey, apiHost);
wether.fetchWeather();
console.log(wether);

searchButtonEl.addEventListener("click", () => {
  wether.search(searchBarEl.value, () => {
    console.log(searchBarEl.value);
    searchBarEl.value = "";
  });
});

searchBarEl.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    const { target } = e;
    wether.search(target.value, () => {
      target.value = "";
    });
  }
});
