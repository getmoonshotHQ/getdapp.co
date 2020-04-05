<style>
  .promo-carousel {
    width: 100%;
    overflow: hidden;
  }

  .slider {
    white-space: nowrap;
    transition: left .42s;
    width: 100%;
    position: relative;
    padding: 0 24px;
    overflow-x: scroll;
    overflow-y: hidden;

    display: flex;
    align-items: stretch;

    -webkit-overflow-scrolling: auto;
  }

  .slider::-webkit-scrollbar {
    display: none;
  }

  .item {
    flex: 1;
    background-size: cover;
    border-radius: 8px;
    display: inline-block;
    margin-right: 17px;
  }
  .item:last-child {
    margin-right: 0;
  }
  .dots {
    display: none;
    height: 20px;
    line-height: 20px;
    text-align: center;
  }
  .dot {
    border: 2px solid black;
    border-radius: 50%;
    display: inline-block;
    height: 10px;
    width: 10px;
    margin: 0 3px;
    vertical-align: middle;
  }
  .dot.selected {
    background-color: black;
  }

  @media (max-width: 900px) {
    .slider {
      display: block;
    }

    .item {
      width: 100%;
      height: 100%;
      /*max-height: 188px;  0.6351 ratio
      max-width: 296px;*/
    }

    .item:last-child {
      margin-right: 17px;
    }

    .dots {
      display: block;
    }
  }
</style>
<script>
  import { onMount } from 'svelte';
  let sliderElement = null;
  let fullWidthItemWidth = 0;

  const carouselItems = [
    {
      color: 'linear-gradient(to right, #ece9e6, #cdefff);',
      imageUrl: 'promo_images/greenpass.jpg',
      url: 'https://mygreenpass.life/',
      name: 'GreenPass',
    },
    {
      color: 'linear-gradient(to right, #ece9e6, #cdefff);',
      imageUrl: 'promo_images/hyper.jpg',
      url: 'https://www.hyper.im',
      name: 'Hyper',
    },
    {
      color: 'linear-gradient(to right, #ece9e6, #cdefff);',
      imageUrl: 'promo_images/academy.jpg',
      url: 'https://elastos.academy/',
      name: 'Elastos Academy',
    },
    {
      color: 'linear-gradient(to right, #ece9e6, #cdefff);',
      imageUrl: 'promo_images/cr.jpg',
      url: 'https://www.cyberrepublic.org/',
      name: 'Cyber Republic',
    },    
  ];

  const itemMarginWidth = 17;
  let currentItemIndex = 0;
  let rotateIntervalHandler = null;
  let scrollUnitLength = 0;
  let itemWidth = 0;

  function setCurrentItem(index) {
    currentItemIndex = index;
    sliderElement.scroll({
      top: 0,
      left: (scrollUnitLength) * currentItemIndex,
      behavior: 'smooth',
    });
  }

  function startRotating() {
    scrollUnitLength = itemWidth + itemMarginWidth / 2;
    let scrollOffset = itemMarginWidth;
    rotateIntervalHandler = setInterval(() => {
      if (currentItemIndex < carouselItems.length - 1) {
        currentItemIndex++;
        sliderElement.scroll({
          top: 0,
          left: sliderElement.children[currentItemIndex].offsetLeft - itemMarginWidth - 4,
          behavior: 'smooth',
        });
      } else {
        currentItemIndex = 0;
        sliderElement.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
      }
    }, 4200);
  }

  // probablyStopped accounts for inertial touch scrolling time
  function sliderTouchEndHandle(probablyStopped) {
    clearInterval(rotateIntervalHandler);
    const closestIndex =
        Math.floor((sliderElement.scrollLeft + itemWidth / 2) / itemWidth);
    currentItemIndex = closestIndex;
    if (probablyStopped) {
      startRotating();
    } else {
      setTimeout(() => {
        sliderTouchEndHandle(true);
        sliderElement.scroll({
          top: 0,
          left: sliderElement.children[currentItemIndex].offsetLeft - itemMarginWidth - 4,
          behavior: 'smooth',
        });
      }, 120);
    }
  }

  function prepareElementSizes() {
    fullWidthItemWidth =
        (sliderElement.getBoundingClientRect().width - 2 * itemMarginWidth) * 0.635135;
    let quarterWidthItemWidth = sliderElement.getBoundingClientRect().width * 0.141;
    sliderElement.style.height = window.innerWidth > 900 ?
        `${quarterWidthItemWidth}px` :
        `${fullWidthItemWidth}px`;
    if (window.innerWidth > 900) {
      itemWidth = quarterWidthItemWidth ;
    } else {
      itemWidth = fullWidthItemWidth * 1.57446;
    }
  }

  onMount(() => {
    prepareElementSizes();
    
    startRotating();
    sliderElement.addEventListener('touchend', () => {
      sliderTouchEndHandle(false);
    });
    sliderElement.addEventListener('mousewheel', (e) => {
      e.preventDefault();
    }, { passive: true });
    sliderElement.addEventListener('touchstart', () => {
      clearInterval(rotateIntervalHandler);
    }, { passive: true });
    window.addEventListener('resize', () => {
      prepareElementSizes();
    });
  });
  
</script>

<div class="promo-carousel">
  <div class="slider" bind:this={sliderElement}>
    {#each carouselItems as item}
        <a class="item" href={`${item.url}?utm_source=getdapp`} target="_blank" rel="noopener" style={`background-image: url(${item.imageUrl}); background-color: ${item.color};`}></a>
    {/each}
  </div>
  <div class="dots">
    {#each carouselItems as item, index}
      <div class="dot" class:selected={currentItemIndex === index} on:click={() => { setCurrentItem(index);}}></div>
    {/each}
  </div>
</div>