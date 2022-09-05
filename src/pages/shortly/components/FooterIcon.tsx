import React from "react";
import tw from "twin.macro";
import styled from "@emotion/styled";

interface IFooterIcon {
  icon: string;
  altText: string;
}

const Icon = styled.img`
  &:hover {
    filter: invert(79%) sepia(61%) saturate(464%) hue-rotate(130deg)
      brightness(89%) contrast(85%);
  }
`;

export default function FooterIcon({ icon, altText }: IFooterIcon) {
  return (
    <a href="#">
      <Icon src={icon} alt={altText} />
    </a>
  );
}
