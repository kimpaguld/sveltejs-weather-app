<script>
  import Button from "./button.svelte";
  import City from "./city.svelte";
  import { onMount } from "svelte";

  let city = "";
  let weatherData = {};
  let savedCities = [];
  let searchText = "Sök för att få en väderprognos";
  const apiKey = "a41a7b3c0d9a2d86a27432474e50eb34";
  const lang = "se";
  const nodes = "9";

  const fetchQuotes = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city},se&&lang=${lang}&units=metric&cnt=${nodes}&APPID=${apiKey}`
      );
      weatherData = await response.json();
      if (!response.ok) throw weatherData.message;
      if (!savedCities.includes(city)) {
        let cityList = [];
        cityList.push(city);
        savedCities = savedCities.concat(cityList);
      }
    } catch (err) {
      searchText = err;
    }
    city = "";
  };

  const setCity = e => {
    city = e.target.value;
  };

  const setSavedCityAndSearch = e => {
    city = e.target.value;
    fetchQuotes();
  };

  const searchCity = () => {
    fetchQuotes();
  };
</script>

<style>
  .wrapper {
    width: 50vw;
    margin: auto;
    margin-top: 40px;
  }
  form {
    width: 100%;
  }
  section {
    width: 100%;
    margin-bottom: 50px;
  }
  h1 {
    font-size: 20px;
    line-height: 1.2;
  }
  input {
    flex: 1;
    margin: 0 8px 0 0;
    height: 36px;
    border: 1px solid cadetblue;
    border-radius: 3px;
  }
  .search {
    display: flex;
  }
  button {
    font-size: 12px;
    margin-right: 10px;
    margin-top: 10px;
    border: 0;
    background-color: transparent;
    padding: 0;
    cursor: pointer;
  }
</style>

<div class="wrapper">
  <form on:submit|preventDefault={searchCity}>
    <h1>Sök väder i din stad</h1>
    <div class="search">
      <input type="text" id="title" value={city} on:input={setCity} />
      <Button type="submit">SÖK</Button>
    </div>
  </form>
  <section>
    {#each savedCities as savedCity}
      <button on:click={setSavedCityAndSearch} value={savedCity}>
        {savedCity}
      </button>
    {/each}
  </section>
  <section>
    {#if weatherData.list}
      <h1>Vädret just nu i {weatherData.city.name}</h1>
    {/if}
    {#if weatherData.list}
      {#each weatherData.list as day}
        <City
          time={day.dt_txt}
          wind={day.wind.speed}
          temp={day.main.temp}
          icon={day.weather[0].icon}
          description={day.weather[0].description} />
      {/each}
    {:else}
      <p>{searchText}</p>
    {/if}

  </section>
</div>
