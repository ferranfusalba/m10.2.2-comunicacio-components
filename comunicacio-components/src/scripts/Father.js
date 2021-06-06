import Son from '../components/Son.vue';

export default {
    name: 'Father',
    components: {
        Son
    },
    data() {
        return {
            itemSon: [{
                    name: 'item 1',
                    counter: 0
                },
                {
                    name: 'item 2',
                    counter: 0
                },
                {
                    name: 'item 3',
                    counter: 0
                }
            ]
        }
    }
}