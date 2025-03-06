import { FlatList, StyleSheet, Text, View } from "react-native";
import Header from "../../components/Header";
import Balance from "../../components/Balance";
import Movements from "../../components/Movements";
import Actions from "../../components/Actions";

const list = [
    {
        id: 1,
        label: "Bolelo Conta de Luz",
        value: "250,00",
        data: "18/08/2023",
        type: 0, // despesas
    },
    {
        id: 2,
        label: "Pix Cliente X",
        value: "2.600,00",
        data: "01/08/2023",
        type: 1, // receitas
    },
    {
        id: 3,
        label: "Salário",
        value: "5.700,00",
        data: "05/08/2023",
        type: 1, // receitas
    },
];

export default function Home() {
    return (
        <View style={styles.container}>
            <Header name="Junior Silva" />
            <Balance saldo="9.250,90" gastos="-328,00" />
            <Actions />
            <Text style={styles.title}>Últimas movimentações</Text>
            <FlatList
                style={styles.title}
                data={list}
                keyExtractor={(item) => String(item.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <Movements data={item} />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fafafa",
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        margin: 14,
    },
    list: {
        marginStart: 14,
        marginEnd: 14,
    },
});
