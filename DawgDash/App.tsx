import React from "react";
import {Dimensions, StyleSheet, Text, View} from "react-native";
import Box from "./Box";


export default function App() {
    const screenWidth = Dimensions.get("screen").width
    const screenHeight = Dimensions.get("screen").height

    console.log(screenWidth)
    console.log(screenHeight)

    return (
        <View style={styles.container}>
            <Box />
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
