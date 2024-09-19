<template>
  <div class="relative inline-block text-left w-full sm:w-auto">
    <button @click="toggleDropdown" type="button"
      class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
      {{ label }}
      <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
        aria-hidden="true">
        <path fill-rule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clip-rule="evenodd" />
      </svg>
    </button>

    <div v-if="isOpen"
      class="origin-top-right absolute right-0 mt-2 w-full sm:w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
      <div class="py-1">
        <a v-for="(item, index) in items" :key="index" @click="selectItem(item)" href="#"
          class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900">
          {{ item }}
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

interface Props {
  label: string;
  items: string[];
}

const props = defineProps<Props>();
const emit = defineEmits(['select']);

const isOpen = ref(false);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectItem = (item: string) => {
  emit('select', item);
  isOpen.value = false;
};
</script>