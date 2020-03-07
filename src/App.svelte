<script>
	let src = 'elastos.png'
</script>

<main>
	<img src={src} width="200px" height="auto" alt="Elastos">
</main>

<style>
	main {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>