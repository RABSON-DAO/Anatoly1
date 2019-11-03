<template>
    <div class="map-item-wrap">
        <div class="map-item-content">
            <img class="img-fluid" :src="require(`@/assets/${image}`)" alt="">
            <div class="map-item-body">
                <h4 class="map-item-title">{{ title }}</h4>
                <p class="map-item-desc d-none d-lg-block">{{ desc }}</p>
            </div>
            <a class="gt-btn alter-btn align-self-center" href="#">Подробнее</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MapItem",
        props: ['title', 'desc', 'image'],
    }
</script>

<style scoped>

</style>