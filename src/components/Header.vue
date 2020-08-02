<template>
    <header class="header flex items-center" :class="isMobileShown ? 'header-mobile--shown' : ''">
        <div class="container flex justify-between">
            <div class="header-burger" @click="toggleMobileHeader">
                <div class="header-burger__line"></div>
                <div class="header-burger__line"></div>
                <div class="header-burger__line"></div>
            </div>
            <div class="inner">
                <div class="header-socials flex">
                    <a
                        class="header-socials__link"
                        target="_blank"
                        v-for="item in socials"
                        :key="item.id"
                        :href="`https://${item.link}`"
                    >
                        <img :src="require(`@/assets/icons/${item.icon}`)" :alt="item.name" />
                    </a>
                </div>
                <nav class="header-nav">
                    <router-link
                        class="header-nav__link"
                        v-for="item in links"
                         :key="item.id"
                        :to="item.link"
                        @click.native="closeHeader"
                    >{{ item.name }}</router-link>
                </nav>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: "Header",
    data() {
        return {
            isMobileShown: false,
            links: [
                { id: 0, name: "Главная", link: "/" },
                { id: 1, name: "Обо мне", link: "/about" },
                { id: 2, name: "Портфолио", link: "/portfolio" },
                // { id: 3, name: "Контакты", link: "/contacts" }
            ],
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
    methods: {
        toggleMobileHeader() {
            this.isMobileShown = !this.isMobileShown;
            if (this.isMobileShown) {
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "visible";
            }
        },
        closeHeader() {
            this.isMobileShown = false;
            document.body.style.overflow = "visible";
        },
    },
};
</script>

<style lang="scss">
header.header {
    height: 100px;
    z-index: 100;

    .inner {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
}

.header-burger {
    display: none;
}

.header-socials__link {
    &:not(:last-child) {
        margin-right: 25px;
    }

    img {
        opacity: 0.5;
        transition: 0.2s ease-in-out;
        &:hover {
            opacity: 1;
        }
    }
}

.header-nav__link {
    opacity: 0.5;
    transition: 0.2s ease-in-out;
    &:not(:last-child) {
        margin-right: 30px;
    }
    &:hover {
        opacity: 1;
    }

    &.router-link-exact-active {
        opacity: 1;
        position: relative;
    }
}

@media all and (max-width: 767.98px) {
    .header-mobile--shown {
        position: fixed;
        top: 0;
        width: 100%;
        .inner {
            // display: flex !important;
            margin-left: 0;
        }
        .header-burger {
            &__line {
                margin: 0 !important;
                &:nth-child(1) {
                    transform: rotate(-135deg);
                }
                &:nth-child(2) {
                    // display: none;
                    opacity: 0;
                }
                &:last-child {
                    margin-top: -4px !important;
                    transform: rotate(135deg);
                }
            }
        }
    }

    .header-burger {
        display: block;
        z-index: 10;
        margin-left: auto;
        &__line {
            transition: 0.3s ease-in-out;
            width: 25px;
            height: 2px;
            display: block;
            background: $black;
            &:not(:last-child) {
                margin-bottom: 5px;
            }
        }
    }
    header {
        .inner {
            // display: none !important;
            margin-left: -100%;
            flex-direction: column-reverse;
            align-items: center !important;

            height: 100vh !important;
            width: 100%;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

            background: #fff;
            text-align: center;
        }
        .header-nav {
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 100%;
            &__link:not(:last-child) {
                margin: 0 0 20px 0;
            }
        }
        .header-socials {
            margin-bottom: 30px;
            &__link img {
                opacity: 1;
            }
        }
    }
}
</style>