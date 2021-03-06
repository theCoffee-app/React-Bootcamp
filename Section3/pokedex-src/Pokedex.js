import React, {Component} from 'react';
import './Pokedex.css';
import Pokecard from './Pokecard';

class Pokedex extends Component {
    static defaultProps = {
        pokemon: [
            {id: 4, name: 'Charmander', type: 'Fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'Water', base_experience: 63},
            {id: 11, name: 'Metapod', type: 'Bug', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'Flying', base_experience: 178},
            {id: 25, name: 'Pikachu', type: 'Electric', base_experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'Normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'Poison', base_experience: 225},
            {id: 133, name: 'Eeve', type: 'Normal', base_experience: 65}
        ]
    };
    render() {
        return(
            <div className='Pokedex'>
                <h1>Pokedex</h1>
                    <p>Total Experience: {this.props.exp}</p>
                    <p>{this.props.isWinner ? "Your hand wins!" : "Your hand looses"}</p>
                    <div className='Pokedex-cards'>
                        {this.props.pokemon.map((p) => (
                            <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience}/>
                        ))}
                    </div>
            </div>
        )
    }
}

export default Pokedex; 