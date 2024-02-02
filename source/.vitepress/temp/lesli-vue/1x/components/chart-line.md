<script setup>

//import { lesliChartLine } from "lesli-vue/components"

const labels = ["1", "2"]
const series = [{
    name: "Requests",
    data: [1,2]
}]

</script>


# Chart line

<lesli-chart-line
    :title="'Visitors'"
    :series="series"
    :labels="labels">
</lesli-chart-line>
