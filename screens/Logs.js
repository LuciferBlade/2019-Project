import React from 'react'
import Firebase, { db } from '../config/Firebase'
import { connect } from 'react-redux'
import { View, TextInput, StyleSheet, Text, Button } from 'react-native'

class Logs extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            logs: [],
        }
        
    }

	handleBack = () => {
        this.props.navigation.navigate('Profile')
    }

    renderItem(obj){    
        return (
            <View style={styles.containerBox2}>
                {/*<Text style={styles.bold}>{obj.logId}</Text>
                <Text> | </Text>*/}
                <Text>{obj.userName}</Text>
                <Text> | </Text>
                <Text>{JSON.stringify(obj.timeStamp.toDate())}</Text>
            </View>
        )
    }

    componentDidMount() {
        db.collection('logs').get().then((snapshot) =>{
            snapshot.docs.forEach(doc => {
                this.setState(prevState => ({
                    logs: [...this.state.logs, {
                        'logId': doc.id,
                        'userId': doc.data().userUID,
                        'userName': '',
                        'timeStamp': doc.data().logDate,
                    }]
                }))
            })
        })
        db.collection('users').get().then((snapshot) =>{
            snapshot.docs.forEach(doc => {
                this.state.logs.map((item, index) => {
                    if (item.userId === doc.id){
                        /*console.log(JSON.stringify(this.state.logs[index]))*/
                        this.setState(({logs}) => ({
                            logs: [
                                ...logs.slice(0, index),
                                {
                                    ...logs[index],
                                    userName: doc.data().name,
                                },
                                ...logs.slice(index+1)
                            ]
                        }))
                        /*console.log(JSON.stringify(this.state.logs[index]))*/
                    }
                })
            })
        })
    }

	render() {
        return (
        	<View style={styles.containerBox}>
                <Text style={styles.title}>Last login timestamps</Text>
                <View style={styles.fromTop}>
                    <View style={styles.containerBox2}>
                        <Text style={styles.secondTitle}>User name | Timestamp</Text>
                    </View>
                    {this.state.logs.sort((a, b) => a.timeStamp > b.timeStamp).map(item => this.renderItem(item))}
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

export default connect(mapStateToProps)(Logs)