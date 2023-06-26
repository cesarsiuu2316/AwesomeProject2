import { useState } from 'react';
import { StyleSheet, View, Image, TouchableNativeFeedback } from 'react-native';
import colors from './colors';
import { useNavigation } from '@react-navigation/native';

const btnContinuar = () => {
    const [backgroundColor, setBackgroundColor] = useState(colors.lightBlue);
    const navigation = useNavigation();
    const handlePress = () => {
        navigation.navigate('Reserva');
        setBackgroundColor(colors.darkBlue);
        setTimeout(() => {
            setBackgroundColor(colors.lightBlue);
        }, 100);
    };

    return (
        <>
            <View style={styles.view}>
                <TouchableNativeFeedback onPress={handlePress}>
                    <View style={{ backgroundColor: backgroundColor, width: 224, height: 57, }}>
                        <Image resizeMode="contain" style={styles.image} source={require("../assets/continuar.png")} ></Image>
                    </View>
                </TouchableNativeFeedback>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: colors.lightBlue,
        width: "100%",
        height: 70,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: "100%",
        height: "100%",
    }
});


export default btnContinuar