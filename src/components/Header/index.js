import React from "react";
import {
    View,
    StyleSheet,
    Text,
    StatusBar,
    TouchableOpacity,
} from "react-native";

// Icone
import { Feather } from "@expo/vector-icons";

// Manipular a Status Bar para se adequar ao dispositivo
// Se conseguir pegar o currentHeight é android e pega esse valor +22, se não, é IOS e coloca o 64
const statusBarHeight = StatusBar.currentHeight
    ? StatusBar.currentHeight + 22
    : 64;

export default function Header({ name }) {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.username}>{name}</Text>

                {/* Botão que ao clicar cria uma opacidade
                activeOpacity: Controla essa opacidade */}
                <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>
                    <Feather name="user" size={27} color={"#FFF"} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#8000ff",
        paddingTop: statusBarHeight,
        flexDirection: "row",
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 44,
    },
    content: {
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    username: {
        fontSize: 18,
        color: "#FFF",
        fontWeight: "bold",
    },
    buttonUser: {
        width: 44,
        height: 44,
        backgroundColor: "rgba(255,255,255,0.5)",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 44 / 2,
    },
});
