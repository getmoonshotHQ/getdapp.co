<script context="module">
	export async function preload(page, session) {
		
		const res = await this.fetch('https://dapp-store.elastos.org/apps/list');
		const dapps = await res.json();

		return { dapps };
	}
</script>

<script>
	import Card from '../components/Card.svelte';
	import Disclaimer from '../components/Disclaimer.svelte'
	import PromoCarousel from '../components/PromoCarousel.svelte'
	import TitledSection from '../components/TitledSection.svelte'
	import HorizontalSlider from '../components/HorizontalSlider.svelte'
	import FeaturedDapp from '../components/FeaturedDapp.svelte'
	import Dapp from '../components/Dapp.svelte'
	import DappsArray from '../components/DappsArray.svelte'
	import DappPopup from '../components/DappPopup.svelte'

	export let dapps;

	const CATEGORIES = [
		'new',
    'popular',
    'finance',
    'tools',
    'communication',
    'social',
    'productivity',
    'business',
    'entertainment',
    'games',
    'music',
    'casino',
    'travel',
    'lifestyle',
    'health'
	]

	let currentdApp = null
	let dAppsByCategory = {}

	CATEGORIES.forEach(category => {
		dAppsByCategory[category] = []
	});
	
	dapps.forEach(dapp => {
		dapp.description = dapp.appDescription || dapp.appShortDescription
		dAppsByCategory[dapp.category].push(dapp)
	});

	const featuredDapps = [
		getDapp('org.elastos.trinity.dapp.dappstore', '#f90000'),
		getDapp('org.elastos.trinity.dapp.wallet', '#ff5700'),
		getDapp('org.elastos.trinity.dapp.did', '#0382ff'),
		getDapp('org.elastos.trinity.dapp.friends', '#0212fd'),
		getDapp('org.elastos.trinity.dapp.dposvoting', '#9b78e6'),
		getDapp('org.elastos.trinity.dapp.redpacket', '#e80606'),
		getDapp('tech.tuum.academy', '#c941b2'),
		getDapp('com.goplaychat.playchat', '#790000'),
		getDapp('org.handyappslab.elanote', '#001333')
	]

	function getDapp(packageName, color) {
		let dapp = {}
		dapp = dapps.filter(app => app.packageName === packageName)[0]
		dapp.title = dapp.appName
		dapp.color = color
		dapp.logo = `https://dapp-store.elastos.org/apps/${dapp.packageName}/icon`
		return dapp
	}

	function handleClose() {
		currentdApp = null
	}

	function handleOpen(dapp) {
		currentdApp = dapp
	}
</script>

<style>
	
</style>

<svelte:head>
	<title>Discover your next favorite decentralized app!</title>
</svelte:head>
{#if currentdApp}<DappPopup dapp={currentdApp} close={handleClose}></DappPopup>{/if}

<PromoCarousel />
<TitledSection title="Featured DApps" noborder nopadding>
	<HorizontalSlider>
		{#each featuredDapps as dapp}
		<FeaturedDapp onDappPicked={handleOpen} dapp={dapp} />
		{/each}
	</HorizontalSlider>
</TitledSection>

{#each CATEGORIES as category}
{#if dAppsByCategory[category].length}
<TitledSection title={category.charAt(0).toUpperCase() + category.slice(1)}>
	<DappsArray>
		{#each dAppsByCategory[category] as dapp}
			<Dapp title={dapp.appName} iconSrc={`https://dapp-store.elastos.org/apps/${dapp.packageName}/icon`} on:click={(evt) => { handleOpen(dapp); }} />
		{/each}
		<Dapp ghost />
	</DappsArray>
</TitledSection>
{/if}
{/each}

<Disclaimer />
