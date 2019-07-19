import React,{Component} from 'react';
import {Text,View, Image} from 'react-native';

class Home extends Component {
    state = {
        myState: 'Hello World!'
    }
    updateState = () => this.ListeningStateChangedEvent({myState: 'Goodbye'})
    render(){
        let pic = {
            url:'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return(
            <View>
                <Text onPress = {this.updateState}>
                    {this.state.myState}
                </Text>
                <Image source = {pic} style = {{width: 200, height: 200}}/>
            </View>
        );
    }
}
export default Home;