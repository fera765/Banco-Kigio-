import styled from 'rn-css';
import { Animated } from 'react-native';
import { RNCamera } from 'react-native-camera';

interface TittleProps {
  title?: boolean;
  venciment?: boolean;
  money?: boolean;
}

export const Container = styled.View`
  flex: 1;
  background-color: #1a1e4b;
  padding: 16px;
`;
export const Content = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 10px;
  border-radius: 10px;
`;
export const BoxCamera = styled(RNCamera)`
  position: absolute;
  z-index: 100;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
`;

export const Cancelar = styled.TouchableOpacity`
  position: absolute;
  bottom: 30px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const BoxInput = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  border-radius: 12px;
  background: #f3f3f3;
  margin-top: 20px;
`;
export const Input = styled.TextInput`
  width: 84%;
  margin-left: 5px;
  color: #898989;
`;
export const InitCam = styled.TouchableOpacity`
  padding: 10px;
`;

export const Details = styled(Animated.View)`
  margin-top: 32px;
`;
export const Bank = styled.Text`
  font: bold 16px/16px 'Roboto';
  padding: 16px 10px;
  background: #f3f3f3;
  color: #706666;
  border-radius: 8px;
`;
export const BoxData = styled.View`
  margin-top: 32px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;
export const BoxItemData = styled.View`
  justify-content: space-between;
  flex-direction: column;
  background: #f3f3f3;
  width: 49%;
  padding: 10px;
  height: 60px;
  border-radius: 10px;
`;
export const BoxItemDataText = styled.Text<TittleProps>`
  font: bold 16px/16px 'Roboto';
  padding: 10px 0;
  color: #706666;
  ${props =>
    props.title &&
    `
    padding: 0;
    font-weight: normal;
`}
`;
export const Amount = styled.Text<TittleProps>`
  font: normal 16px/26px 'Roboto';
  padding: 16px 10px;
  margin-top: 16px;
  text-align: center;
  background: #f3f3f3;
  border-radius: 8px;
  color: #706666;
  ${props =>
    props.money &&
    `
    color: #000;
    padding: 0;
    font-size: 22px;
    font-weight: bold;
`}
`;
export const Button = styled.Text`
  font: bold 16px/26px 'Roboto';
  padding: 16px 10px;
  margin-top: 32px;
  text-align: center;
  background: #1a1e4b;
  border-radius: 8px;
  color: #fff;
`;
