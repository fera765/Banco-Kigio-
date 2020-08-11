import React, { useEffect, useState, createRef } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Content,
  Input,
  BoxText,
  ValueText,
  ViewBox,
} from './styles';

const CODE_LENGTH = new Array(6).fill(0);

const Security: React.FC = () => {
  const navigation = useNavigation();
  const [value, setValue] = useState('');
  const [focused, setFocused] = useState(false);

  const input = createRef<any>();
  useEffect(() => {
    if (value.length === 6) {
      navigation.goBack();
    }
  }, [value, navigation]);
  function handleClick() {
    input.current.focus();
  }
  function handleFocus() {
    setFocused(true);
  }
  function handleBlur() {
    setFocused(false);
  }
  function handleKeyPress(e) {
    if (e.nativeEvent.key === 'Backspace') {
      setValue(state => state.slice(0, state.length - 1));
    }
  }
  function handleChange(v) {
    setValue(state => {
      if (state.length >= CODE_LENGTH.length) return '';
      return (state + v).slice(0, CODE_LENGTH.length);
    });
  }

  const values = value.split('');

  const selectedIndex =
    values.length < CODE_LENGTH.length ? values.length : CODE_LENGTH.length - 1;

  const hideInput = !(values.length < CODE_LENGTH.length);

  return (
    <Container>
      <TouchableWithoutFeedback onPress={handleClick}>
        <Content>
          <Input
            value=""
            ref={input}
            onKeyPress={handleKeyPress}
            onChangeText={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            style={{
              left: selectedIndex * 52,
              opacity: hideInput ? 0 : 1,
            }}
          />
          {CODE_LENGTH.map((v, index) => {
            const selected = values.length === index;
            const filled =
              values.length === CODE_LENGTH.length &&
              index === CODE_LENGTH.length - 1;

            return (
              <BoxText border={selected} key={index.toString()}>
                <ValueText>{values[index] && '*'}</ValueText>
                {(selected || filled) && focused && <ViewBox />}
              </BoxText>
            );
          })}
        </Content>
      </TouchableWithoutFeedback>
    </Container>
  );
};

export default Security;
