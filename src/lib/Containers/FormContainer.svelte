<script>
	export let title = '';
	export let img = '';

	const formStyle = 'max-w-[450px] w-5/6    p-2 sm:p-4 md:p-8';
</script>

<form action="" class={formStyle}>
	{#if img} <img src={img} class="w-3/5 m-auto mb-10" alt="" /> {/if}
	<h1 class="text-3xl text-gray-800 font-medium mb-5">{title}</h1>
	<slot />
</form>
