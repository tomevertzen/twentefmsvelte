<script>
	import TextInput from '$lib/Inputs/TextInput.svelte';
	import PasswordInput from '$lib/Inputs/PasswordInput.svelte';
	import FormContainer from '$lib/Containers/FormContainer.svelte';
	import Logo from '$lib/Images/logo.jpg';
	import { auth } from '$lib/firebase/client.js';
	import { createUserWithEmailAndPassword } from 'firebase/auth';

	const register = async () => {
		if (password !== repeatPassword) {
			alert('Wachtwoorden komen niet overeen');
			return;
		}
		try {
			await createUserWithEmailAndPassword(auth, email, password);
		} catch (error) {
			console.log(error);
		}
	};

	let email = '';
	let password = '';
	let repeatPassword = '';

	const buttonStyle =
		'bg-twenteRed hover:bg-red-800 focus:bg-red-800 text-white  py-2 px-4 rounded w-full';
</script>

<div class="w-full h-screen flex items-center justify-center">
	<FormContainer title="Registeren" img={Logo}>
		<TextInput bind:value={email} label="Email" placeholder="voorbeeld@info.nl" />
		<PasswordInput bind:value={password} label="Wachtwoord" />
		<PasswordInput bind:value={repeatPassword} label="Herhaal wachtwoord" />
		<button on:click|preventDefault={register} class={buttonStyle}>Registreren</button>
	</FormContainer>
</div>
