import React, {Component} from "react";
import { View, Text } from "react-native";

interface TimerProps {
    timerBottom : number;
    timerLeft : number;
    currentTime : number;
}

interface TimerState {}

class Timer extends Component<TimerProps, TimerState> {
    render() {
        return (
            <>
                <View style={{
                bottom: this.props.timerBottom,
                left: this.props.timerLeft,
                }}/>
                <Text>{this.props.currentTime}</Text>
            </>
        )
    }
}

export default Timer