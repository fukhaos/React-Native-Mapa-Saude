import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    marginLeft: 33, //firula
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  button: {
    marginBottom: 20,
    width: 200,
    height: 48,
    borderRadius: 8,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
