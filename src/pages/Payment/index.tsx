import React, { useState, useRef, useEffect, createRef } from 'react';
import { Animated } from 'react-native';
import { RNCamera, BarCodeReadEvent } from 'react-native-camera';
import { useNavigation } from '@react-navigation/native';
import BarcodeMask from 'react-native-barcode-mask';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container,
  Content,
  BoxCamera,
  Cancelar,
  BoxInput,
  Input,
  InitCam,
  Details,
  Bank,
  BoxData,
  BoxItemData,
  BoxItemDataText,
  Amount,
  Button,
} from './styles';

const Payment: React.FC = () => {
  const navigation = useNavigation();
  const inputElementRef = useRef<any>(null);
  const camera = createRef<any>();

  const [animation] = useState(new Animated.Value(0));

  const [open, setOpen] = useState(false);
  const [barCode, setBarCode] = useState('');

  useEffect(() => {
    const code = barCode;
    if (code.length === 42) {
      setBarCode(code);
      Animated.timing(animation, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: false,
      }).start();
    }
  }, [barCode, animation]);

  function handleTeste(e: BarCodeReadEvent) {
    setBarCode(e.data);
    setOpen(false);
  }
  function handleCamera() {
    inputElementRef.current.clear();
    animation.setValue(0);
    setOpen(!open);
  }

  return (
    <Container>
      {open && (
        <BoxCamera
          ref={camera}
          type={RNCamera.Constants.Type.back}
          autoFocus={RNCamera.Constants.AutoFocus.on}
          flashMode={RNCamera.Constants.FlashMode.off}
          onBarCodeRead={e => handleTeste(e)}
        >
          <BarcodeMask height={400} width={100} edgeBorderWidth={2} />
          <Cancelar onPress={handleCamera}>
            <Icon name="close-circle" size={70} color="#fff" />
          </Cancelar>
        </BoxCamera>
      )}
      <Content>
        <BoxInput>
          <Input
            ref={inputElementRef}
            onChangeText={text => {
              setBarCode(text);
              animation.setValue(0);
            }}
            placeholder="Digitar codigo de barras"
            value={barCode}
          />
          <InitCam onPress={() => handleCamera()}>
            <Icon name="barcode-scan" size={30} color="#000" />
          </InitCam>
        </BoxInput>

        <Details
          style={{ opacity: animation, transform: [{ scale: animation }] }}
        >
          <Bank>Banco do Brasil</Bank>
          <BoxData>
            <BoxItemData>
              <BoxItemDataText title>Pagando</BoxItemDataText>
              <BoxItemDataText>08/08/2020</BoxItemDataText>
            </BoxItemData>
            <BoxItemData>
              <BoxItemDataText title>Vencimento</BoxItemDataText>
              <BoxItemDataText venciment>15/08/2020</BoxItemDataText>
            </BoxItemData>
          </BoxData>

          <Amount>
            R$: <Amount money>1200,88</Amount>
          </Amount>
          <Button onPress={() => navigation.navigate('Security')}>
            Confirmar pagamento
          </Button>
        </Details>
      </Content>
    </Container>
  );
};

export default Payment;
