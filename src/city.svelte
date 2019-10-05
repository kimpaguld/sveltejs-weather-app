<script>
  import moment from "moment";
  import "moment/locale/sv.js";
  moment.locale("sv");
  export let temp;
  export let icon;
  export let time;
  export let description;
  export let wind;
</script>

<style>
  .wrapper {
    margin: 0 0 20px 0;
    border-radius: 3px;
    display: flex;
    align-items: center;
    background: cadetblue;
  }
  .inner {
    display: flex;
    flex-direction: row;
    flex: 1;
    color: #fff;
  }
  .column {
    flex: 1;
  }
  h1 {
    font-size: 1rem;
    margin: 0 0 4px;
  }
  p {
    line-height: 1.1;
    margin: 0;
  }
  .mb {
    margin-bottom: 4px;
  }
</style>

<div class="wrapper">
  <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="icon" />
  <div class="inner">
    <div class="column">
      <h1>{moment(time).calendar()}</h1>
      <p>{description}</p>
    </div>
    <div class="column">
      <p class="mb">{Math.round(temp)} grader</p>
      <p>Speed: {wind} sm</p>
    </div>
  </div>
</div>
