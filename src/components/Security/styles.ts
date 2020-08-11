import styled from 'rn-css';
import { Animated } from 'react-native';

interface InputProps {
  border?: boolean;
}
export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;
export const Content = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Input = styled.TextInput`
  position: absolute;
  font-size: 32px;
  text-align: center;

  width: 52px;
  top: 0;
  bottom: 0;
  z-index: 100;
`;
export const BoxText = styled.View<InputProps>`
  width: 52px;
  height: 58px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  overflow: visible;
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.2);
`;
export const ValueText = styled.Text`
  font-size: 32px;
`;
export const ViewBox = styled.View`
  position: absolute;
  border-radius: 10px;
  left: -4px;
  top: -4px;
  bottom: -4px;
  right: -4px;
  border-color: rgba(58, 151, 212, 0.28);
  border-width: 4px;
`;
