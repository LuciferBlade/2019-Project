import React from 'react'
import Firebase, { db } from '../config/Firebase'
import { connect } from 'react-redux'
import { View, TextInput, StyleSheet, Text, Button } from 'react-native'


class LocationsAdd extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            'locId': '',
            'locName': '',
            'locAdress': '',
        }
    }

	handleBack = () => {
        this.setState({
            locName: '',
            locAdress: '',
        })
        this.props.navigation.navigate('Locations')
    }

    handleAdd = () => {
            const location = {
                Name: this.state.locName,
                Adress: this.state.locAdress,
            }
            db.collection('Locations')
                .doc()
                .set(location)
        this.props.navigation.navigate('Locations')
    }

	render() {
        return (
        	<View style={styles.containerBox}>
        	    <Text style={styles.title}>Add new location</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={locName => this.setState({locName})}
                    placeholder='Object name'
                    autoCapitalize='none'
                />
                <TextInput
                    style={styles.input}
                    onChangeText={locAdress => this.setState({locAdress})}
                    placeholder='Adress'
                    autoCapitalize='none'
                />
                <Button
                    title='Add Location'
                    style={styles.button}
                    color='#0EA13F'
                    onPress={this.handleAdd}
                />
        		<Button
                    title='Back'
                    style={styles.button}
                    onPress={this.handleBack}
                />
        	</View>
    	)
	}
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    containerBox: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        alignItems: 'center',
        
    },
    containerBox2: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    fromTop: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    input: {
        borderColor: '#0EA13F',
        borderBottomWidth: 1,
        textAlign: 'center',
    },
    button: {
        alignItems: 'center',
    },
    button2: {
        alignItems: 'center',
    },
});

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(LocationsAdd)