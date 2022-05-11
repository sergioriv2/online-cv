import styled from "styled-components";
import AvatarImg from "../assets/images/sergio-riv.jpg";
import { AsideContext } from "../context/asideContext";
import { useContext } from "react";

const Image = styled.img`
  border-radius: 50%;
  max-width: ${(props) => {
    switch (props.imageWidth) {
      case "small":
        return "100px";
      case "medium":
        return "200px";
      case "large":
        return "300px";
      default:
        return "100px";
    }
  }};
`;

const AsideImage = styled(Image)`
  transition: opacity 0.1s;
  border: 5px solid var(--text);
  opacity: 0;
  max-width: ${(props) => {
    switch (props.imageWidth) {
      case "small":
        return props.showAside ? "100px;" : "70px;";
      case "medium":
        return "200px";
      case "large":
        return "300px";
      default:
        return "100px";
    }
  }};
  @media screen and (min-width: 768px) {
    opacity: 1;
  }
`;

export const Avatar = (props) => {
  const { imageWidth } = props;
  return <Image src={AvatarImg} imageWidth={imageWidth}></Image>;
};

export const AsideAvatar = (props) => {
  const { imageWidth } = props;
  const { showAside } = useContext(AsideContext);

  return (
    <AsideImage
      src={AvatarImg}
      showAside={showAside}
      imageWidth={imageWidth}
    ></AsideImage>
  );
};
