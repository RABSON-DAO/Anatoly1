<template>
    <div class="map-items-wrap" v-show="items.length !== 0">
        <div class="map-items-list d-flex">
            <MapItem
                    v-for="item of items"
                    :title="item.title"
                    :desc="item.desc"
                    :image="item.image"
                    :key="item.title"
            ></MapItem>
        </div>
        <button class="map-items-close d-none d-lg-block" v-show="items.length !== 0" @click="$emit('map-items-close')">
            <CloseIcon></CloseIcon>
        </button>
    </div>
</template>

<script>
    import MapItem from '@/views/MapItem'
    import CloseIcon from '@/assets/map-items-close.svg'
    export default {
        name: "MapItems",
        components: { CloseIcon, MapItem },
        props: ['items']
    }
</script>

<style scoped>

</style>