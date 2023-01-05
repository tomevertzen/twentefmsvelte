<script>
	import Logo from '$lib/Images/logo.jpg';
	import { db } from '$lib/firebase/client.js';
	import { doc, onSnapshot, collection, query } from 'firebase/firestore';

	//Watch all documents in the songRequests collection
	const q = query(collection(db, 'songRequests'));

	const unsub = onSnapshot(q, (querySnapshot) => {
		const requests = [];
		querySnapshot.forEach((doc) => {
			requests.push(doc.data());
		});
		console.log(requests);
	});
</script>

<h1>Dashboard</h1>

<img src={Logo} class="w-96" alt="" />
