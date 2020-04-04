
<style>
  .horizontal-slider {
    width: 100%;
    overflow: scroll;
  }
  .horizontal-slider::-webkit-scrollbar {
    display: none;
  }
  .slider {
    padding: 0 24px;
    white-space: nowrap;
    width: fit-content;
  }
</style>

<div class="horizontal-slider">
  <div class="slider">
    <slot></slot>
  </div>  
</div>