import styled from 'rn-css';
import { Animated } from 'react-native';
import cssta from '../../styled';

interface SeparatorIconProps {
  separator?: boolean;
}

interface BoxCardProps {
  active?: boolean;
}
interface hideMoneyProps {
  hideMoney?: boolean;
}

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #1a1e4b;
`;
export const Content = styled.View`
  padding: 32px 32px;
`;
export const BoxOptions = styled.View`
  background: #1d2259;
  height: 81px;
  border-radius: 8px;

  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
export const OptionItem = styled.TouchableOpacity<SeparatorIconProps>`
  width: 21vw;
  height: 53px;

  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
export const Separator = styled.View<SeparatorIconProps>`
  width: 1px;
  height: 49px;
  background: #080a24;
`;
export const OptionItemIcon = styled.Image`
  height: 30px;
  width: 30px;
  resize-mode: cover;
`;

export const OptionItemText = styled.Text`
  text-align: center;
  margin-top: 15px;
  color: #fff;
  font: bold 10px/15px 'Roboto';
`;

export const BoxSaldo = styled.View`
  height: 58px;
  margin-top: 32px;
  flex-direction: column;
`;
export const BoxSaldoType = styled.Text`
  font-family: Roboto;
  font: bold 12px/14px 'Roboto';
  color: #b9b4b4;
`;
export const BoxSaldoItem = styled.View`
  height: 31px;
  margin-top: 17px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;
export const BoxSaldoItemValue = styled.Text<hideMoneyProps>`
  font: bold 22px/26px 'Roboto';
  color: #ffffff;

  ${props =>
    props.hideMoney &&
    `
    background: #ccc;
    border-radius: 8px;
    color: #ccc;

  `}
`;
export const BoxItemValue = styled(Animated.View) <hideMoneyProps>``;

export const BoxProducts = styled.View`
  background: #1d2259;
  height: 123px;
  border-radius: 8px;
  padding: 14px;
  margin-top: 60px;
  flex-direction: column;
`;

export const BoxProductsTitle = styled.Text`
  font-family: Roboto;
  font: bold 12px/14px 'Roboto';
  color: #b9b4b4;
`;
export const BoxProductsItem = styled.View`
  margin-top: 16px;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
`;

export const BoxProductsItemImage = styled.Image`
  width: 76px;
  height: 68px;
  resize-mode: cover;
  border-radius: 7px;
  margin: 0 5px;
`;
