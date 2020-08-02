<template>
    <div>
        <router-link
            v-if="linkType !== 'absolute'"
            class="button"
            :class="buttonType"
            :to="link"
        >{{ name }}</router-link>
        <a
            v-if="linkType === 'absolute'"
            class="button"
            :class="buttonType"
            :href="link"
            target="_blank"
        >{{ name }}</a>
    </div>
</template>

<script>
export default {
    name: "Button",
    props: {
        linkType: String,
        link: String,
        name: String,
        type: String
    },
    computed: {
        buttonType() {
            if (this.type === "blue-bordered") {
                return "button-blue-bordered";
            } else if (this.type === "blue-filled") {
                return "button-blue-filled";
            } else {
                return "";
            }
        }
    }
};
</script>

<style lang="scss">
.button {
    display: inline-block;
    padding: 10px 25px;
    background: #fff;
    font-size: 14px;
    border-radius: 12px;
}

.button-blue-bordered {
    border: 1px solid $primary;
    color: $primary;
    transition: 0.2s ease-in-out;
    &:hover {
        background: $primary;
        color: #fff;
    }
}
.button-blue-filled {
    background: $primary;
    color: #fff;
    transition: 0.2s ease-in-out;
    border: 1px solid $primary;
    &:hover {
        background: #fff;
        border: 1px solid $primary;
        color: $primary;
    }
}
</style>