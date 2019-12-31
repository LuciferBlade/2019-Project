import React from 'react'
import { View, Text, StyleSheet, Button, Image } from 'react-native'
import { connect } from 'react-redux'
import Firebase, { db } from '../config/Firebase'

class Profile extends React.Component {

    handleSignout = () => {
        Firebase.auth().signOut()
        this.props.navigation.navigate('Login')
    }

    handleEdit = () => {
        this.props.navigation.navigate('EditProfile')
    }

    handleLocations = () => {
        this.props.navigation.navigate('Locations')
    }

    handleCat = () => {
        this.props.navigation.navigate('SleepyCat')
    }

    handleProtected = () => {
        this.props.navigation.navigate('ProtectedLocations')
    }

    handleGuards = () => {
        this.props.navigation.navigate('GuardInfo')
    }

    handleLogs = () => {
        this.props.navigation.navigate('Logs')
    }

    render() {
        return (
            <View style={styles.containerBox}>
                <Text style={styles.title}>
                    Profile Window
                </Text>
                <View style={styles.fromTop}>
                    <View style={styles.containerBox2}>
                        <Text>Your email: </Text>
                        <Text>{this.props.user.email}</Text>
                    </View>
                    <View style={styles.containerBox2}>
                        <Text>Name: </Text>
                        <Text>{this.props.user.name}</Text>
                    </View>
                    {/*
                    <View style={styles.containerBox2}>
                        <Text>Your UID supposed to be: </Text>
                        <Text>{this.props.user.uid}</Text>
                    </View>
                    */}
                </View>
                <View style={styles.containerBox2}>
                    <Button
                        title='Edit profile'
                        style={styles.button}
                        color='#0EA13F'
                        onPress={this.handleEdit}
                    />
                    <Text>  </Text>
                    <Button
                        title='Cat...'
                        style={styles.button}
                        color='#0EA13F'
                        onPress={this.handleCat}
                    />
                </View>

                <View style={styles.containerBox2}>
                    <Button
                        title='Locations'
                        style={styles.button}
                        color='#0EA13F'
                        onPress={this.handleLocations}
                    />
                    <Text>  </Text>
                    <Button
                        title='Guards'
                        style={styles.button}
                        color='#0EA13F'
                        onPress={this.handleGuards}
                    />
                    <Text>  </Text>
                    <Button
                        title='Protected Locations'
                        style={styles.button}
                        color='#0EA13F'
                        onPress={this.handleProtected}
                    />
                    <Text>  </Text>
                    <Button
                        title='Logs'
                        style={styles.button}
                        color='#0EA13F'
                        onPress={this.handleLogs}
                    />
                </View>
                <Text>  </Text>
                
                <Button
                    title='Logout'
                    style={styles.button}
                    onPress={this.handleSignout}
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

export default connect(mapStateToProps)(Profile)
