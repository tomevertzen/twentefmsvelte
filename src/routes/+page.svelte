<script>
	import Input from '$lib/Inputs/TextInput.svelte';
	import FormContainer from '$lib/Containers/FormContainer.svelte';
	import Logo from '$lib/Images/logo.jpg';
	import { db } from '$lib/firebase/client.js';
	import { collection, setDoc, addDoc } from 'firebase/firestore';

	console.log(db);
	//Send to firebase collection
	const send = async () => {
		const data = {
			artist,
			title,
			message,
			date: Date.now()
		};
		console.log(data);
		try {
			await addDoc(collection(db, 'songRequests'), data);
			console.l;
		} catch (error) {
			console.log(error);
		}
	};

	let artist = '';
	let title = '';
	let message = '';

	// styles

	const buttonStyle =
		'bg-twenteRed hover:bg-red-800 focus:bg-red-800 text-white  py-2 px-4 rounded w-full';
	const formStyle = 'max-w-[450px] w-5/6    p-2 sm:p-4 md:p-8';
</script>

<div class="w-full h-screen flex items-center justify-center">
	<FormContainer title="Formulier" img={Logo}>
		<Input bind:value={artist} placeholder="Michael Jackson" label="Artiest" />
		<Input bind:value={title} placeholder="Thriller" label="Nummer" />
		<Input bind:value={message} placeholder="....." label="Bericht" />
		<button on:click|preventDefault={send} class={buttonStyle}>Verstuur</button>
	</FormContainer>
</div>
