import styled from 'rn-css';
import { Animated } from 'react-native';

interface CardProps {
  expired?: boolean;
  active?: boolean;
}

export const Container = styled(Animated.View) <BoxCardProps>`
  flex: 1;
  background: #fff;
  padding: 16px;
  height: 300px;

  border-radius: 40px 40px 0px 0px;
  z-index: 1;
  ${props =>
    props.active &&
    `

  `}
`;
export const ChangeBoxCard = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  margin-top: -20px;
  height: 30px;
  padding: 30px;
  border-radius: 12px;
  z-index: 100;
`;
export const ChangeBoxCardButton = styled.View`
  background: #999;
  width: 80px;
  height: 13px;

  border-radius: 12px;
`;
export const ClientCard = styled.View`
  background: #1d2259;
  width: 100%;
  max-width: 400px;
  margin-top: 10px;
  height: 215px;
  padding: 10px;

  border-radius: 12px;
`;

export const BoxTitle = styled.View`
  margin-top: 20px;
  height: 30px;

  align-items: center;
  justify-content: center;
`;
export const BoxTitleText = styled.Text`
  color: #fff;
  font: normal 2.5em/2.5em 'Roboto';
`;
export const BoxTitleChip = styled.View`
  background: #c0c0c0;
  height: 30px;
  width: 50px;

  border-radius: 8px;
  position: absolute;

  bottom: -30px;
  left: 30px;
`;

export const BoxInfo = styled.View`
  width: 100%;
  padding: 30px;
  margin-top: 20px;
`;
export const BoxNumberCard = styled.Text`
  color: #f2f2f2;
  font: normal 20px/20px 'Roboto';
`;
export const BoxInfoDate = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;
export const BoxInfoDateInit = styled.Text<CardProps>`
  color: #f2f2f2;

  ${props =>
    props.expired &&
    `
    margin-right: 120px;
  `}
`;
export const BoxName = styled.Text`
  margin-top: 15px;
  color: #f2f2f2;
  font: normal 20px/20px 'Roboto';
`;

export const Tab = styled.View`
  background: #fff;
  margin-top: 16px;
  height: 600px;
`;
