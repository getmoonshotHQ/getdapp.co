<script>
  export let title = '';
  export let subtitle = '';
  export let iconSrc = '';
  export let whitetext = false;
  export let sponsored = false;
  export let ghost = false;
  export let id = '0'; // useless, side effect of onresize implementation

  import Icon from './Icon.svelte';

  function stringToColor(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    let color = '';
    for (let i = 0; i < 3; i++) {
      let value = (hash >> (i * 8)) & 0xFF;
      color += ('00' + value.toString(16)).substr(-2);
    }
    return color;
  }
</script>

<style>
  .dapp {
    display: inline-block;
    /* margin: 6px 3.5px; */
    margin: 6px 4px;
    min-height: 100px;
    text-align: center;
    width: 72px;
    vertical-align: top;
    padding: 2px;
    white-space: normal;
    position: relative;

  }
  .title {
    font-size: 11px;
    text-align: left;
    line-height: 12px;
    padding-left: 3px;
  }
  .subtitle {
    color: rgba(0, 0, 0, 0.38);
    font-size: 9px;
    font-weight: 400;
    line-height: 11px;
    text-align: left;
    margin-top: 4px;
    opacity: 0;
  }
  .whitetext .title {
    color: white;
  }
  .whitetext .subtitle {
    color: rgba(255, 255, 255, 0.87);
  }
  .sponsored-star {
    position: absolute;
    top: -2px;
    right: -2px;
    height: 20px;
    width: 20px;
    background-color: #5595ff;
    border-radius: 50%;
    border: 1px solid white;
  }
  .sponsored-star img {
    position: relative;
    top: -1px;
  }
</style>

<div class="dapp" on:click class:whitetext class:sponsored class:ghost>
  {#if !ghost}
    <Icon alt={`${title} logo`} {iconSrc} />
    <div class="title">{title}</div>
    <div class="subtitle">{subtitle}</div>
    {#if sponsored}
      <div class="sponsored-star">
        <img alt="sponsored-star" src="star-icon.svg" />
      </div>
    {/if}
  {/if}
</div>