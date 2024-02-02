<script setup>
/*
Lesli

Copyright (c) 2023, Lesli Technologies, S. A.

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see http://www.gnu.org/licenses/.

Lesli · Ruby on Rails Development Platform.

Made with ♥ by https://www.lesli.tech
Building a better future, one line of code at a time.

@contact  hello@lesli.tech
@website  https://www.lesli.tech
@license  GPLv3 http://www.gnu.org/licenses/gpl-3.0.en.html

// · ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~
// · 
*/


// · 
import corefeatures from "../../../../lesli.dev/data/en/component_corefeatures.json"

</script>
<style lang="scss">
    @import "../stylesheets/components/lesli-component-core-features.scss";
</style>
<template>
    <section class="lesli-component-core-features hero is-fullheight ">
        <div class="hero-body">
            <div class="container">
                <div class="component-header">
                    <h2>{{ corefeatures.title }}</h2>
                    <p>{{ corefeatures.text }}</p>
                </div>
                <div class="columns ">
                    <div class="column" v-for="feature in corefeatures.content">
                        <div class="feature">
                            <figure>
                                <i :class="feature.icon"></i>
                            </figure>
                            <h3>{{ feature.name }}</h3>
                            <p>{{ feature.text }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
