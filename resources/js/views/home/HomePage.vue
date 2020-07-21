<template>

    <div>

        <h1>Home</h1>

        <pre>
            <code>
                {{ values }}
            </code>
        </pre>

    </div>

</template>

<script>

    import { filterTruthy } from '@helpers/filters'

    export default {

        data() {
            return {
                vals: {
                    search: 'test',
                    start: null,
                    end: null,
                    my_events: true,
                    your_events: false,
                    home: [],
                    home_2: ['item', [], {}, {}, {
                        test1: false,
                        test2: true
                    }],
                    home_3: [{}, {
                        item1: true,
                        item2: false,
                        item3: {},
                        item4: {
                            item: true,
                            item: false
                        }
                    }],
                    location: {},
                    location_2: {
                        place: null,
                        state: 'ky'
                    },
                    brand_objective: null,
                    medical_objective: null,
                    event_filter: null,
                    event_categories: [],
                    event_types: [],
                    statuses: [], // milestone statuses
                    asset: null, // tags with a type of asset
                    users: [],
                }
            }
        },

        computed: {
            values() {
                const vals = this.vals
                return filterTruthy(vals)
            }
        }

    }
</script>
