<script setup>
const palettes_variant = [100, 300, 500, 700, 900]
const palettes = [
    "silver", "blue", "lime", "mint", "banana", "orange", 
    "bubble", "berry", "grape", "cocoa", "slate", "black"
]
</script>

# Colors


## Logos

<div class="columns mt-4">
    <div class="column pt-4 pl-6 pb-6 has-background-grey-lighter">
        <h4 class="mb-2">Standard</h4>
    </div>
    <div class="column pt-4 pl-6 pb-6 has-background-grey-darker">
        <h4 class="mb-2 has-text-white">Negative</h4>
    </div>
</div>

<br><br>

## Primary colors
<div class="columns mt-1">
    <div class="column">
        <div class="has-text-centered py-6 br-5 has-text-white" style="background:#0d52bf;">
            LESLI BLUE <br> #0D52Bf
        </div>
    </div>
    <div class="column">
        <div class="has-text-centered py-6 br-5 has-text-white" style="background:#001f66;">
            DARK BLUE<br> #001F66
        </div>
    </div>
    <div class="column">
        <div class="has-text-centered py-6 br-5 has-text-info" style="background:#EBF1FF;">
            FADED BLUE <br> #EBF1FF
        </div>
    </div>
    <div class="column">
        <div class="has-text-centered py-6 br-5 has-text-white" style="background:#7E9BF1;">
            EASY BLUE <br> #7E9BF1
        </div>
    </div>
</div>

<br><br>

## Collection colors
<div class="columns mt-1 docs lesli-css-color-collections">
    <div class="column"> 
        <div class="has-text-centered py-6 has-text-white bg-lesli-css-color-collection-administration">
            Administration
        </div>
    </div>
    <div class="column"> 
        <div class="has-text-centered py-6 has-text-white bg-lesli-css-color-collection-intelligence">
            Intelligence
        </div>
    </div>
    <div class="column">
        <div class="has-text-centered py-6 has-text-white bg-lesli-css-color-collection-productivity">
            Productivity
        </div>
    </div>
    <div class="column">
        <div class="has-text-centered py-6 has-text-black bg-lesli-css-color-collection-integration">
            Integration
        </div>
    </div>
    <div class="column">
        <div class="has-text-centered py-6 has-text-black bg-lesli-css-color-collection-analytics">
            Analytics
        </div>
    </div>
</div>
<div class="columns docs lesli-css-color-collections">
    <div class="column">
        <div class="has-text-centered py-6 has-text-black bg-lesli-css-color-collection-security">
            Security
        </div>
    </div>
    <div class="column">
        <div class="has-text-centered py-6 has-text-white bg-lesli-css-color-collection-finance">
            Finance
        </div>
    </div>
    <div class="column">
        <div class="has-text-centered py-6 has-text-white bg-lesli-css-color-collection-sales">
            Sales
        </div>
    </div>
    <div class="column">
        <div class="has-text-centered py-6 has-text-black bg-lesli-css-color-collection-it">
            IT
        </div>
    </div>
</div>

<br><br>

## General colors

<div v-for="palette in palettes" class="columns mt-1 docs lesli-css-colors">
    <div v-for="variant in palettes_variant" class="column">
        <div :class="'bg-lesli-css-color-'+palette+'-'+variant">
        </div>
        <p class="m-0 has-text-centered">
            {{ palette }} {{ variant }}
        </p>
    </div>
</div>

<style>
    .lesli-css-color-collections .column div {
        border-radius: 6px;
        font-size: 1.1rem;
    }
    .lesli-css-colors .column div {
        border-radius: 6px;
        height: 3.2rem;
    }
</style>
