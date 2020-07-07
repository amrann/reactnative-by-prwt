import React from 'react'
import {View, Image, Text, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const MateriPosition = () => {
    return(
        <View style={styles.wrapper}>
            <View style={styles.cartWrapper}>
                {/* <Image source={} style={styles.iconCart} /> */}
                <Icon name="airplane-sharp" size={50} style={styles.iconCart} />
                <Text style={styles.notif}>10</Text>
            </View>
            <Text style={styles.text}>Keranjang Belanja Anda</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {padding: 20, alignItems: 'center'},
    cartWrapper: {
        borderWidth: 1,
        borderColor: '#4398D1',
        width: 93,
        height: 93,
        borderRadius: 93/2,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    text: {
        fontSize: 12,
        color: '#777777',
        fontWeight: '700',
        marginTop: 15
    },
    notif: {
        fontSize: 12,
        color: 'white',
        backgroundColor: '#6FCF97',
        padding: 4,
        borderRadius: 25,
        width: 24,
        height: 24,
        // Position absolute ini membuat kita bebas untuk memindahkan komponen kemana saja
        position: 'absolute',
        top: 0,
        right: 0
    }
})

export default MateriPosition