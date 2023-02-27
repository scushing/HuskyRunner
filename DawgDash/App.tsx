import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Dawg from "./components/Dawg";

export default function App() {



    return (
        <View style={styles.container}>
            <Text>Dawg Dash!</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
