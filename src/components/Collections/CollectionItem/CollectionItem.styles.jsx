import styled from 'styled-components';
import Button from '../../UI/Button/Button';

export const AddButton = styled(Button)`
  width: 80%;
  opacity: .7;
  position: absolute;
  top: 255px;
  display: none;
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: url(${({ imageUrl }) => imageUrl});
`;

export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 350px;
  position: relative;

  &:hover {
    ${BackgroundImage} {
      opacity: .8;
    }

    ${AddButton} {
      opacity: .85;
      display: flex;
    }
  }
`;

export const CollectionFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const Price = styled.span`
  width: 10%;
`;