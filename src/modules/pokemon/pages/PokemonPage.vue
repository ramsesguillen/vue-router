<template>
    <h1>Pokemon: <span>#{{ id }} </span></h1>
    <div v-if="pokemon">
        <img :src="pokemon.sprites.front_default" alt="poke"/>
    </div>
</template>

<script>
export default {
    props: {
        id: {
            type: Number,
            required: true
        }
    },
    data(){
        return {
            pokemon: null
        }
    },
    created() {
        this.getPokemon()
    },
    methods: {
        async getPokemon() {
            try {
                const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.id}`)
                const pokemon = await resp.json()
                console.log( pokemon )
                this.pokemon = pokemon
            } catch(err) {
                this.$router.push('/about')
            }
        }
    },
    watch: {
        id() {
            this.getPokemon()
        }
    }
}
</script>