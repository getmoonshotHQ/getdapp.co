<style>
	main {
		max-width: 1000px;
    margin: 0 auto;
    overflow: hidden;
		font-family: 'Lato', sans-serif;
		font-weight: 600;
		font-size: 16px;
		line-height: 1.5;
		color: #333;
	}

	header {
		display: flex;
		padding: 32px;
		font-size: 16px;
		line-height: 18px;
		font-family: 'Lato', sans-serif;
	}

	header img {
		margin-left: 6px;
	}
	footer {
    line-height: 80px;
    margin: 20px auto 0 auto;
    color: #555;
	}
</style>

<header>
	 	<em>powered by</em> <a href="https://www.elastos.org/" target="_blank"><img src="elastos.png" width="auto" height="20" alt="Elastos" /></a>
</header>
<main>
	<slot></slot>
</main>
