<script setup lang="ts">
import SiteGroupList from './SiteGroupList.vue';
import SiteModal from './SiteModal.vue';
import SiteNavBar from './SiteNavBar.vue';
</script>

<template>
	<div px="md:60 lg:120" text="$text-c-1 dark:$text-dark-c-1" z-8>
		<SiteNavBar />
		<SiteGroupList />
		<SiteModal />
	</div>
</template>
