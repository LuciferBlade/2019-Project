import React from 'react'
import Firebase, { db } from '../config/Firebase'
import { connect } from 'react-redux'
import { View, TextInput, StyleSheet, Text, Button } from 'react-native'

{/*const getData = () => {
    return async () => {
        const locData = await db.collection('Locations').get()
    }
}*/} 

class Locations extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            location: [],
        }
        
    }

	handleBack = () => {
        this.props.navigation.navigate('Profile')
    }

    handleAdd = () => {
    	this.props.navigation.navigate('LocationsAdd')
    }

    renderItem(obj){    
        return (
            <View style={styles.containerBox2}>
                <Text style={styles.bold}>{obj.locId}</Text>
                <Text> | </Text>
                <Text>{obj.locName}</Text>
                <Text> | </Text>
                <Text>{obj.locAdress}</Text>
            </View>
        )
    }

    componentDidMount() {
        db.collection('Locations').get().then((snapshot) =>{
            snapshot.docs.forEach(doc => {
                this.setState(prevState => ({
                    location: [...this.state.location, {
                        'locId': doc.id,
                        'locName': doc.data().Name,
                        'locAdress': doc.data().Adress
                    }]
                }))
            })
        })
    }

	render() {
        return (
        	<View style={styles.containerBox}>
                <Text style={styles.title}> Registered Locations </Text>
                    <View style={styles.fromTop}>
                        <View style={styles.containerBox2}>
                            <Text style={styles.secondTitle}>ID | Object name | Adress</Text>
                        </View>
                        {this.state.location.map(item => this.renderItem(item))}
                    </View>
        		<View style={styles.containerBox2}>
        			<Text>Add new Location</Text>
        			<Text>   </Text>
        			<Button
                        title='Add'
                        style={styles.button}
                        color='#0EA13F'
                        onPress={this.handleAdd}
                    />
                </View>
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
    secondTitle: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    bold: {
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
        alignItems: 'flex-start',
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

export default connect(mapStateToProps)(Locations)