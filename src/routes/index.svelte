<script context="module">
	export async function preload(page, session) {
		
		const res = await this.fetch('https://dapp-store.elastos.org/apps/list');
		const dapps = await res.json();

		return { dapps };
	}
</script>

<script>
	import Card from '../components/Card.svelte';

	export let dapps;
</script>

<style>
	h2 {
		font-weight: bold;
		margin-top: 32px;
		margin-bottom: 1rem;
		text-align: center;
	}
	section {
		display: grid;
		grid-template-columns: 1fr;
		padding: 32px 8px;
	}


	@media screen and (min-width: 35em) {
		section {
			grid-template-columns: repeat(2, 1fr);
			padding: 32px;
		}
	}

	@media screen and (min-width: 50em) {
		section {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	@media screen and (min-width: 60em) {
		section {
			grid-template-columns: repeat(4, 1fr);
		}
	}
</style>

<svelte:head>
	<title>Discover your next favorite decentralized app!</title>
</svelte:head>

<h2>Top <em>d</em>Apps</h2>
<section>
{#each dapps as dapp}
	<Card {dapp} />
{/each}
</section>
