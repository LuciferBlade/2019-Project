import React from 'react'
import Firebase, { db } from '../config/Firebase'
import { connect } from 'react-redux'
import { View, TextInput, StyleSheet, Text, Button } from 'react-native'

class ProtectedLocations extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            guardsLocation: [],
        }
        
    }

	handleBack = () => {
        this.props.navigation.navigate('Profile')
    }

    renderItem(obj){    
        return (
            <View style={styles.containerBox2}>
                <Text>{obj.userName}</Text>
                <Text> | </Text>
                <Text>{obj.locName}</Text>
                <Text> | </Text>
                <Text>{obj.locAdress}</Text>
            </View>
        )
    }

    componentDidMount() {
        db.collection('guardsLocation').get().then((snapshot) =>{
            snapshot.docs.forEach(doc => {
                this.setState(prevState => ({
                    guardsLocation: [...this.state.guardsLocation, {
                        'locId': doc.data().locationUID,
                        'userId': doc.data().userUID,
                        'userName': '',
                        'locName': '',
                        'locAdress': '',
                    }]
                }))
            })
        })
        /*console.log(JSON.stringify(this.state.logs[index]))*/
        db.collection('users').get().then((snapshot) =>{
            snapshot.docs.forEach(doc => {
                this.state.guardsLocation.map((item, index) => {
                    if (item.userId === doc.id){
                        this.setState(({guardsLocation}) => ({
                            guardsLocation: [
                                ...guardsLocation.slice(0, index),
                                {
                                    ...guardsLocation[index],
                                    userName: doc.data().name,
                                },
                                ...guardsLocation.slice(index+1)
                            ]
                        }))
                    }
                })
            })
        })
        
        db.collection('Locations').get().then((snapshot) =>{
            snapshot.docs.forEach(doc => {
                this.state.guardsLocation.map((item, index) => {
                    if (item.locId === doc.id){
                        this.setState(({guardsLocation}) => ({
                            guardsLocation: [
                                ...guardsLocation.slice(0, index),
                                {
                                    ...guardsLocation[index],
                                    locName: doc.data().Name,
                                    locAdress: doc.data().Adress,
                                },
                                ...guardsLocation.slice(index+1)
                            ]
                        }))
                    }
                })
            })
        })
    }

    render() {
        return (
            <View style={styles.containerBox}>
                <Text style={styles.title}>Logs</Text>
                <View style={styles.fromTop}>
                    <View style={styles.containerBox2}>
                        <Text style={styles.secondTitle}>Guard Name | Object name | Adress</Text>
                    </View>
                    {this.state.guardsLocation.map(item => this.renderItem(item))}
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

export default connect(mapStateToProps)(ProtectedLocations)