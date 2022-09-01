import React from "react";
import tw, { styled } from "twin.macro";

const Group = styled.div(({ hasHeight }: { hasHeight?: boolean }) => [
  hasHeight && tw`h-8`,
]);
const BottomLineBorder = tw.div`mt-1 group-hover:border-b group-hover:border-blue-50`;

export const Link = ({
  text,
  hasHeight,
}: {
  text: string;
  hasHeight?: boolean;
}) => (
  <Group {...{ hasHeight }} className="group">
    <a href="#">{text}</a>
    <BottomLineBorder />
  </Group>
);
