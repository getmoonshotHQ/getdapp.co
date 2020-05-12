<script context="module">
	export async function preload(page, session) {
		
		const res = await this.fetch('https://dapp-store.elastos.org/apps/list');
		const dapps = await res.json();

		return { dapps };
	}
</script>

<script>
	import { onMount } from 'svelte'
	import { DAPPS_FILTER } from '../dapps-filter.svelte'
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
    'shopping',
    'lifestyle',
    'games',
    'casino',
    'music',
    'entertainment',
    'travel',
    'health',
    'techdemo'
	]

	let currentdApp = null
	let dAppsByCategory = {}
	let dAppsGhostByCategory = {}
	let columms = 3

	CATEGORIES.forEach(category => {
			dAppsByCategory[category] = []
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

	async function onResize() {
		const maxWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
		const d = maxWidth < 900 ? 80 : 104;
		columms = Math.min(Math.max(Math.floor((maxWidth - 48) / d), 3), 9);
		
		CATEGORIES.forEach(category => {
			dAppsGhostByCategory[category] = []
			const ghosts = columms - (dAppsByCategory[category].length % columms)
			if(ghosts < columms) {
				for(let i = 0; i < ghosts; i++) {
					dAppsGhostByCategory[category].push(true)
				}
			}
		})
	}

	onMount(async () => {
		
		dapps.forEach(dapp => {
			if(DAPPS_FILTER.indexOf(dapp.packageName) < 0 ) {
				dapp.description = dapp.appDescription || dapp.appShortDescription
				dAppsByCategory[dapp.category].push(dapp)
			}
			
		});

		onResize();
	});

	
</script>

<style>
	
</style>


<svelte:head>
		<!-- Primary Meta Tags -->
	<title>Discover your next favorite decentralized app!</title>
	<meta name="title" content="Discover your next favorite decentralized app!">
	<meta name="description" content="Latest & Top Blockchain Dapps powered by Elastos | Learn Everything About Decentralized Apps">

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website">
	<meta property="og:url" content="https://www.getdapp.co/">
	<meta property="og:title" content="Discover your next favorite decentralized app!">
	<meta property="og:description" content="Latest & Top Blockchain Dapps powered by Elastos | Learn Everything About Decentralized Apps">
	<meta property="og:image" content="https://www.getdapp.co/social_share.jpg">

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image">
	<meta property="twitter:url" content="https://www.getdapp.co//">
	<meta property="twitter:title" content="Discover your next favorite decentralized app!">
	<meta property="twitter:description" content="Latest & Top Blockchain Dapps powered by Elastos | Learn Everything About Decentralized Apps">
	<meta property="twitter:image" content="https://www.getdapp.co/social_share.jpg">
</svelte:head>
{#if currentdApp}<DappPopup dapp={currentdApp} close={handleClose}></DappPopup>{/if}

<svelte:window on:resize|passive={onResize} />

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
		{#each dAppsGhostByCategory[category] as dapp}
			<Dapp ghost />
		{/each}
	</DappsArray>
</TitledSection>
{/if}
{/each}

<Disclaimer />
