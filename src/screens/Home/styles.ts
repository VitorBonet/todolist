import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  logoView: {
    backgroundColor: '#0D0D0D',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginTop: 30,
    // height: 200,
    // resizeMode: 'stretch',
  },
  eventName: {
    color: '#FDFCFE',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48,
  },
  eventDate: {
    color: '#6B6B6B',
    fontSize: 16,
  },
  formView: {
    paddingLeft: 24,
    paddingRight: 24,
  },
  form: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 42,
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: '#262626',
    borderRadius: 5,
    color: '#F2F2F2',
    padding: 16,
    fontSize: 16,
    marginRight: 17,
    marginTop: -30,
  },
  buttonText: {
    color: '#F2F2F2',
    fontSize: 24,
  },
  button: {
    marginTop: -30,
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#1E6F9F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  filtersView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#808080',
    paddingBottom: 20,
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  buttonFilterTextBlue: {
    color: '#4EA8DE',
    fontSize: 18,
  },
  buttonFilterTextPurple: {
    color: '#8284FA',
    fontSize: 18,
  },
  buttonFilter: {
    color: '#F2F2F2',
    fontSize: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonFilterCountView: {
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 4,
    paddingRight: 4,
    marginLeft: 4,
    backgroundColor: '#6B6B6B',
    justifyContent: 'center',
    borderRadius: 10,
  },
  buttonFilterCount: {
    color: '#F2F2F2',
  },
  clipboard: {
    marginTop: 24,
    marginBottom: 24,
  },
  listEmptyTextView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  listEmptyTextTitle: {
    color: '#808080',
    fontWeight: 'bold',
    fontSize: 14,
  },
  listEmptyText: {
    color: '#808080',
    fontSize: 14,
  }
});