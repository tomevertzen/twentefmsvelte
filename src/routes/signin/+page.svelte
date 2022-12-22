<script>
	//Imports =
	import TextInput from '$lib/Inputs/TextInput.svelte';
	import PasswordInput from '$lib/Inputs/PasswordInput.svelte';
	import FormContainer from '$lib/Containers/FormContainer.svelte';
	import Logo from '$lib/Images/logo.jpg';
	import { auth } from '$lib/firebase/client.js';
	import { signInWithEmailAndPassword } from 'firebase/auth';

	//Variables
	let email = '';
	let password = '';

	//Functions
	//Create a firebase login function
	const login = async () => {
		try {
			await signInWithEmailAndPassword(auth, email, password);

			//If the login is successful, redirect to the home page
			window.location.href = '/';
		} catch (error) {
			console.log(error);
		}
	};

	//Styles
	const buttonStyle =
		'bg-twenteRed hover:bg-red-800 focus:bg-red-800 text-white  py-2 px-4 rounded w-full';
</script>

<div class="w-full h-screen flex items-center justify-center">
	<FormContainer title="Inloggen" img={Logo}>
		<TextInput bind:value={email} label="Email" placeholder="voorbeeld@info.nl" />
		<PasswordInput bind:value={password} label="Wachtwoord" />
		<button on:click|preventDefault={login} class={buttonStyle}> Submit </button>
	</FormContainer>
</div>
