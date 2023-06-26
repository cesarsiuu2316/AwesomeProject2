import { useState } from 'react';
import { StyleSheet, View, Image, TouchableNativeFeedback } from 'react-native';
import colors from './colors';


const btnAtras = () => {
    const [backgroundColor, setBackgroundColor] = useState(colors.lightBlue);
    const handlePress = () => {
        setBackgroundColor(colors.darkBlue);
        setTimeout(() => {
            setBackgroundColor(colors.lightBlue);
        }, 100);
    };

    return (
        <>
            <View style={styles.view}>
                <TouchableNativeFeedback onPress={handlePress}>
                    <View style={{ backgroundColor: backgroundColor, width: 60, height: 60, }}>
                        <Image resizeMode="contain" style={styles.image} source={require("../assets/flechaAtras.png")} ></Image>
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
        alignItems: "flex-start",
    },
    image: {
        width: "100%",
        height: "100%",
    }
});


export default btnAtras