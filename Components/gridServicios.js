import { StyleSheet, View, Image, Text } from 'react-native';
import fonts from './fonts';

const gridServicios = () => {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.row}>
                    <View style={[styles.cell, true === false && styles.cellOpacidad]}>
                        <View style={styles.fondoImagen}>
                            <Image resizeMode="contain" style={styles.image} source={require("../assets/wifi.png")} ></Image>
                        </View>
                        <Text style={styles.text}>Wifi gratis</Text>
                    </View>
                    <View style={[styles.cell, true === false && styles.cellOpacidad]}>
                        <View style={styles.fondoImagen}>
                            <Image resizeMode="contain" style={styles.image} source={require("../assets/estacionamiento.png")} ></Image>
                        </View>
                        <Text style={styles.text}>Estacionamiento</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={[styles.cell, true === true && styles.cellOpacidad]}>
                        <View style={styles.fondoImagen}>
                            <Image resizeMode="contain" style={styles.image} source={require("../assets/piscina.png")} ></Image>
                        </View>
                        <Text style={styles.text}>Piscina</Text>
                    </View>
                    <View style={[styles.cell, true === false && styles.cellOpacidad]}>
                        <View style={styles.fondoImagen}>
                            <Image resizeMode="contain" style={styles.image} source={require("../assets/mascotas.png")} ></Image>
                        </View>
                        <Text style={styles.text}>Mascotas</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={[styles.cell, true === false && styles.cellOpacidad]}>
                        <View style={styles.fondoImagen}>
                            <Image resizeMode="contain" style={styles.image} source={require("../assets/restaurante.png")} ></Image>
                        </View>
                        <Text style={styles.text}>Restaurante</Text>
                    </View>
                    <View style={[styles.cell, true === true && styles.cellOpacidad]}>
                        <View style={styles.fondoImagen}>
                            <Image resizeMode="contain" style={styles.image} source={require("../assets/gimnasio.png")} ></Image>
                        </View>
                        <Text style={styles.text}>Gimnasio</Text>
                    </View>
                </View>
            </View >
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    row: {
        flexDirection: "row",
        paddingBottom: 5,
    },
    cell: {
        width: 160,
        height: 30,
        padding: 2,
        flex: 1,
        flexDirection: "row",
    },
    cellOpacidad: {
        opacity: 0.2,
    },
    image: {
        width: "100%",
        height: "100%",
    },
    fondoImagen: {
        width: 25,
        height: 25,
        marginRight: 4,
    },
    text: {
        color: fonts.color,
        fontSize: fonts.nf,
    },

});

export default gridServicios