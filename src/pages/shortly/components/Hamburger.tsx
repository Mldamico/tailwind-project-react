/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { styled } from "twin.macro";

const HamburgerContainer = styled.button`
  cursor: pointer;
  width: 30px;
  height: 30px;
  transition: all 0.25s;
  position: relative;
`;
const HamburgerRow = styled.span`
  position: absolute;
  width: 30px;
  height: 2px;
  top: 0;
  left: 0;
  background: #9c9aa6;
  transform: rotate(0);
  transition: all 0.5s;
`;

interface IHamburger {
  isOpen: boolean;
  toggleSidebar: (x: boolean) => void;
}

export default function Hamburger({ isOpen, toggleSidebar }: IHamburger) {
  return (
    <div className="md:hidden">
      <HamburgerContainer
        className="z-40 block lg:hidden focus:outline-none"
        type="button"
        onClick={() => toggleSidebar(!isOpen)}
      >
        <HamburgerRow
          css={css`
            ${isOpen &&
            `transform: rotate(45deg) translateY(6px) translateX(6px);`}
          `}
        ></HamburgerRow>
        <HamburgerRow
          css={css`
            transform: translateY(7px);
            ${isOpen && `display: none;`}
          `}
        ></HamburgerRow>
        <HamburgerRow
          css={css`
            transform: translateY(14px);
            ${isOpen &&
            `transform: rotate(-45deg) translateY(6px) translateX(-6px);`}
          `}
        ></HamburgerRow>
      </HamburgerContainer>
    </div>
  );
}
