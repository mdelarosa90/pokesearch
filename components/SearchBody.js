import React from 'react';
import {ScrollView, View, Text, StyleSheet, Image, ImageBackground, Dimensions } from 'react-native'
import {ListItem, List} from 'native-base';

var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;

const SearchBody = props => {
    var pokemon = props.data
    if(!pokemon) {
        return (
            <View>
                
            </View>
        )
    }

        return(
            <ImageBackground source={{uri: 'http://pokemongolive.com/img/posts/raids_loading.png' }} style={styles.backgroundImage}>
                <ScrollView style={{flex: 1}}>
                    <Text style={styles.header}>#{pokemon.id} - {pokemon.name.toUpperCase()}</Text>
                    <View style={styles.viewStyle}>
                        <Image source={{uri: pokemon.sprites.front_default}} style={styles.img}></Image>
                    </View>
                    <View style={styles.info}>
                        <ListItem itemDivider>
                            <Text style={{fontWeight: 'bold'}}>Size</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Weight - {pokemon.weight}kg</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Height - {pokemon.height/10}m</Text>
                        </ListItem>
                        <ListItem itemDivider>
                            <Text style={{fontWeight: 'bold'}}>Abilities</Text>
                        </ListItem>
                        <List dataArray={pokemon.abilities} renderRow={(item) => <ListItem key={item.ability.name}>
                            <Text>{item.ability.name}</Text>
                        </ListItem>}>
                        </List>
                    </View>
                </ScrollView>
            </ImageBackground>
        );
}

export default SearchBody;

const styles = StyleSheet.create({
    header: {
        fontSize: 30,
        color: 'red',
        textAlign: 'center'
    },
    viewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    img: {
        width: 200,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center'
    },
    info: {
        flex:1,
        backgroundColor: 'white',
        opacity: 0.8
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        height: height,
        width: width,
    }

})