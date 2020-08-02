<template>
    <div class="skill-box">
        <div class="skill-box__column" v-for="item in mySkills" :key="item.id">
            <div class="column-icon">
                <img :src="require(`@/assets/icons/${item.icon}`)" alt />
            </div>
            <span class="column-title">{{ item.title }}</span>
            <p class="column-description">{{ item.description }}</p>
            <div class="column-list">
                <span class="column-list__title">{{ item.listTitle }}</span>
                <span
                    class="column-list__item"
                    v-for="listItem in item.listItems"
                    :key="listItem.id"
                >{{ listItem.name }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import mySkills from "@/data/mySkills.js";

export default {
    name: "SkillBox",
    data() {
        return {
            mySkills,
        };
    },
};
</script>

<style lang="scss">
.skill-box {
    display: flex;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
    background: #fcfcfc;
    border: 1px solid $borderColor;
    border-radius: 12px;
    margin-top: -200px;
    &__column {
        width: 33.3%;
        text-align: center;
        padding: 50px 30px;
        &:not(:last-child) {
            border-right: 1px solid $borderColor;
        }
    }
}
.skill-box .column {
    &-icon {
        display: flex;
        align-items: center;
        height: 50px;
        margin-bottom: 15px;
        img {
            margin: 0 auto;
        }
    }
    &-title {
        font-size: 18px;
        font-weight: 700;
    }
    &-description {
        line-height: 24px;
        font-weight: 300;
        max-width: 305px;
        width: 100%;
        margin: 20px auto 40px;
    }
    &-list {
        display: flex;
        flex-direction: column;
        &__title {
            color: $primary;
            font-size: 16px;
            font-weight: 400;
            display: block;
            margin-bottom: 10px;
        }
        &__item {
            font-weight: 300;
            &:not(:last-child) {
                margin-bottom: 7px;
            }
        }
    }
}

@media all and (max-width: 767.98px) {
    .skill-box {
        flex-direction: column;
        &__column {
            width: 100%;
            &:not(:last-child) {
                border-right: none;
                border-bottom: 1px solid $borderColor;
            }
        }
    }
}
</style>