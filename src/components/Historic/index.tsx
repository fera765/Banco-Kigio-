import React, { useState } from 'react';
import { View, Text, Animated } from 'react-native';

import {
  Container,
  Timeline,
  TimeLineBorder,
  TransactionItem,
  DateTransaction,
  BoxItem,
  BoxItemDescription,
  Title,
  Category,
  Value,
  NewDate,
  NewDateArrow,
  NewDateText,
} from './styles';

const Historic: React.FC = () => {
  const products = [
    {
      id: 29,
      ClientCard: 'Lojas Americanas',
      category: 'Produtos',
      date: '02-05-2020',
      price: 987.99,
    },
    {
      id: 19,
      ClientCard: 'McDonald´s - Brasil',
      category: 'Alimentação',
      date: '05-05-2020',
      price: 49.99,
    },
    {
      id: 292,
      ClientCard: 'Super Mercados Veran',
      category: 'Mercado',
      date: '05-05-2020',
      price: 479.19,
    },
    {
      id: 293,
      ClientCard: 'NetFlix',
      category: 'Produtos',
      date: '05-05-2020',
      price: 21,
    },
    {
      id: 294,
      ClientCard: 'Trufa de Balde',
      category: 'Alimentação',
      date: '06-05-2020',
      price: 57.9,
    },
    {
      id: 295,
      ClientCard: 'Padaria São José',
      category: 'Alimentação',
      date: '06-05-2020',
      price: 6.59,
    },
    {
      id: 239,
      ClientCard: 'Lojas Americanas',
      category: 'Produtos',
      date: '02-05-2020',
      price: 987.99,
    },
    {
      id: 519,
      ClientCard: 'McDonald´s - Brasil',
      category: 'Alimentação',
      date: '05-05-2020',
      price: 49.99,
    },
    {
      id: 7292,
      ClientCard: 'Super Mercados Veran',
      category: 'Mercado',
      date: '05-05-2020',
      price: 479.19,
    },
    {
      id: 2893,
      ClientCard: 'NetFlix',
      category: 'Produtos',
      date: '05-05-2020',
      price: 21,
    },
    {
      id: 2994,
      ClientCard: 'Trufa de Balde',
      category: 'Alimentação',
      date: '06-05-2020',
      price: 57.9,
    },
    {
      id: 2905,
      ClientCard: 'Padaria São José',
      category: 'Alimentação',
      date: '06-05-2020',
      price: 6.59,
    },
  ];

  return (
    <Container
      nestedScrollEnabled
      scrollEventThrottle={16}
      showsVerticalScrollIndicator={false}
    >
      {products.map((item, index) => {
        const newDate =
          index > 0 && products[index].date !== products[index - 1].date;
        return (
          <Animated.View key={item.id}>
            <NewDate newDate={newDate}>
              <NewDateArrow />
              <NewDateText>{item.date.split('-')[0]} Agosto</NewDateText>
            </NewDate>
            <TransactionItem>
              <TimeLineBorder radius />
              <TimeLineBorder />
              <DateTransaction>20:20</DateTransaction>
              <BoxItem>
                <BoxItemDescription>
                  <Title>{item.ClientCard}</Title>
                  <Category>{item.category}</Category>
                </BoxItemDescription>
                <Value>
                  R$:
                  <Value value>{item.price}</Value>
                </Value>
              </BoxItem>
            </TransactionItem>
          </Animated.View>
        );
      })}
      <View
        style={{
          height: 30,
          alignItems: 'center',
          justifyContent: 'center',
          padding: 10,
        }}
      >
        <Text
          style={{
            color: '#000',
            marginBottom: 20,
            padding: 10,
            backgroundColor: '#ccc',
            borderRadius: 10,
            fontWeight: '600',
          }}
        >
          Ver Tudo
        </Text>
      </View>
    </Container>
  );
};

export default Historic;
