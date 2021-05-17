import * as React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {click} from '@actions/app';

const Login = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.loginText}>{`Logged in : ` + props.app.clicked}</Text>
      {props.app.clicked ? (
        <>
          <TouchableOpacity
            onPress={() => props.click(false)}
            style={styles.loginButton}>
            <Text style={styles.textStyle}>Logout Now</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <TouchableOpacity
            onPress={() => props.click(true)}
            style={styles.loginButton}>
            <Text style={styles.textStyle}>Click To Login</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const mapStateToProps = ({app}) => {
  return {
    app: app,
  };
};
const mapDispatchToProps = {
  click: click,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButton: {
    backgroundColor: 'black',
    padding: 16,
    borderRadius: 10,
  },
  textStyle: {
    color: 'white',
  },
  loginText: {marginBottom: 10},
});
