import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
    Dimensions,
} from 'react-native';

import colors from './Components/colors';
import btnContinuar from './Components/btnContinuar';
import fonts from './Components/fonts';
import gridServicios from './Components/gridServicios';

const InfoLugar = () => {
    const screenWidth = Dimensions.get('window').width;
    const viewWidthPercentage = 90; // The desired percentage width for the view

    const viewWidth = (screenWidth * viewWidthPercentage) / 100;
    return <>
        <SafeAreaView style={styles.container}>

            <ScrollView style={styles.ScrollView}>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20, }}>
                    <View>
                        <Text style={styles.TextoHeading}>Acerca del lugar</Text>
                        <View style={[styles.cuadroInfo, { width: viewWidth }]}>
                            <Text style={styles.textoInfo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla vestibulum ligula, et maximus leo porta vitae. Maecenas id pulvinar diam. Aliquam eget bibendum eros. Ut eget nulla et sapien rhoncus dapibus sit amet et quam. Donec ultrices libero et nibh condimentum eleifend. Maecenas lobortis sapien porttitor efficitur eleifend. Proin dapibus libero nec pulvinar consequat.
                                Phasellus sodales congue augue, at viverra velit facilisis in. Etiam imperdiet rutrum risus. Ut feugiat velit felis, et iaculis turpis consectetur pretium. Sed suscipit lorem in lectus scelerisque pulvinar. Duis massa purus, congue a porttitor sed, ullamcorper non ligula. Phasellus sit amet neque congue, aliquet.</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.TextoHeading}>Servicios Destacados</Text>
                        <View style={[styles.cuadroInfo, { width: viewWidth }]}>
                            {gridServicios()}
                        </View>
                    </View>
                    <View>
                        <Text style={styles.TextoHeading}>Ubicación</Text>
                        <View style={[styles.cuadroInfo, { width: viewWidth, height: 200 }]}>
                            <Text style={styles.textoInfo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla vestibulum ligula, et maximus leo porta vitae. Maecenas id pulvinar diam. Aliquam eget bibendum eros. Ut eget nulla et sapien rhoncus dapibus sit amet et quam. Donec ultrices libero et nibh condimentum eleifend. Maecenas lobortis sapien porttitor efficitur eleifend. Proin dapibus libero nec pulvinar consequat.
                                Phasellus sodales congue augue, at viverra velit facilisis in. Etiam imperdiet rutrum risus. Ut feugiat velit felis, et iaculis turpis consectetur pretium. Sed suscipit lorem in lectus scelerisque pulvinar. Duis massa purus, congue a porttitor sed, ullamcorper non ligula. Phasellus sit amet neque congue, aliquet.</Text>
                        </View>
                    </View>

                    <View>
                        <Text style={styles.TextoHeading}>Contacto</Text>
                        <View style={[styles.cuadroInfo, { width: viewWidth }]}>
                            <Text style={styles.textoInfo}>Número: 21312312{'\n'}
                                Correo: adsfasdf@gmail.com</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View>
                {btnContinuar()}
            </View>
        </SafeAreaView>
    </>;
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1,
    },
    ScrollView: {

    },
    cuadroInfo: {
        height: "auto",
        borderWidth: 4,
        borderColor: colors.lightBlue,
        backgroundColor: colors.white,
        marginBottom: 20,
        padding: 10,
    },
    TextoHeading: {
        color: fonts.color,
        fontSize: fonts.bf,
        paddingBottom: 5,
    },
    textoInfo: {
        color: fonts.color,
        fontSize: fonts.nf,
        lineHeight: fonts.heightNf,
    },
});

export default InfoLugar;
