import React, {Component, useEffect, useState} from "react";
import {Dimensions, StyleSheet, Text, View} from "react-native";
import Dawg from "./components/Dawg"
import Timer from "./components/Timer"

const gravity : number = 3;
const floor : number = 10;
let gameTimerID : number = 0;
let dawgLeft : number;
let dawgBottom : number;

interface AppState {
    screenWidth : number;
    screenHeight : number;
}

class App extends Component<{ } , AppState>{

    constructor(props : any) {
        super(props);
        this.state = {
            screenWidth : Dimensions.get("screen").width,
            screenHeight : Dimensions.get("screen").height,
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Timer
                    timerBottom={this.state.screenHeight * 0.8}
                    timerLeft={this.state.screenWidth * 0.1}
                    currentTime={gameTimerID}
                />
                <Dawg
                    dawgBottom = {dawgBottom}
                    dawgLeft = {dawgLeft}
                    falling={fall(this)}
                />

            </View>
        );
    }

    init() {
        dawgBottom = this.state.screenHeight / 2;
        dawgLeft = this.state.screenWidth / 2;
    }

}

function fall(app : any) {
    //start dawg falling
    if (gameTimerID == 0) {
        app.init();
    }
    let falling : boolean = false;
    // useEffect(() => {
    //     if (dawgBottom > floor) {
    //         gameTimerID = setInterval(() => {
    //             dawgBottom = dawgBottom - gravity;
    //         }, 30)
    //         falling = true;
    //     } else {
    //         falling = false;
    //     }
    //     clearInterval(gameTimerID);
    // })
    return falling;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default App;