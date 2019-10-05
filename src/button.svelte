<style>
  button {
    font: 20px;
    padding: 0.15rem 0.5rem;
    background-color: cadetblue;
    border: 0;
    cursor: pointer;
    color: white;
    padding: 4px 10px;
    display: flex;
    align-items: center;
    height: 36px;
    margin: 0;
    border-radius: 3px;
  }
</style>

<button on:click>
  <slot />
</button>
