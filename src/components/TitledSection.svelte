<script>
  export let title;
  export let noborder = false;
  export let nopadding = false;
</script>

<style>
  .titled-section {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    padding: 24px;
    position: relative;
  }
  .titled-section.noborder {
    border: none;
  }
  .titled-section.nopadding {
    padding: 24px 0 12px 0;
  }
  .title {
    margin-bottom: 24px;
  }
  .nopadding .title {
    padding-left: 24px;
  }
</style>

<div class="titled-section" class:noborder class:nopadding>
  <div class="title">{title}</div>
  <slot></slot>
</div>