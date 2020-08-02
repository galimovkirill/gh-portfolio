<template>
    <main>
        <div id="app">
            <Header />
            <transition name="fade" mode="out-in">
                <router-view />
            </transition>
        </div>
    </main>
</template>

<script>
import Header from "@/components/Header";

export default {
    name: "AppLayout",
    components: {
        Header,
    },
};
</script>

<style lang="scss">
</style>
