<script setup lang="ts">
import { toggleSiteSytle } from '@/composables/dark';
import MainClock from './components/MainClock.vue';
import MainHeader from './components/MainHeader.vue';
import MainSearch from './components/MainSearch.vue';
import MainSetting from './components/MainSetting.vue';
import SiteContainer from './components/SiteContainer.vue';

defineOptions({
	name: 'HomePage',
});

toggleSiteSytle();

const settingStore = useSettingStore();
</script>

<template>
	<TheDoc dark:op-80>
		<div
			my-6vh
			p-24
			bg="$main-bg-c"
			dark="bg-$dark-main-bg-c"
			class="mobile-index"
			:class="{ no_select: settingStore.isSetting }"
		>
			<MainHeader />
			<MainClock v-if="!settingStore.isSetting" />
			<MainSearch v-if="!settingStore.isSetting" />
			<SiteContainer />
			<MainSetting />
			<TheFooter />
		</div>
	</TheDoc>
</template>

<route lang="json">
{
	"path": "/",
	"children": [
		{
			"name": "setting",
			"path": "setting",
			"component": "@/components/Blank.vue"
		}
	]
}
</route>
