<template>
    <div class="fact-box">
        <div class="fact-item" v-for="item in facts" :key="item.id">
            <span class="fact-value">{{ item.value }}</span>
            <span class="fact-name">{{ item.name }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "FactBox",
    data() {
        return {
            facts: [
                { id: 0, name: "Возраст", value: 19 },
                { id: 1, name: "Основной инструмент", value: "Vue JS" },
                { id: 2, name: "Разработанных проектов", value: 4 },
                { id: 3, name: "Опыт работы, года", value: "1/2" },
            ],
        };
    },
};
</script>

<style lang="scss">
.fact-box {
    display: flex;
    height: 165px;
    border-radius: 12px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
}
.fact-item {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 25%;
    height: 100%;
    text-align: center;
    &:not(:last-child) {
        &:after {
            content: "";
            position: absolute;
            right: 0;
            width: 1px;
            height: 50%;
            display: block;
            background: $borderColor;
        }
    }
}
.fact-value {
    font-size: 36px;
    font-weight: 900;
    color: $primary;
}
.fact-name {
    color: #858585;
}

@media all and (max-width: 767.98px) {
    .fact {
        &-item {
            text-align: center;
            padding: 0 5px;
        }
        &-value {
            font-size: 24px;
        }
        &-name {
            font-size: 14px;
        }
    }
}

@media all and (max-width: 575.98px) {
    .fact-box {
        // flex-direction: column;
        height: 100%;
        flex-wrap: wrap;
        justify-content: center;
    }
    .fact-item {
        // width: 50%;
        margin: 0 auto;
        flex: 0 1 50%;
        padding: 20px 10px;
        &:not(:last-child) {
            &:after {
                display: none;
            }
        }
    }
}
</style>