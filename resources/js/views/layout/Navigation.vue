<template functional>

    <div class="Navigation">

        <transition name="nav-slide" appear>

            <nav>

                <router-link :to="{name: 'home'}" exact>home</router-link>

                <template v-if="props.nav.length">
                    <router-link v-for="(page, index) in props.nav" :key="`${index}-${page}`" :to="{name: 'portfolio', params: {category: page}}">{{ page }}</router-link>
                </template>

            </nav>

        </transition>

    </div>

</template>
