import React, { Component } from 'react'
import { View, Image } from 'react-native'

const ImagesExample = () => (
	<View>
    	<Image 
   			source = {require('../images/Zuu_the_sleepy_cat.jpg')}
			style = {{ width: 400, height: 400 }}
    	/>
    </View>
)

export default ImagesExample