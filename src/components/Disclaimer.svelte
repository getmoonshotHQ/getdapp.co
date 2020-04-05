<style>
  .disclaimer {
    animation: disclaimer-fade-in .3s 1s forwards;
    line-height: 80px;
    margin: 20px auto 0 auto;
    width: 86vw;
    color: #555;
    opacity: 0;
  }
  @keyframes disclaimer-fade-in {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
  .icon, .description {
    display: inline-block;
    font-weight: 400;
    position: relative;
  }
  .icon {
    width: 20vw;
    left: -17px;
    top: -10px;
    vertical-align: top;
  }

  .icon img {
    width: 27vw;
    max-width: 100px;
    height: 27vw;
    max-height: 100px;
  }
  .description {
    width: 64vw;
    font-size: 12px;
    line-height: 14px;
    left: -2vw;
    vertical-align: middle;
  }
  @media (min-width: 900px) {
    .icon {
      width: auto;
    }
  }
</style>
<div class="disclaimer">
  <div class="icon">
    <img alt="close" src="shield-icon.png" />
  </div>
  <div class="description">These Dapps/websites are maintained by third-party authors and are not affiliated with Elastos unless explicitly stated. Elastos is not liable for any third-party Dapps.</div>
</div>