<script>
	export let dapp;
</script>

<style>
	a {
		display: flex;
		margin: 16px 8px;
		text-decoration: none;
		color: black;
	}

	@media screen and (min-width: 35em) {
		a {
			margin: 32px 16px;
		}
	}

	img {
		flex-shrink: 0;
    background-color: white;
    display: block;
    max-width: 100%;
    height: 64px;
    width: 64px;
    box-shadow: rgba(0, 0, 0, 0.1) 1px 0px 16px 0px;
    border-radius: 16px;
	}

	div {
		margin-left: 16px;
	}

	h3 {
		margin-bottom: 4px;
    font-size: 16px;
    line-height: 1.45;
    font-weight: 600;
    display: inline-block;
	}

	h4 {
		font-weight: 100;
		font-size: 14px;
	}
</style>

<a href={`https://scheme.elastos.org/app?id=${dapp.packageName}`} target="_blank">
	<img src={`https://dapp-store.elastos.org/apps/${dapp._id}/icon`} alt={dapp.appName} />
	<div>
		<h3>{dapp.appName}</h3>
		<h4>{dapp.appShortDescription || dapp.appDescription}</h4>
	</div>
</a>