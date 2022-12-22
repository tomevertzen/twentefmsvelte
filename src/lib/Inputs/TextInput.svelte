<script>
	let type = 'text';
	export let value = '';
	export let label = '';
	export let placeholder = 'Please enter a placeholder prop';
</script>

<div class="flex flex-col w-full">
	<label class="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-1" for={label}
		>{label}</label
	>
	<input
		type="text"
		name={label}
		bind:value
		{placeholder}
		class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5 focus:border-red-500 focus:bg-gray-50"
	/>
</div>
