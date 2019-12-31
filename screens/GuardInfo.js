import React from 'react'
import Firebase, { db } from '../config/Firebase'
import { connect } from 'react-redux'
import { View, TextInput, StyleSheet, Text, Button } from 'react-native'

class GuardInfo extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            users: [],
        }
    }

	handleBack = () => {
        this.props.navigation.navigate('Profile')
    }

    renderItem(obj){    
        return (
            <View style={styles.containerBox2}>
                {/*<Text style={styles.bold}>{obj.userId}</Text>
                <Text> | </Text>*/}
                <Text>{obj.userName}</Text>
                <Text> | </Text>
                <Text>{obj.userEmail}</Text>
            </View>
        )
    }

    componentDidMount() {
        db.collection('users').get().then((snapshot) =>{
            snapshot.docs.forEach(doc => {
                this.setState(prevState => ({
                    users: [...this.state.users, {
                        /*'userId': doc.id,*/
                        'userName': doc.data().name,
                        'userEmail': doc.data().email
                    }]
                }))
            })
        })
    }

	render() {
        return (
        	<View style={styles.containerBox}>
                <Text style={styles.title}>Guard info</Text>
                <View style={styles.fromTop}>
                    <View style={styles.containerBox2}>
                        <Text style={styles.secondTitle}>{/*ID | */}User name | Email</Text>
                    </View>
                    {this.state.users.map(item => this.renderItem(item))}
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

export default connect(mapStateToProps)(GuardInfo)