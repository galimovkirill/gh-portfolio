<template>
    <div class="contact-me">
        <div class="container">
            <div class="breadcrumbs">
                <a class="breadcrumbs__link" href="#" @click="$router.go(-1)">
                    <img :src="require('@/assets/icons/arrow-back.svg')" alt />
                    Назад
                </a>
            </div>
            <div class="content">
                <div>
                    <h1 class="in-developing-title">В разработке</h1>
                    <h3
                        class="pretitle"
                    >В данный момент форма обратной связи находится в разработке.</h3>
                    <p class="contact-please">Пожалуйста, свяжитесь со мной через социальные сети</p>
                    <ul class="social-list">
                        <li v-for="item in socials" :key="item.id">
                            <a :href="`https://${item.link}`" target="_blank">
                                <img :src="require(`@/assets/icons/${item.icon}`)" :alt="item.name" />
                            </a>
                        </li>
                    </ul>
                    <p>
                        или напишите мне на почту
                        <a
                            class="contact-mail"
                            href="mailto:galimovdev@gmail.com"
                        >galimovdev@gmail.com</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ContactMe",
    data() {
        return {
            socials: [
                {
                    id: 0,
                    name: "ВКонтакте",
                    icon: "vk.svg",
                    link: "vk.com/galimovkirill",
                },
                {
                    id: 1,
                    name: "Телеграм",
                    icon: "telegram.svg",
                    link: "t.me/kirillgalimov",
                },
                {
                    id: 2,
                    name: "GitHub",
                    icon: "github.svg",
                    link: "github.com/galimovkirill",
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
.breadcrumbs {
    display: flex;
    align-items: center;
    height: 100px;
    // background: red;
    &__link {
        display: flex;
        color: $black;
        opacity: 0.5;
        transition: 0.3s ease-in-out;
        img {
            margin-right: 15px;
        }

        &:hover {
            opacity: 1;
        }
    }
}
.contact-me .content {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
}
.in-developing-title {
    font-size: 96px;
    color: $primary;
    text-transform: uppercase;
    opacity: 0.5;
}
.pretitle {
    font-size: 24px;
    font-weight: 500;
}
.contact-please {
    margin-top: 40px;
}
.social-list {
    display: flex;
    justify-content: center;
    margin: 20px 0;

    li:not(:last-child) {
        margin-right: 25px;
    }
}
.contact-mail {
    font-weight: 500;
}
</style>