<template>
    <button-link :type="'blue-bordered'" :name="'Связаться со мной'" :link="'/contact'" />
</template>

<script>
import ButtonLink from "@/components/Common/ButtonLink";
export default {
    name: "ContactMeBtn",
    components: {
        ButtonLink,
    },
};
</script>

<style lang="scss">
</style>