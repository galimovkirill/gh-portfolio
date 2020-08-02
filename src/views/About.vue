<template>
    <div class="about">
        <div class="container">
            <div class="introduction flex items-center justify-center">
                <h1 class="name-fullsize">Кирилл Галимов</h1>
                <img class="introduction__profile" :src="require('@/assets/img/guy.svg')" alt />
                <div class="introduction__buttons">
                    <!-- <button-link
                        class="introduction__btn"
                        :type="'blue-bordered'"
                        :name="'Связаться со мной'"
                        :link="'/'"
                    />-->
                    <contact-button class="introduction__btn" />
                    <button-link
                        class="introduction__btn"
                        :type="'blue-filled'"
                        :name="'Смотреть резюме'"
                        :linkType="'absolute'"
                        :link="'https://kaliningrad.hh.ru/applicant/resumes/view?resume=bb38938aff0598c15a0039ed1f773377497a76'"
                    />
                </div>
            </div>
        </div>
        <div class="container">
            <fact-box class="about-fact-box" />
        </div>
        <div class="who-am-i">
            <div class="container">
                <div class="inner">
                    <div class="inner">
                        <h2 class="who-am-i__title">Кто я и чем занимаюсь?</h2>
                        <p class="who-am-i__text">
                            Я являюсь Frontend разработчиком из России,
                            Калининграда. В период 2016-2020 года проходил
                            обучение в колледже по направлению “Программирование
                            в компьютерных системах”, в котором определил для
                            себя основную сферу дальнейшего развития. Так, в
                            начале 2018 года я приступил к изучению веб-систем и
                            основных инструментов разработки.
                        </p>
                        <p class="who-am-i__text">
                            С тех пор, как я начал обучаться Frontend
                            разработке, прошло уже более двух лет. За этот
                            период было выучено немало технологий, которые
                            помогают разрабатывать продукт более быстро и
                            качественно по самым современным тенденциям
                            веб-индустрии.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <skill-box />
        </div>
    </div>
</template>

<script>
import ButtonLink from "@/components/Common/ButtonLink";
import ContactMeBtn from "@/components/Common/ContactMeBtn";
import FactBox from "@/components/FactBox";
import SkillBox from "@/components/SkillBox";

export default {
    name: "About",
    components: {
        ButtonLink,
        "contact-button": ContactMeBtn,
        FactBox,
        SkillBox,
    },
    created() {
        window.document.title = "Кирилл Галимов | Обо мне";
    },
};
</script>

<style lang="scss">
.about {
    padding-bottom: 50px;
}
.introduction {
    position: relative;
    // margin-top: 100px;
    margin: 100px 0 200px;
    &__profile {
        position: absolute;
        top: -30px;
    }
    &__buttons {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 150px;
    }
    &__btn {
        &:nth-child(1) {
            margin-right: 400px;
        }
    }
}
.name-fullsize {
    position: absolute;
    top: -80px;
    font-size: 96px;
    color: $primary;
    text-transform: uppercase;
    opacity: 0.5;
    z-index: -1;
}
.about-fact-box {
    margin-top: 100px;
}
.who-am-i {
    background: #0075ff;
    padding: 70px 0 322px;
    margin-top: 100px;
    .inner {
        text-align: center;
        margin: 0 auto;
        max-width: 755px;
        width: 100%;
    }
    &__title {
        font-size: 36px;
        font-weight: 900;
        color: #fff;
    }
    &__text {
        font-size: 16px;
        font-weight: 500;
        color: #fff;
        &:not(:first-child) {
            margin-top: 20px;
        }
    }
}

@media all and (max-width: 1023.98px) {
    .name-fullsize {
        font-size: 70px;
    }
    .introduction {
        margin: 100px 0 0;
        &__buttons {
            margin-top: 350px;
        }
        &__btn {
            &:nth-child(1) {
                margin-right: 50px;
            }
        }
    }
}
@media all and (max-width: 767.98px) {
    .name-fullsize {
        font-size: 60px;
    }
}
@media all and (max-width: 620px) {
    .name-fullsize {
        font-size: 32px;
    }
    .introduction {
        &__profile {
            transform: scale(0.8);
            top: -85px;
        }
        &__buttons {
            flex-direction: column;
            text-align: center;
            margin-top: 270px;
        }
        &__btn {
            &:nth-child(1) {
                margin: 0 0 20px;
            }
        }
    }
}
</style>
