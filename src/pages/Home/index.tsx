import React, { useState } from 'react';
import { ScrollView, TouchableOpacity, Animated, Easing } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Feather';
import {
  Container,
  Content,
  BoxOptions,
  OptionItem,
  OptionItemIcon,
  OptionItemText,
  Separator,
  BoxSaldo,
  BoxSaldoType,
  BoxSaldoItem,
  BoxItemValue,
  BoxSaldoItemValue,
  BoxProducts,
  BoxProductsTitle,
  BoxProductsItem,
  BoxProductsItemImage,
} from './styles';

import Card from '../../components/Card';

import IconPay from '../../assets/PaymentIcon.png';
import IconTrasfer from '../../assets/TrasnferIcon.png';
import IconDeposit from '../../assets/DepositIcon.png';
import IconMoneyIcon from '../../assets/MoneyIcon.png';

import Netflix from '../../assets/netflix.png';
import Spotify from '../../assets/spotify.png';
import Prime from '../../assets/rpime.png';
import Recarga from '../../assets/rcarga.jpg';

const Home: React.FC = () => {
  const navigation = useNavigation();
  const [transitionsMoney] = useState(new Animated.Value(1));
  const [hideMoney, sethideMoney] = useState(false);

  function handleHideMoney() {
    sethideMoney(!hideMoney);
    Animated.sequence([
      Animated.timing(transitionsMoney, {
        toValue: !hideMoney ? 0.7 : 1,
        duration: 1000,
        easing: Easing.cubic,
        useNativeDriver: false,
      }),
    ]).start();
  }
  return (
    <Container showsVerticalScrollIndicator={false}>
      <Content>
        <BoxOptions>
          <OptionItem onPress={() => navigation.navigate('Payment')}>
            <OptionItemIcon source={IconPay} />
            <OptionItemText>Pagar</OptionItemText>
          </OptionItem>
          <Separator />
          <OptionItem>
            <OptionItemIcon source={IconTrasfer} />
            <OptionItemText>Transferir</OptionItemText>
          </OptionItem>
          <Separator />
          <OptionItem>
            <OptionItemIcon source={IconDeposit} />
            <OptionItemText>Receber</OptionItemText>
          </OptionItem>
          <Separator />
          <OptionItem>
            <OptionItemIcon source={IconMoneyIcon} />
            <OptionItemText>Sacar</OptionItemText>
          </OptionItem>
        </BoxOptions>
        <BoxSaldo>
          <BoxSaldoType>SALDO CONTA CORRENTE</BoxSaldoType>
          <BoxSaldoItem>
            <BoxItemValue
              hideMoney={hideMoney}
              style={{
                transform: [{ scale: transitionsMoney }],
              }}
            >
              <BoxSaldoItemValue
                hideMoney={hideMoney}
                onPress={handleHideMoney}
              >
                R$ 2.543.00
              </BoxSaldoItemValue>
            </BoxItemValue>
            <TouchableOpacity style={{ padding: 10 }} onPress={handleHideMoney}>
              <Icon
                name={!hideMoney ? 'eye' : 'eye-off'}
                size={20}
                color={!hideMoney ? '#fff' : '#ccc'}
              />
            </TouchableOpacity>
          </BoxSaldoItem>
        </BoxSaldo>
        <BoxProducts>
          <BoxProductsTitle>Produtos em destaque</BoxProductsTitle>
          <BoxProductsItem>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <BoxProductsItemImage source={Netflix} />
              <BoxProductsItemImage source={Spotify} />
              <BoxProductsItemImage source={Prime} />
              <BoxProductsItemImage source={Recarga} />
              <BoxProductsItemImage source={Prime} />
              <BoxProductsItemImage source={Netflix} />
            </ScrollView>
          </BoxProductsItem>
        </BoxProducts>
      </Content>

      <Card />
    </Container>
  );
};

export default Home;
