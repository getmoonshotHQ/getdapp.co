<style>
  .dapps-array {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    /*text-align: center;*/
  }
  @media (min-width: 900px) {
    .dapps-array :global(.dapp) {
      margin-right: 29px;
    }
  }
</style>
<div class="dapps-array">
  <slot></slot>
</div>