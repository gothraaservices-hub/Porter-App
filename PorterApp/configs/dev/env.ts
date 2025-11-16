import { Platform } from 'react-native'

export default {
    baseUrl: Platform.OS === 'android' ? '' : ''
}