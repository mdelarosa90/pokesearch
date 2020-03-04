import React from 'react';
import { View, Image, StyleSheet } from 'react-native'

class PokeLoader extends React.Component {
    render() {
        return(
            <View style={{flex:1}}>
                <Image source={{uri: 'https://media.tenor.com/images/39d6060576a516f1dd437eafccafbdb1/tenor.gif'}} style={styles.img}/>
            </View>
        )
    }
}

export default PokeLoader;

const styles = StyleSheet.create({
    img: {
        width: 400,
        height: 400,
        justifyContent: 'center',
        alignItems: 'center'
    }
})