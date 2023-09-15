import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Balance() {
    return (
        <View style={styles.container}>
            <View style={styles.item}>
                <Text style={styles.itemTitle}>Saldo</Text>
                <View>
                    <Text style={styles.currencySymbol}>R$</Text>
                    <Text style={styles.balance}>15.000,00</Text>
                </View>
            </View>

            <View style={styles.item}>
                <Text style={styles.itemTitle}>Gastos</Text>
                <View>
                    <Text style={styles.currencySymbol}>R$</Text>
                    <Text style={styles.balance}>1.000,00</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {},
    item: {},
    itemTitle: {},
    currencySymbol: {},
    balance: {},
});
