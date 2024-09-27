
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CryptoJS from 'crypto-js';
import './BrowseCharacters.css';

const BrowseCharacters = () => {
    const [listOfCharacters, setListOfCharacters] = useState([]);
    const [selectedCharacterId, setSelectedCharacterId] = useState(null);


    function md5(str) {
        return CryptoJS.MD5(str).toString();
    }

    const publicKey = '856c111d88c97a2b6c16f9df2cf670c6';
    const privateKey = '6d01c54d367bed21cfa26a833591f6022b9a1f38';
    const baseUrl = 'https://gateway.marvel.com:443/v1/public/characters';

    const timestamp = new Date().getTime();
    const hash = md5(timestamp + privateKey + publicKey);

    const apiUrl = `${baseUrl}?ts=${timestamp}&apikey=${publicKey}&hash=${hash}&limit=50`;

    const fetchCharacters = () => {
        axios.get(apiUrl)
        .then(response => {
            setListOfCharacters(response.data.data.results);
        })
        .catch (error => {
            console.error("error fetching characters", error)
        })
    }

    useEffect(() => {
        fetchCharacters();
    }, []);


    const toggleInfo = (id) => {
        setSelectedCharacterId(selectedCharacterId === id ? null: id);
    }

    return (
        <div>
            <div className='character-grid'>
                {listOfCharacters.map((character) => {
                    const thumbnailUrl = `${character.thumbnail.path}.${character.thumbnail.extension}`;
                    return (
                        <div className='character-card' key={character.id}>
                            <img src={thumbnailUrl} onClick={() => toggleInfo(character.id)} alt={character.name} style={{ width: '100px', height: 'auto' }} />
                            <h3>{character.name}</h3>
                            {selectedCharacterId === character.id && 
                            <div>
                                Description: {character.description}
                                <div>
                                    <h4>Associated Comics:</h4>
                                    <ul>
                                        {character.comics.items.map(comic => (
                                            <li key={comic.resourceURI}>{comic.name}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
export default BrowseCharacters;