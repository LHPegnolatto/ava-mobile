import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  card: {
    marginHorizontal: 20,
    alignSelf: 'stretch',
    height: 320,
    backgroundColor: '#ffffff',

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  redBox: {
    alignSelf: 'center',
    height: 70,
    width: 70,
    marginTop: -35,
    backgroundColor: '#d13239',
  },
  redBoxText: {
    flex: 1,
    alignSelf: 'center',
    textAlignVertical: 'bottom',
    fontSize: 20,
    color: '#ffffff',
  },
  redTitle: {
    alignSelf: 'center',
    fontSize: 16,
    marginTop: 20,
    color: '#d13239',
  },
  blackTitle: {
    alignSelf: 'center',
    fontSize: 16,
    marginTop: 5,
    color: '#1d1f23',
  },
  form: {
    marginHorizontal: 20,
    alignSelf: 'stretch',
    marginTop: 10,
  },
  inputTitle: {
    fontSize: 14,
    marginVertical: 5,
    color: '#d13239',
  },
  formInput: {
    borderBottomColor: '#1d1f23', 
    borderBottomWidth: 1,
    borderColor: '#eaeaea',
    borderWidth: 1,
    fontSize: 14,
    paddingHorizontal: 5
  },
  loginButton: {
    flex: 1,
    alignSelf: 'flex-end',
    margin: 20,
    padding: 10,
    backgroundColor: '#d13239',
  },
  loginButtonText: {
    flex: 1,
    alignSelf: 'center',
    textAlignVertical: 'center',
    fontSize: 16,
    color: '#fff',
  },
});

//'#d13239'