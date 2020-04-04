<style>
  .icon {
    display: inline-block;
    height: 66px;
    line-height: 66px;
    margin-bottom: 4px;
    width: 66px;
    overflow: hidden;
    filter: drop-shadow(0px 2px 1px rgba(0, 0, 0, 0.15));
    position: relative;
  }
  .faux-border,
  .squircle-cut {
    background-color: white;
    clip-path: url(#squircle-clip);    
    height: 66px;
    width: 66px;
  }
  .faux-border {
    background-color: rgba(0, 0, 0, 0.08);
    position: absolute;
    top: 0;
    left: 0;
  }
  .squircle-cut {
    transform: scale(0.98) translate(0.2px, 0.6px);
  }
  .icon img {
    animation: fade-in .3s .15s forwards;
    display: inline-block;
    height: 66px;
    vertical-align: middle;
    width: 66px;
    position: relative;
    opacity: 0;
    outline: none;
    border: none;
    margin-top: -2px;
  }
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @media (min-width: 900px) {
    .icon {
      transform: scale(1.21);
      position: relative;
      top: -10px;
    }
  }
</style>

<script>
  export let iconSrc;
  export let alt;
</script>

<div class="icon">
  <div class="faux-border"></div>
  <div class="squircle-cut">
    {#if iconSrc !== null}<img {alt} src={`${iconSrc}`} />{/if}
    <svg width="72" height="72" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id="squircle-clip">
          <path d="M33.2,0C20.1,0,11.7,1.6,6.7,6.7c-5,5-6.7,13.4-6.7,26.6s1.6,21.5,6.7,26.6c5,5,13.4,6.7,26.6,6.7s21.5-1.6,26.6-6.7 c5-5,6.7-13.4,6.7-26.6s-1.6-21.5-6.7-26.6C54.8,1.6,46.4,0,33.2,0z"/>
        </clipPath>
      </defs>
    </svg>
  </div>
</div>