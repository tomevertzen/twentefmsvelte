<script>
	export let value = '';
	export let label = '';
</script>

<div class="flex flex-col w-full">
	<label class="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-1" for={label}
		>{label}</label
	>
	<input
		type="password"
		placeholder="●●●●●●"
		name={label}
		bind:value
		class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5 focus:border-red-500 focus:bg-gray-50"
	/>
</div>
