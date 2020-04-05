<script>
  import Dapp from './Dapp.svelte';
  import { onMount } from 'svelte';

  export let dapp;
  export let onDappPicked;

  let mainref;

  onMount(() => {
    if (dapp.color) {
      mainref.style.setProperty('--featured-color', dapp.color);
      mainref.style.setProperty('--featured-color-lighter', `${dapp.color}b3`);
      mainref.style.setProperty('--featured-color-shadow', `${dapp.color}4d`);
    }
  });
</script>

<style>
  .featured-dapp {
    display: inline-block;
    overflow: hidden;
    text-align: center;
    height: 140px;

    --featured-color: #949494;
    --featured-color-lighter: #949494b3;
    filter: drop-shadow(0px 5px 6px var(--featured-color-shadow));
  }
  .background-shape {
    position: absolute;
    top: 13px;
    left: 0;
    z-index: 1;
    background-color: var(--featured-color);

    border-radius: 21px;
    height: 115px;
    width: 88px;
  }
  .dapp-positioner {
    position: absolute;
    z-index: 2;
    left: 0;
    right: 0;
    top: -20px;
  }
  .shadow-buffer {
    height: 140px;
    width: 88px;
    position: relative;
    margin: 12px 5px 10px 5px;
  }
  .featured-dapp:first-child .shadow-buffer {
    margin-left: 0;
  }

  /*.eth .background-shape {
    background: linear-gradient(180deg, #949494 0%, #5C5C5C 102.86%);
  }
  .tron .background-shape {
    background: linear-gradient(180deg, #FF6969 0%, #DB3434 111.43%);
  }
  .ont .background-shape {
    background: linear-gradient(180deg, #1778D1 0%, #0A3892 111.43%, #0A3892 111.43%);
  }

  .eth {
    filter: drop-shadow(0px 5px 6px rgba(92, 92, 92, 0.3));
  }
  .tron {
    filter: drop-shadow(0px 5px 6px rgba(219, 52, 52, 0.3));
  }
  .ont {
    filter: drop-shadow(0px 5px 6px rgba(10, 56, 146, 0.3));
  }*/

  @media (min-width: 900px) {
    .featured-dapp {
      height: 180px;
      margin-right: 8px;
    }
    svg {
      transform: scale(1.19);
    }
    .shadow-buffer {
    height: 180px;
    width: 105px;
    position: relative;
    margin: 30px 5px 10px 5px;
  }
  }
</style>

<div bind:this={mainref} class="featured-dapp">
  <div class="shadow-buffer">
    
    <svg width="88" height="115" xmlns="http://www.w3.org/2000/svg">
      <path stroke="none" fill={dapp.color} d="M68.4,115H19.6C8.8,115,0,106.2,0,95.4V19.6C0,5.8,14-3.7,26.9,1.4l48.8,19.5c7.5,3,12.4,10.2,12.3,18.2v56.3 C88,106.2,79.2,115,68.4,115z"/>
    </svg>
    <div class="dapp-positioner">
      <Dapp
          whitetext
          on:click={() => { onDappPicked(dapp); }}
          title={dapp.title}
          subtitle={``}
          iconSrc={`${dapp.logo}`}
          sponsored={dapp.featured === 1}
        />
    </div>
    <!--div class="background-shape">
    </div-->
  </div>
</div>