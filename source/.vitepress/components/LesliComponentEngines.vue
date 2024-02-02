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
import collections from "../data/en/component_collections.json"

import LogoBell from "../../assets/icons/lesli/cloud-bell.svg"
import LogoTeam from "../../assets/icons/lesli/cloud-team.svg"
import LogoProposal from "../../assets/icons/lesli/cloud-proposal.svg"
import LogoDriver from "../../assets/icons/lesli/cloud-driver.svg"
import LogoFocus from "../../assets/icons/lesli/cloud-focus.svg"


const logos = {
    bell: LogoBell,
    team: LogoTeam,
    proposal: LogoProposal,
    driver: LogoDriver,
    focus: LogoFocus,
    bell: LogoBell,
}

</script>
<template>
    <section class="container lesli-page-content-boxes">
        <div class="columns">
            <template v-for="collection in collections.collection">
                <template v-for="engine in collection.engines">
                    <div class="column">
                        <a>
                            <component :is="logos[engine.name.toLowerCase()]"></component>
                            <h3>{{ engine.name }}</h3>
                            <p>{{ engine.text }}</p>
                        </a>
                    </div>
                </template>
            </template>
        </div>
    </section>
</template>
<style lang="scss">
    @import "../stylesheets/components/lesli-component-engines.scss";
</style>
