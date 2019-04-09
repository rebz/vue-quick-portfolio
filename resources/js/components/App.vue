<template>

    <div class="Container Wrap">

        <navigation></navigation>

        <router-view class="Container__con"></router-view>

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
