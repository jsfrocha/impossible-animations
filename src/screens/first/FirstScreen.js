import React, { Component } from 'react';
import {StyleSheet, Text, View, Platform} from "react-native";
import Spinner from 'react-native-spinkit';
import TouchableNativeFeedback from "../../components/TouchableNativeFeedback";

class FirstScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      spinnerDefaultSize: 200,
      spinners: [],
      counter: 0
    };
  }

  componentDidMount() {
    this.addSpinner();
  }

  addSpinner = () => {
    this.setState({
      counter: this.state.counter + 10
    }, () => {
      let arr = this.state.spinners.slice();
      arr.push(this.state.counter)
      this.setState({
        spinners: arr
      });
    });
  };

  removeSpinner = () => {
    if (this.state.counter === 0) return;

    this.setState({
      counter: this.state.counter - 10
    }, () => {
      let arr = this.state.spinners.slice();
      arr.pop();
      this.setState({
        spinners: arr
      });
    });

  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.wrapper}>

        <View style={styles.header}>
          <Text style={styles.headerText}>Impossible Animations</Text>
        </View>

        <TouchableNativeFeedback style={styles.actionButton} background={TouchableNativeFeedback.Ripple('#AAF', true)} onPress={() => { this.addSpinner() }}>
          <View style={styles.incrementButton}>
            <Text style={styles.buttonText}>+</Text>
          </View>
        </TouchableNativeFeedback>

        <View style={styles.spinnerContainer}>

          <View style={styles.counterContainer}>
            <Text style={styles.counter}>{this.state.spinners.length}</Text>
          </View>

          {this.state.spinners.map((index) => (
            <Spinner
              key={index}
              style={styles.spinner}
              isVisible={true}
              size={200 + (index * 10)}
              color={'#'+Math.floor(Math.random()*16777215).toString(16)}
              type={'Pulse'}
            />
          ))}
        </View>

        <TouchableNativeFeedback style={styles.actionButton} background={TouchableNativeFeedback.Ripple('#AAF', true)} onPress={() => { this.removeSpinner() }}>
          <View style={styles.decrementButton}>
            <Text style={styles.buttonText}>-</Text>
          </View>
        </TouchableNativeFeedback>

      </View>
    )
  }
}


const PLATFORM_OS = Platform.OS;
const HEADER_HEIGHT = PLATFORM_OS === 'android' ? 60 : 70;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#488EFF',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  header: {
    paddingTop: PLATFORM_OS === 'ios' ? 26 : 16,
    paddingBottom: 16,
    justifyContent: PLATFORM_OS === 'ios' ? 'flex-end' : 'center',
    alignItems: 'center',
    height: HEADER_HEIGHT,
    flexDirection: 'row',
    backgroundColor: '#F9F9F9',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,.12)',
    zIndex: 100
  },
  headerText: {
    flex: 1,
    fontSize: Platform.OS === 'android' ? 20 : 17,
    color: '#3B3F3F',
    backgroundColor: 'transparent',
    paddingRight: 8,
    textAlign: 'center',
    ...Platform.select({
      ios: {
        paddingTop: 16
      }
    }),

  },
  counterContainer: {
    borderRadius: 100,
    width: 100,
    height: 100,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 48,
    zIndex: 100
  },
  counter: {
    fontSize: 48
  },
  spinnerContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  spinner: {
    position: 'absolute',
  },
  buttonsContainer: {

  },
  actionButton: {
    borderRadius: 100,
    width: 100,
    height: 100,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100,
    margin: 48
  },
  buttonText: {
    fontSize: 36,
    color: '#488EFF'
  },
  incrementButton: {
  },
  decrementButton: {
  }
});

export default FirstScreen;
