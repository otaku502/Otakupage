import {
	DialogProviderInst,
	LoadingBarProviderInst,
	MessageProviderInst,
	NotificationProviderInst,
} from 'naive-ui';
import 'vue';

export { };

declare module 'vue' {
	interface HTMLAttributes {
		[key: string]: unknown;
	}
}

declare global {
	interface Window {
		$loadingBar: LoadingBarProviderInst;
		$dialog: DialogProviderInst;
		$message: MessageProviderInst;
		$notification: NotificationProviderInst;
	}
}
