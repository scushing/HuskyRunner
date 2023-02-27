import React, {Component} from "react";
import { View } from "react-native";

interface DawgProps {
    dawgBottom : number;
    dawgLeft : number;
    falling : any;
}

interface DawgState {}

class Dawg extends Component<DawgProps, DawgState>{

    render() {
        return (
            <View style={{
                position: "absolute",
                backgroundColor: "purple",
                width: 50,
                height: 60,
                bottom: this.props.dawgBottom,
                left: this.props.dawgLeft,
            }}/>
        )
    }


}

export default Dawg