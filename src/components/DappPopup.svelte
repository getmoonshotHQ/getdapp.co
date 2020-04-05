<script>
  export let dapp;
  export let close;

  import Icon from './Icon.svelte';
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';

  let topPosition;
  let popupElement;

  let backdropElement;

  onMount(() => {
    const heightSurplus = Math.min(popupElement.offsetHeight - 304, 300);
    if (heightSurplus > 0) {
      popupElement.style.top = `calc(50vh - ${170 + heightSurplus/2}px`;
    }
  });

  function navigateToDappSite(url) {
    window.location.href = url;
  }
</script>

<style>
  .dapp-popup {
    position: relative;
  }
  .dapp-popup-container {
    background-color: white;
    border-radius: 16px;
    box-shadow: 0px 24px 48px rgba(43, 59, 90, 0.4);
    left: 0;
    margin: 0 auto;
    min-height: 244px;
    padding: 24px;
    position: fixed;
    right: 0;
    top: calc(50vh - 150px);
    touch-action: none;
    width: 312px;
    z-index: 10;
  }
  .backdrop {
    background-color: #5c74a1;
    bottom: 0;
    left: 0;
    opacity: .7;
    position: fixed;
    right: 0;
    top: 0;
    touch-action: none;
    z-index: 9;
  }
  .close {
    position: absolute;
    right: 21px;
    top: 21px;
  }
  .title-bar {
    display: flex;
  }
  .title-bar--left,
  .title-bar--right {
    display: inline-block;
  }
  .title-bar--right {
    padding-left: 16px;
    padding-top: 8px;
  }
  .sponsored,
  .category {
    font-weight: 400;
    text-transform: uppercase;
    font-size: 10px;
    line-height: 12px;
  }
  .title {
    font-size: 20px;
    line-height: 24px;
    margin: 2px 0;
  }
  .sponsored {
    color: #5595ff;
  }
  .description {
    padding: 24px 0;
  }
  .label {
    font-size: 12px;
    margin-bottom: 6px;
  }
  .content {
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    color: rgba(0, 0, 0, 0.38);
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 7;
    -webkit-box-orient: vertical;
  }
  .content p {
    margin: 0;
    padding: 0;
  }
  .button {
    background-color: #e5efff;
    border-radius: 20px;
    color: #5595ff;
    font-size: 16px;
    height: 40px;
    line-height: 40px;
    padding: 0 12px;
    text-align: center;
  }
  .button:active {
    background: #5595ff; color: #fff; transition: all 0.1s ease-in-out;
  }
</style>

<div class="dapp-popup">
  <div class="dapp-popup-container" bind:this={popupElement} in:fly="{{duration: 300, x: 0, y: 500, opacity: 0.5, easing: quintOut}}" out:fade="{{duration: 170}}">
    <div class="title-bar">
      <div class="title-bar--left">
        <Icon alt={dapp.name} iconSrc={`https://dapp-store.elastos.org/apps/${dapp.packageName}/icon`} />
      </div>
      <div class="title-bar--right">
        <div class="category">{dapp.category}</div>
        <div class="title">{dapp.appName}</div>
        {#if dapp.featured === 1}<div class="sponsored">sponsored</div>{/if}
      </div>
    </div>
    <div class="description">
      <div class="label">Description</div>
      <div class="content">{@html dapp.description
          .replace('<script>', '')
          .replace('</script>', '')
          .replace('<p>', '')
          .replace('</p>','')}</div>
    </div>
    <div class="button" on:click={() => { navigateToDappSite(`https://scheme.elastos.org/app?id=${dapp.packageName}`); }}>GO</div>
    <div class="close" on:click={() => { close(); }}>
      <img alt="close" src="close-icon.svg" />
    </div>
  </div>
  <div bind:this={backdropElement} class="backdrop" on:click={() => { close(); }} transition:fade="{{duration: 170, easing: quintOut}}"></div>
</div>