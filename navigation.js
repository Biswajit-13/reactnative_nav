import {Navigation} from 'react-native-navigation';

export const main = () => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        options: {
          bottomTabs: {
            backgroundColor: '#ffd300',
          },
        },
        children: [
          {
            stack: {
              options: {
                bottomTab: {
                  text: 'Login',
                  fontSize: 20,
                  textColor: '#fff',
                },
              },
              children: [
                {
                  component: {
                    name: 'Login',
                  },
                },
              ],
            },
          },
          {
            stack: {
              options: {
                bottomTab: {
                  text: 'Home',
                  fontSize: 20,
                  textColor: '#fff',
                },
              },
              children: [
                {
                  component: {
                    name: 'Home',
                  },
                },
              ],
            },
          },
       
        ],
      },
    },
  });
};
