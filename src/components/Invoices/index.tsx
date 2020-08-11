import React, { useState } from 'react';
import { View, Text, Animated } from 'react-native';

import {
  Container,
  TimeLineBorder,
  TransactionItem,
  DateTransaction,
  BoxItem,
  BoxItemDescription,
  State,
  Category,
  Value,
} from './styles';

const Invoices: React.FC = () => {
  const products = [
    {
      id: 29,
      date: '22-07-2020',
      state: false,
      amount: 1987.99,
    },
    {
      id: 306,
      date: '02-05-2020',
      state: true,
      amount: 987.99,
    },
    {
      id: 3802,
      date: '02-05-2020',
      state: true,
      amount: 987.99,
    },
    {
      id: 3602,
      date: '02-05-2020',
      state: true,
      amount: 987.99,
    },
    {
      id: 3052,
      date: '02-05-2020',
      state: true,
      amount: 987.99,
    },
    {
      id: 3032,
      date: '02-05-2020',
      state: true,
      amount: 987.99,
    },
    {
      id: 3022,
      date: '02-05-2020',
      state: true,
      amount: 987.99,
    },
  ];

  return (
    <Container
      nestedScrollEnabled
      scrollEventThrottle={16}
      showsVerticalScrollIndicator={false}
    >
      {products.map((item, index) => {
        return (
          <Animated.View key={item.id}>
            <TransactionItem>
              <TimeLineBorder radius />
              <TimeLineBorder />
              <DateTransaction>20:20</DateTransaction>
              <BoxItem>
                <BoxItemDescription>
                  <State state={item.state}>
                    {item.state ? 'PAGO' : 'VENCIMENTO DIA 22'}
                  </State>
                  <Category>{item.date}</Category>
                </BoxItemDescription>
                <Value>
                  R$:
                  <Value value>{item.amount}</Value>
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

export default Invoices;
