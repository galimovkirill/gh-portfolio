<template>
    <div class="home">
        <div class="container inner">
            <div class="content">
                <h2 class="primary-title">Кирилл Галимов</h2>
                <h3 class="secondary-title">
                    <span class="blue-colored">Frontend & UI</span> разработчик
                </h3>
                <p class="main-text">
                    Разработчик клиентской части и дизайна современных
                    веб-приложений. Если у Вас есть идеи для совместной работы, свяжитесь со
                    мной по ссылке ниже.
                </p>
                <contact-button />
            </div>
            <div class="home-workspace">
                <img :src="require('@/assets/img/workspace.svg')" alt />
            </div>
        </div>
    </div>
</template>

<script>
import ContactMeBtn from "@/components/Common/ContactMeBtn";

export default {
    name: "Home",
    components: {
        "contact-button": ContactMeBtn,
    },
    created() {
        window.document.title = "Кирилл Галимов | Frontend Developer";
    },
};
</script>

<style lang="scss">
.home {
    .content {
        max-width: 463px;
        width: 100%;
    }
    .main-text {
        margin: 35px 0;
        color: $mutedText;
    }
    .inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
}

@media all and (min-width: 1024px) {
    .home {
        height: 100vh;
        margin-top: -100px;
        .container {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }
    }
}

@media all and (max-width: 1023.98px) {
    .home {
        .inner {
            flex-direction: column;
        }
    }
    .home-workspace {
        margin-top: 50px;
    }
}
</style>
