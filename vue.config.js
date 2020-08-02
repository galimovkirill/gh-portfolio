module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "/portfolio/" : "/",
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/scss/_vars.scss";`
            }
        }
    }
};
