import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ActivityIndicator,
  Alert,
  Button,
} from 'react-native';
import TruSdkReactNative from 'tru-sdk-react-native';
import axios from 'axios';

const client = axios.create({
  baseURL: 'https://3b6d5abbe836.ngrok.io',
  timeout: 30000,
});

export default function App() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [phoneNumber, setPhoneNumber] = React.useState<string>('');

  const showError = (error: string) =>
    Alert.alert('Something went wrong', `Error: ${error};`, [{ text: 'OK' }], {
      cancelable: false,
    });

  const showSuccess = () =>
    Alert.alert('All good', 'Check successful', [{ text: 'OK' }], {
      cancelable: false,
    });

  const triggerPhoneCheck = async () => {
    setIsLoading(true);
    try {
      const postCheckNumberRes = await client({
        method: 'post',
        url: '/check',
        data: { phone_number: phoneNumber },
      });
      console.log('[POST CHECK]:', postCheckNumberRes.data);

      await TruSdkReactNative.openCheckUrl(postCheckNumberRes.data.check_url);
      const checkStatusRes = await client({
        method: 'get',
        url: `/check_status?check_id=${postCheckNumberRes.data.check_id}`,
      });
      console.log('[CHECK RESULT]:', checkStatusRes);

      setIsLoading(false);
      showSuccess();
    } catch (err) {
      setIsLoading(false);
      showError(JSON.stringify(err));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.companyName}>TRU.id</Text>
      <TextInput
        keyboardType="phone-pad"
        placeholder="Phone number"
        placeholderTextColor="#d3d3d3"
        style={styles.input}
        value={phoneNumber}
        onChangeText={(phone) => setPhoneNumber(phone)}
      />
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <View style={styles.btnContainer}>
          <Button title="Login" onPress={triggerPhoneCheck} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  companyName: {
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 100,
  },
  input: {
    height: 40,
    borderColor: '#d3d3d3',
    borderWidth: 1,
    marginTop: 40,
    width: '60%',
    borderRadius: 2,
    fontWeight: 'bold',
    fontSize: 18,
  },
  loadingContainer: {
    marginTop: 40,
    justifyContent: 'center',
  },
  btnContainer: {
    marginTop: 30,
    justifyContent: 'center',
  },
});
