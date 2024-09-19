<template>
  <div class="HeaderRight flex flex-row">
    <div class="w-auto justify-center px-4 items-center justify-items-center">
      <a href="#" class="px-5">Try Next Pro</a>
      <a href="#" class="px-5">For Artists</a>
      <a href="#" class="px-5">Upload</a>
    </div>
    <div>
      <Dropdown label="aaaa" :items="['Opção 1', 'Opção 2', 'Opção 3']" @select="handleSelect" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Dropdown from './components/Dropdown/Dropdown.vue';

const dropdownToggle = ref(true)

const handleSelect = (item) => {
  console.log('Item selecionado:', item);
};
</script>