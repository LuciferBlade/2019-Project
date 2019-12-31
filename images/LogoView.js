import React, { Component } from 'react'
import { View, Image } from 'react-native'

const LogoView = () => (
	<View>
    	<Image 
   			source = {require('../images/logo.png')}
			style = {{ width: 280, height: 320 }}
    	/>
    </View>
)

export default LogoView