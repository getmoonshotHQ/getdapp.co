<style>
	main {
		display: flex;
		align-items: center;
		justify-content: center;
		height: calc(100vh - 25px);
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>

<main>
	<slot></slot>
</main>