<script setup>
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
</script>
<template>
    <Layout>
        <template #not-found>
            <section>
                <div>
                    <img alt="cat docs" src="/public/images/cats/dev.png" />
                    <p>Work in progress...</p>
                    <a href="/">Take me home</a>
                </div>
            </section>
        </template>
    </Layout>
</template>
<style lang="scss" scoped>
    @import "lesli-css";
    section {
        @include lesli-css-flex-center('vertical');
        text-align: center;
        min-height: 60vh;
        img {
            margin: 0 auto;
            width:150px;
        }
        p {
            font-size: 2rem;
            margin-bottom: 1.6rem;
        }
        a {
            color: var(--vp-c-brand-2);
            border-color: var(--vp-c-brand-2);
            border: 1px solid var(--vp-c-brand-1);
            transition: border-color 0.25s, color 0.25s;
            border-radius: 16px;
            font-weight: 500;
            font-size: 14px;
            padding: 6px 16px;
        }
    }
</style>
