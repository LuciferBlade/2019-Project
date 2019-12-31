import React from 'react'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import Login from '../screens/Login'
import Signup from '../screens/Signup'
import Profile from '../screens/Profile'
import EditProfile from '../screens/EditProfile'
import SleepyCat from '../screens/SleepyCat'
import Locations from '../screens/Locations'
import LocationsAdd from '../screens/LocationsAdd'
import GuardInfo from '../screens/GuardInfo'
import ProtectedLocations from '../screens/ProtectedLocations'
import Logs from '../screens/Logs'

const SwitchNavigator = createSwitchNavigator(
    {
        Login: {
            screen: Login
        },
        Signup: {
            screen: Signup
        },
        Profile: {
            screen: Profile
        },
        EditProfile: {
            screen: EditProfile
        },
        SleepyCat: {
            screen: SleepyCat
        },
        Locations: {
            screen: Locations
        },
        LocationsAdd: {
            screen: LocationsAdd
        },
        GuardInfo: {
            screen: GuardInfo
        },
        ProtectedLocations: {
            screen: ProtectedLocations
        },
        Logs: {
            screen: Logs
        }
    },
    {
        initialRouteName: 'Login'
    }
)

export default createAppContainer(SwitchNavigator)
