import React, { useState, useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

const SignupScreen = ({ navigation }) => {
    const { state, signup } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return <View style={styles.container}>
        <Spacer>
            <Text h3>Sign Up For Tracker</Text>
        </Spacer>
        <Input label="Email" 
            value={email} 
            onChangeText={setEmail} 
            autoCapitalize="none"
            autoCorrect={false}
        />
        <Spacer />
        <Input label="Password" 
            secureTextEntry
            value={password} 
            onChangeText={setPassword} 
            autoCapitalize="none"
            autoCorrect={false}
        />
        {state.errorMessage ? <Text style={styles.errorMessge}>{state.errorMessage}</Text> : null}
        <Spacer>
            <Button title="Sign Up" onPress={() => signup({ email, password })} />
        </Spacer>
        <TouchableOpacity onPress={() => {navigation.navigate('Signin')}}>
            <Spacer>
                <Text style={styles.link}>Already have an account? Sign in instead.</Text>
            </Spacer>
        </TouchableOpacity>
    </View>;
}

SignupScreen.navigationOptions = () => {
    return {
        header: () => false
    }
};

const styles = StyleSheet.create({
    container: {
        borderColor: 'red',
        borderWidth: 10,
        flex: 1,
        justifyContent: 'center',
        marginBottom: 100
    },
    errorMessge: {
        paddingLeft: 10,
        fontSize: 16,
        color: 'red'
    },
    link: {
        color: 'blue'
    }
});

export default SignupScreen;
