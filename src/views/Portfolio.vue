<template>
    <div class="portfolio">
        <div class="inner">
            <!-- <div class="portfolio-item" v-for="work in myWorks" :key="work.id">
                <div class="container">
                    <work-item :work="work" />
                </div>
            </div> -->
            <work-item v-for="work in myWorks" :key="work.title" :work="work" />
        </div>
    </div>
</template>

<script>
import myWorks from "@/data/myWorks";
import WorkItem from "@/components/WorkItem";

export default {
    name: "Portfolio",
    components: {
        WorkItem
    },
    data() {
        return {
            myWorks
        };
    },
    created() {
        window.document.title = "Кирилл Галимов | Портфолио";
    }
};
</script>

<style lang="scss"></style>
