import React from 'react'
import { View, Text, StyleSheet, Button} from 'react-native'
import ImagesExample from '../images/ImagesExample'

class SleepyCat extends React.Component {

	handleBack = () => {
        this.props.navigation.navigate('Profile')
    }

	render() {
        return (
            <View style={styles.containerBox}>
            	<Text style={styles.title}>
                    Sleepy cat
                </Text>
            	<ImagesExample/>
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

export default SleepyCat