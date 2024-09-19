<template>
    <div class="HeaderLeft flex">
        <div>
            <nav>
                <ul class="flex flex-row justify-center items-center">
                    <li class="text-3xl w-auto justify-center px-4">
                        <NuxtLink to="/discover">
                            <IconsCloud></IconsCloud>
                        </NuxtLink>
                    </li>
                    <li
                        v-for="route in routes"
                        class="w-auto justify-center px-4"
                    >
                        <NuxtLink class="py-5" :to="route.to">{{
                            route.name
                        }}</NuxtLink>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const routes = ref([
    {
        to: "/discover",
        name: "Discover",
    },
    {
        to: "/library",
        name: "Library",
    },
    {
        to: "/feed",
        name: "Feed",
    },
]);
</script>
