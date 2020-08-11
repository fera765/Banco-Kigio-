import React, { createRef } from 'react';
import { TouchableOpacity } from 'react-native';
import Screen from 'lord-react-units';
import { NavigationContainerRef } from '@react-navigation/native';
import { Container, Menu, BoxUser, ImageView, TextUser } from './styles';

import iconMenu from '../../assets/Group.png';

export const navigationRef = createRef<NavigationContainerRef>();

const Header: React.FC = () => {
  const { width, vw } = Screen();
  return (
    <Container>
      <BoxUser
        activeOpacity={0.4}
        onPress={() => navigationRef.current?.navigate('Home')}
      >
        <ImageView
          source={{
            uri:
              'https://avatars2.githubusercontent.com/u/35400150?s=460&u=1e524bce20bdf0c7aabb032d06e41709009b69f5&v=4',
          }}
        />
        <TextUser width={width}>Mateus</TextUser>
      </BoxUser>
      <TouchableOpacity activeOpacity={0.4}>
        <Menu source={iconMenu} />
      </TouchableOpacity>
    </Container>
  );
};
export default Header;
