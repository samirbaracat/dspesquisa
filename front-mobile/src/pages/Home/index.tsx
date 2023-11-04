import { Text, StyleSheet, View, Image, Alert } from "react-native";
import { FontAwesome5 as Icon } from '@expo/vector-icons';
import { GestureHandlerRootView, RectButton } from 'react-native-gesture-handler';
import { Header } from "../../components/Header";
import { useNavigation } from '@react-navigation/native';

export function Home() {

    const navigation = useNavigation();
    const handleOnPress = () => {
        navigation.navigate('CreateRecord');
    }

    return (
        <>
            <Header />
            <View style={styles.container}>
                <Image source={require('../../assets/gamer.png')} style={styles.gamerImage} />
                <Text style={styles.title}>Vote agora!</Text>
                <Text style={styles.subTitle}>Nos diga qual e seu jogo favorito</Text>
            </View>
            <GestureHandlerRootView style={styles.footer}>
                <RectButton style={styles.button} onPress={handleOnPress}>
                    <Text style={styles.buttonText}>COLETAR DADOS</Text>
                    <View style={styles.buttonIcon}>
                        <Text>
                            <Icon name="chevron-right" color="#FFF" size={25} />
                        </Text>
                    </View>
                </RectButton>
            </GestureHandlerRootView>
        </>

    )
}

const styles = StyleSheet.create({
    container: {
      marginTop:  '15%',
      backgroundColor: '#0B1F34',
      alignItems: 'center',
    },
    gamerImage: {
      width: 309,
      height: 288
    },
    title: {
      color: '#00D4FF',
      fontSize: 36,
      fontWeight: 'bold',
      marginTop: 31,
      fontFamily: "Inter_700Bold",
    },
    subTitle: {
      color: '#ED7947',
      fontSize: 21,
      marginTop: 15,
      fontFamily: "Inter_400Regular",
    },
    footer: {
      marginTop: '15%',
      alignItems: 'center'
    },
    button: {
      backgroundColor: '#00D4FF',
      flexDirection: 'row',
      borderRadius: 10
    },
    buttonIcon: {
      backgroundColor: '#ED7947',
      justifyContent: 'center',
      alignItems: 'center',
      width: 50,
      borderBottomRightRadius: 10,
      borderTopRightRadius: 10
    },
    buttonText: {
      paddingTop: 15,
      paddingBottom: 15,
      paddingLeft: 50,
      paddingRight: 50,
      fontFamily: "Inter_700Bold",
      fontWeight: 'bold',
      fontSize: 18,
      color: '#0B1F34',
    }
  });