export const useResetModalStore = defineStore('modal_reset', () => {
	const resetVisible = ref(false);
	const title = ref('');
	const content = ref('');

	const afterCancel = ref(() => {});
	const afterCommit = ref(() => {});
	const finishCommit = ref(() => {});

	function handleCancel() {
		resetVisible.value = false;
		afterCancel.value();
	}
	let isCommit = false;
	function handleCommit() {
		if (isCommit) {
			return;
		}
		isCommit = true;
		resetVisible.value = false;
		afterCommit.value();
		setTimeout(() => {
			isCommit = false;
			finishCommit.value();
		}, 100);
	}

	return {
		resetVisible,
		title,
		content,
		handleCancel,
		handleCommit,
		afterCancel,
		afterCommit,
		finishCommit,
	};
});
