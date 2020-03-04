import React, {useState} from 'react';
import { View, Text } from 'react-native';
import { Header, Item, Icon, Input } from 'native-base';
import PokeLoader from './PokeLoader';
import SearchBody from './SearchBody';
import axios from 'axios';

const Search = () => {

        const [state, setState] = useState(true);
        const [data, setData] = useState(null);
        const axios = require('axios');
        const url = 'http://pokeapi.co/api/v2/pokemon/'
        const [pokeSearch, setPokemon] = useState('')
        const searchPoke = () => {
            setState(true);
            axios.get(url + pokeSearch.toLowerCase())
            .then(function (resp) {
                console.log(resp.data);
                setData(resp.data);
                setState(false);
            }).catch(function (error) {
                console.log(error);
            })
        }

        const renderBody = () => {
            if (state) {
                return (
                    <PokeLoader></PokeLoader>
                );
            } else {
                return (
                    <SearchBody data={data}></SearchBody>
                );
            }
        }
        return(
            <View style={{flex: 1}}>
                <Header searchBar rounded>
                    <Item>
                        <Icon name="ios-search" onPress={searchPoke}></Icon>
                    <Input value={pokeSearch} placeholder='Search Pokemon' onChangeText={text => setPokemon(text)}></Input>
                    </Item>
                </Header>
                {renderBody()}
            </View>
        );
    }

export default Search;