import { pb, currentUser } from '$lib/pocketbase';

//this hook will run when the page first loads on the web browser
pb.authStore.loadFromCookie(document.cookie);
pb.authStore.onChange(() => {
	currentUser.set(pb.authStore.model);
	document.cookie = pb.authStore.exportToCookie({ httpOnly: false });
});
