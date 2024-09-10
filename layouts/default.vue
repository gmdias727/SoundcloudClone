<template>
    <div class="flex content-stretch w-auto justify-center bg-orange-300">
        <header>
            <ul class="flex justify-center items-center my-4">
                <li class="text-3xl w-auto px-5 justify-center">
                    <NuxtLink to="/">
                        <IconsCloud></IconsCloud>
                    </NuxtLink>
                </li>
                <li v-for="route in routes" class="w-auto px-5 justify-center">
                    <NuxtLink :to="route.to">{{ route.name }}</NuxtLink>
                </li>
            </ul>
        </header>
        <!-- <div>
            <slot />
        </div> -->
    </div>
</template>


<script lang="ts" setup>

const routes = ref([
    {
        to: "/",
        name: "Home"
    },
    {
        to: "/discover",
        name: "Discover"
    },
    {
        to: "/library",
        name: "Library"
    },
])

</script>