import type { IconStyle } from '@/types';
import type { StyleValue } from 'vue';

export function useIconStyle() {
	const settingStore = useSettingStore();
	const iconStyle = computed(
		() => (settingStore.getSettingItem('iconStyle').value as IconStyle).style as StyleValue
	);

	return {
		iconStyle,
	};
}
