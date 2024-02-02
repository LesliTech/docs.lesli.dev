---
layout: home
---
<style lang="scss">
    @import "./.vitepress/stylesheets/pages/index.scss";
</style>
<script setup>
    import collections from "./.vitepress/data/en/component_collections.json"

    import LogoBell from "./assets/icons/lesli/cloud-bell.svg"
    import LogoTeam from "./assets/icons/lesli/cloud-team.svg"
    import LogoProposal from "./assets/icons/lesli/cloud-proposal.svg"
    import LogoDriver from "./assets/icons/lesli/cloud-driver.svg"
    import LogoFocus from "./assets/icons/lesli/cloud-focus.svg"

    const logos = {
        bell: LogoBell,
        team: LogoTeam,
        proposal: LogoProposal,
        driver: LogoDriver,
        focus: LogoFocus,
        bell: LogoBell,
    }

    const links = [{
        href: "/docs/about/",
        icon: "ri-heart-line",
        text: "About"
    }, {
        href: "/docs/lesli/5x/getting-started/",
        icon: "ri-send-plane-line",
        text: "Getting started"
    }, {
        href: "/docs/lesli/5x/contributing/",
        icon: "ri-git-pull-request-line",
        text: "Contributing"
    }, {
        href: "/docs/lesli/5x/database/",
        icon: "ri-database-line",
        text: "Database"
    }, {
        href: "/docs/lesli/5x/ruby-on-rails/",
        icon: "ri-server-line",
        text: "Ruby on Rails"
    }, {
        href: "/docs/lesli/5x/theming/",
        icon: "ri-window-line",
        text: "Frontend"
    }, {
        href: "/docs/lesli/5x/theming/",
        icon: "ri-palette-line",
        text: "Theming"
    }, {
        href: "/docs/lesli/5x/security/",
        icon: "ri-shield-line",
        text: "Security"
    }, {
        href: "/docs/lesli/5x/generators/",
        icon: "ri-code-line",
        text: "Generators"
    }, {
        href: "/docs/lesli/5x/testing/",
        icon: "ri-bug-line",
        text: "Testing"
    }, {
        href: "/docs/lesli/5x/engines/",
        icon: "ri-shapes-line",
        text: "Engines"
    }, {
        href: "/docs/lesli/5x/deployment/",
        icon: "ri-flashlight-line",
        text: "Deployment"
    }, {
        href: "/docs/lesli-vue/",
        icon: "ri-vuejs-line",
        text: "Lesli Vue"
    }, {
        href: "/docs/lesli-js/1x/",
        icon: "ri-javascript-line",
        text: "Lesli JS"
    }, {
        href: "/docs/lesli-css/1x/",
        icon: "ri-css3-line",
        text: "Lesli CSS"
    }, {
        href: "/docs/lesli-mails/1x/",
        icon: "ri-mail-open-line",
        text: "Lesli Mails"
    }]
</script>

<header class="hero is-medium lesli-page-header">
    <section class="hero-body">
        <div class="container">
            <img class="m-auto" alt="cat docs" src="/images/cats/docs.svg" />
            <h1 class="title">
                The Open Source Ruby on Rails <span class="lesli-title-colored">SaaS Development Framework.</span>
            </h1>
            <p class="description">
                Lesli provides all the necessary tools to build your SaaS, empowering you and your team to focus on business and what makes your software special. 
            </p>
        </div>
    </section>
</header>

<section class="container lesli-page-content-boxes">
    <div class="columns">
        <div class="column" v-for="link in links">
            <a :href="link.href">
                <i :class="link.icon"></i>
                {{ link.text }}
            </a>
        </div>
    </div>
</section>

<section class="container lesli-page-content-boxes">
    <div class="columns">
        <template v-for="collection in collections.collection">
            <template v-for="engine in collection.engines">
                <div class="column">
                    <a>
                        <component :is="logos[engine.name.toLowerCase()]"></component>
                        <h3>{{ engine.name }}</h3>
                    </a>
                </div>
            </template>
        </template>
    </div>
</section>
