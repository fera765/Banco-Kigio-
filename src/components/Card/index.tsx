import React, { useState } from 'react';
import { Animated, Easing, Text, useWindowDimensions } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Container,
  ChangeBoxCard,
  ChangeBoxCardButton,
  ClientCard,
  BoxTitle,
  BoxTitleText,
  BoxTitleChip,
  BoxInfo,
  BoxNumberCard,
  BoxInfoDate,
  BoxInfoDateInit,
  BoxName,
  Tab,
} from './styles';

import Historic from '../Historic';
import Invoices from '../Invoices';

const Tabs = createMaterialTopTabNavigator();

const Card: React.FC = () => {
  const [showCard, setShowCard] = useState(false);

  const [transitions] = useState(new Animated.Value(1));
  const [transitionsHeight] = useState(new Animated.Value(1));
  const [active, setActive] = useState(false);

  function handleChangeCard() {
    transitionsHeight.setValue(-355);
    Animated.parallel([
      Animated.timing(transitions, {
        toValue: !active ? -355 : 0,
        duration: 700,
        easing: Easing.ease,
        useNativeDriver: false,
      }),
      Animated.timing(transitionsHeight, {
        toValue: !active ? -355 : 1,
        duration: 800,
        useNativeDriver: false,
      }),
    ]).start(() => setActive(!active));
  }

  const cardNumber = '8890 9780 6060 2350';

  const card = !showCard
    ? cardNumber.replace(/\d{4}(?= \d{4})/g, '****')
    : cardNumber;

  function handleNumberCard() {
    setShowCard(!showCard);
  }

  return (
    <Container
      active={active}
      style={{
        marginTop: transitions.interpolate({
          inputRange: [-225, 0, 220],
          outputRange: [-225, 0, 10],
        }),
        height: transitionsHeight.interpolate({
          inputRange: [0, 0, 300],
          outputRange: [900, 300, 0],
        }),
      }}
    >
      <ChangeBoxCard onPress={() => handleChangeCard()}>
        <ChangeBoxCardButton />
      </ChangeBoxCard>

      <ClientCard>
        <BoxTitle>
          <BoxTitleText>Kigio</BoxTitleText>
          <BoxTitleChip />
        </BoxTitle>
        <BoxInfo>
          <BoxNumberCard onPress={() => handleNumberCard()}>
            {card}
          </BoxNumberCard>
          <BoxInfoDate>
            <BoxInfoDateInit>02/20</BoxInfoDateInit>
            <BoxInfoDateInit expired>12/25</BoxInfoDateInit>
            <Icon name="cc-visa" size={35} color="#fff" />
          </BoxInfoDate>
          <BoxName>Mateus Conceição</BoxName>
        </BoxInfo>
      </ClientCard>

      <Tab>
        <Tabs.Navigator
          initialRouteName="HISTÓRICO"
          tabBarOptions={{
            activeTintColor: '#000',
            labelStyle: {
              fontSize: 16,
              fontWeight: 'bold',
            },
            tabStyle: {
              backgroundColor: '#fff',
            },
          }}
        >
          <Tabs.Screen name="HISTÓRICO" component={Historic} />
          <Tabs.Screen name="FATURAS" component={Invoices} />
        </Tabs.Navigator>
      </Tab>
    </Container>
  );
};

export default Card;
