import styled from 'rn-css';
import { Animated } from 'react-native';

interface BorderProps {
  radius?: boolean;
}
interface ValueProps {
  value?: boolean;
}
interface NewDateProps {
  newDate?: boolean;
}

export const Container = styled.ScrollView`
  flex: 1;
  background: #fff;
  margin-top: 16px;
`;
export const Timeline = styled.FlatList`
  flex: 1;
  flex-direction: column;
`;
export const TimeLineBorder = styled.View<BorderProps>`
  margin: 10px 0 0 -10px;
  position: absolute;
  background: #1d2259;
  width: 4px;
  height: 150%;

  ${props =>
    props.radius &&
    `
    top: -7px;
    left: -5px;
    width: 15px;
    height: 15px;
    border-radius: 50vh;
  `}
`;
export const TransactionItem = styled.View`
  margin: 10px 0 0 70px;
  padding: 0 10px;
  width: auto;
  height: 70px;
  max-height: 70px;
`;
export const NewDate = styled.View<NewDateProps>`
  display: none;
  margin-top: -5px;
  align-items: center;
  flex-direction: row;
  ${props =>
    props.newDate &&
    `
   display: flex;
   width: auto;
   margin-left: 75px;
   max-width: 110px;
   padding: 4px;
   border-radius: 8px;
   background: #30346b

  `}
`;
export const NewDateText = styled.Text`
  font: normal 14px/15px 'Roboto';
  color: #fff;
  margin-left: 8px;
`;
export const NewDateArrow = styled.View`
  display: flex;
  left: -11px;
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-right: 10px solid #30346b;
`;

export const DateTransaction = styled.Text`
  position: absolute;
  background: #eee;
  text-align: center;
  font: normal 15px/20px 'Roboto';
  border-radius: 8px;
  padding: 5px;
  left: -70px;

  width: auto;
  height: 30px;
`;

export const BoxItem = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const BoxItemDescription = styled.View`
  flex-direction: column;
`;
export const Title = styled.Text`
  color: #6e6969;
  font: bold 15px/22px 'Roboto';
`;
export const Category = styled.Text`
  color: #aaa;
`;
export const Value = styled.Text<ValueProps>`
  color: #aaa;
  font: normal 12px/22px 'Roboto';

  ${props =>
    props.value &&
    `
    color: #6e6969;
    font: bold 17px/22px 'Roboto';
  `}
`;
