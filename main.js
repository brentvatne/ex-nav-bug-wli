import Exponent from 'exponent';
import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  createRouter,
  NavigationContext,
  NavigationProvider,
  StackNavigation,
} from '@exponent/ex-navigation';


class FirstScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'First',
    }
  }

  async componentWillMount() {
    this.props.navigator.push('second');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>FirstScreen</Text>
      </View>
    )
  }
}

class SecondScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Second',
    }
  }

  async componentWillMount() {
    this.props.navigator.replace('third');

    // Uncomment this to see even worse times
    // setTimeout(() => {
    //   this.props.navigator.replace('third');
    // }, 100);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>SecondScreen</Text>
      </View>
    )
  }
}

class ThirdScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Third',
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>ThirdScreen</Text>
      </View>
    )
  }
}

const Router = createRouter(() => ({
  first: () => FirstScreen,
  second: () => SecondScreen,
  third: () => ThirdScreen,
}));

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <NavigationProvider router={Router}>
          <StackNavigation initialRoute={'first'} />
        </NavigationProvider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

Exponent.registerRootComponent(App);
