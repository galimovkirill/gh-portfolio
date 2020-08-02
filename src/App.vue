<template>
    <main>
        <div id="app">
            <!-- <Header /> -->
            <transition name="fade" mode="out-in">
                <router-view />
            </transition>
        </div>
    </main>
</template>

<script>
// import Header from "@/components/Header";

export default {
    name: "App",
    // components: {
    //     Header,
    // },
};
</script>

<style lang="scss">
@import "./scss/main.scss";

.fade-enter-active,
.fade-leave-active {
    transition-duration: 0.3s;
    transition-property: opacity;
    transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
    opacity: 0;
}
</style>
