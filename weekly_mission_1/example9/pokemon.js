class Pokemon  {
    pokemon = '';

    constructor(nombrePokemon) {
        this.pokemon = nombrePokemon
    }

    sayHello = () => {
        console.log(`Mi pokemon ${this.pokemon} te saluda!!!`)
    }

    sayMessage = (palabra) => {
        console.log(`Mi pokemon dice: ${palabra}`)
    }
}

module.exports = Pokemon 