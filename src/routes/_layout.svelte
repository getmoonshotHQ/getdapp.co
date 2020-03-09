<style>
	main {
		margin-left: auto;
    margin-right: auto;
    width: 100%;
		max-width: 1280px;
		font-family: 'Lato', sans-serif;
	}

	header {
		display: flex;
		justify-content: center;
		align-content: center;
		text-align: center;
		padding: 32px;
		border-bottom: 1px solid rgb(240, 240, 240);
		font-size: 16px;
		line-height: 16px;
		font-family: 'Lato', sans-serif;
	}

	header img {
		margin-left: 8px;
	}
</style>

<header>
	<em>powered by</em> <a href="https://www.elastos.org/" target="_blank"><img src="elastos.png" width="auto" height="20" alt="Elastos" /></a>
</header>
<main>
	<slot></slot>
</main>