<template>
    <div class="portfolio__item">
        <div class="container inner">
            <img :src="require(`@/assets/img/${work.preview}`)" alt class="portfolio__preview" />
            <div class="portfolio__info">
                <h3 class="portfolio__title">{{ work.title }}</h3>
                <div class="tag-list">
                    <span v-for="tag in work.tags" :key="tag.id" class="badge">{{ tag.name }}</span>
                </div>
                <p class="portfolio__description">{{ work.description }}</p>
                <button-link
                    :type="'blue-bordered'"
                    :name="'Перейти на сайт'"
                    :link="`http://${work.link}`"
                    :linkType="'absolute'"
                />
            </div>
        </div>
    </div>
</template>

<script>
import ButtonLink from "@/components/Common/ButtonLink";

export default {
    name: "WorkItem",
    components: {
        ButtonLink,
    },
    props: ["work"],
};
</script>

<style lang="scss">
.portfolio {
    &__item {
        padding: 75px 0;
        &:not(:last-child) {
            border-bottom: 1px solid $borderColor;
        }
        .inner {
            display: flex;
            align-items: center;
        }
    }
    &__info {
        margin-left: 115px;
    }
    &__title {
        font-size: 24px;
        font-weight: 800;
        letter-spacing: 0.15em;
    }
    &__description {
        max-width: 460px;
        width: 100%;
        color: $mutedText;
        margin: 15px 0 25px;
    }
}

@media all and (max-width: 1023.98px) {
    .portfolio {
        &__item .inner {
            flex-direction: column;
        }
        &__info {
            margin-left: 0;
            text-align: center;
        }
        &__title {
            margin-top: 40px;
        }
    }
}
</style>