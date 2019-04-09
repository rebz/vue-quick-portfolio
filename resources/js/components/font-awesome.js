import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

// Light SVG Icons
import {
    faSitemap,
} from '@fortawesome/pro-light-svg-icons'

// Regular SVG Icons
import {
    faSitemap as faSitemapRegular,

} from '@fortawesome/pro-regular-svg-icons'

// Solid SVG Icons
import {
    faSitemap as faSitemapSolid,
} from '@fortawesome/pro-solid-svg-icons'

library.add(
    faSitemap,
    faSitemapRegular,
    faSitemapSolid,
)

// <fa-icon :icon="['fal', 'sitemap']"></fa-icon> - Light
// <fa-icon :icon="['far', 'sitemap']"></fa-icon> - Regular
// <fa-icon :icon="['fas', 'sitemap']"></fa-icon> - Solid
//              use 'fab' for Brands

Vue.component('fa-icon', FontAwesomeIcon)
