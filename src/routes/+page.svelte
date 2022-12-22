<script>
	import Input from '$lib/Inputs/TextInput.svelte';
	import FormContainer from '$lib/Containers/FormContainer.svelte';
	import Logo from '$lib/Images/logo.jpg';
	import { db } from '$lib/firebase/client.js';

	//Send to firebase collection
	const send = async () => {
		const data = {
			artiest,
			nummer,
			bericht
		};
		try {
			await db.collection('songs').add(data);
		} catch (error) {
			console.log(error);
		}
	};

	let artiest = '';
	let nummer = '';
	let bericht = '';

	// styles

	const buttonStyle =
		'bg-twenteRed hover:bg-red-800 focus:bg-red-800 text-white  py-2 px-4 rounded w-full';
	const formStyle = 'max-w-[450px] w-5/6    p-2 sm:p-4 md:p-8';
</script>

<div class="w-full h-screen flex items-center justify-center">
	<FormContainer title="Formulier" img={Logo}>
		<Input bind:value={artiest} placeholder="Michael Jackson" label="Artiest" />
		<Input bind:value={nummer} placeholder="Thriller" label="Nummer" />
		<Input bind:value={bericht} placeholder="....." label="Bericht" />
		<button class={buttonStyle}>Verstuur</button>
	</FormContainer>
</div>
