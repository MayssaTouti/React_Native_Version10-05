import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet, 
    TextInput, 
    TouchableOpacity, 
    TouchableHighlight
} from 'react-native';

class SearchComponent extends Component {
constructor(props){
    super(props); 
   
}



render(){
    return (
        <View style={styles.main}>
            <Text style={styles.title}>Search For Github User</Text>
            <TextInput
                style={styles.searchInput}
            />
            <TouchableHighlight
                style={styles.button}
                underlayColor="white"
            >
                <Text
                    style={styles.buttonText}>
                    SEARCH
                </Text>
            </TouchableHighlight>
        </View>
    )
}
}

export default SearchComponent
const styles = StyleSheet.create({
    main: {
        flex: 1,
        padding: 30,
        marginTop: 65,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#2a8ab7'
    },
    title: {
        marginBottom: 20,
        fontSize: 25,
        textAlign: 'center'
    },
    searchInput: {
        height: 50,
        padding: 4,
        marginRight: 5,
        fontSize: 23,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 8,
        color: 'white'
    },
    buttonText: {
        fontSize: 18,
        color: '#111',
        alignSelf: 'center'
    },
    button: {
        height: 45,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        marginTop: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
    }
});