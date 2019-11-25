import Theme from 'themes/index';

export default {
  container: {
    backgroundColor: Theme.primary,
  },
  wrapper: {
    backgroundColor: Theme.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  label: {
    fontSize: Theme.fontSizeSmall,
    paddingTop: 5,
  },
};
