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

Lesli · Ruby on Rails SaaS Development Framework.

Made with ♥ by https://www.lesli.tech
Building a better future, one line of code at a time.

@contact  hello@lesli.tech
@website  https://www.lesli.tech
@license  GPLv3 http://www.gnu.org/licenses/gpl-3.0.en.html

// · ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~
// · 
*/


// · docs navigation
import lesliCoreNavigation from "./navigation/lesli-core-navigation"
import lesliVueNavigation from "./navigation/lesli-vue-navigation"
import lesliCSSNavigation from "./navigation/lesli-css-navigation"


// · 
export default {

    siteTitle: false,
    appearance: false,
    lastUpdated: true,
    logo: "/images/brand/lesli.svg",

    search: {
        provider: "local"
    },

    nav: [
        { text: "Lesli", link: "/lesli/" },
        { text: "Vue", link: "/vue/" },
        { text: "Css", link: "/css/" },
        { text: "Mails", link: "/mails/" },
    ],

    sidebar: {
        "/about/": lesliCoreNavigation,
        "/lesli/": lesliCoreNavigation,
        "/vue/elements/": lesliVueNavigation,
        "/css/": lesliCSSNavigation
    },

    editLink: {
        text: "Edit this page on GitHub",
        pattern: "https://github.com/LesliTech/lesli.dev/edit/master/sourcedocs/source/:path"
    },

    footer: {
        message: 'Released under the <a href="https://github.com/LesliTech/Lesli/blob/master/license">GPLv3 License</a>.',
        copyright: 'Copyright © 2023 <a href="https://www.lesli.tech/">LesliTech</a>'
    },

    socialLinks: [
        { icon: "github", link: "https://github.com/LesliTech/Lesli" },
        { icon: "twitter", link: "https://twitter.com/LesliTech" },
    ]
}

/*
about 
    lesli
    ecosystem
    versioning
contributing
    environment
    gitflow
    commits
    pull requests
getting-started
    installation
    development
    demo
    credentials
    configuration
    directory structure
    frontend
Database
    schema
    versioning 
    migrations 
    seeds
Ruby on Rails
    Router
    Controllers
    Models
    Services
    Operators
    Validators
    Mailers
    Courier
Frontend 
    Styles
    JavaScript
    Views
Theming
    Colors
    Typography
    Customization
Security
Generators
Testing
Engines
Deployment
*/
