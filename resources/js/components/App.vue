<template>

    <div class="Container Wrap">

        <navigation></navigation>

        <keep-alive>
            <router-view class="Container__con"></router-view>
        </keep-alive>

    </div>

</template>

<script>
    import Navigation from '@views/layout/Navigation'

    export default {
        components: {
            Navigation
        }
    }
</script>
