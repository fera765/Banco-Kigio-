import styled from 'rn-css';

interface IUserProps {
  user?: boolean;
  width?: number;
  radius?: string;
}

export const Container = styled.View`
  background-color: #1a1e4b;
  padding: 0 32px;
  height: 70px;
  border-bottom-width: 1px;
  border-bottom-color: #080a24;

  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;
export const BoxUser = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const Menu = styled.Image`
  height: 21px;
  width: 28px;
  resize-mode: contain;
`;

export const ImageView = styled.Image`
  height: 48px;
  width: 48px;
  border-radius: 100em;
  resize-mode: contain;
`;

export const TextUser = styled.Text<IUserProps>`
  font: normal 15px/15px 'Roboto';
  letter-spacing: 0.8px;
  margin-left: 8px;
  color: #fff;

  ${props =>
    props.width !== undefined &&
    props.width >= 430 &&
    `
      color: #f00;
    `}
`;
