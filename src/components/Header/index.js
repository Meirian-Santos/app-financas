import React from "react";
import { View, StyleSheet, Text, Statusbar } from "react-native";

export default function Header() {
    return (
        <View>
            <Text>Header do App</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000ff",
    },
});
