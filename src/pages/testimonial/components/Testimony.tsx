/** @jsxImportSource @emotion/react */
import tw, { styled } from "twin.macro";
import { Quotes } from "../images/index";
import { ITestimony } from "../types/Itestimony";

const Container = styled.div(
  ({
    color,
    gridColumn,
    gridRow,
  }: {
    color: string;
    gridColumn: string;
    gridRow: string;
  }) => [
    tw`relative p-10 rounded-xl`,
    `background-color: ${color}`,
    `${color == "#fff" ? `color: #000` : `color: #fff`}`,

    [
      `@media (min-width: 768px){
      grid-column: ${gridColumn};
      grid-row: ${gridRow};
    }
      `,
    ],
  ]
);

const ClampText = styled.p(({ clamp }: { clamp: boolean }) => [
  tw`mt-6 opacity-50`,
  clamp && tw`line-clamp-6`,
]);

export default function Testimony({
  name,
  image,
  hasQuotes = false,
  backgroundColor = "#fff",
  gridColumn = "auto",
  title,
  summary,
  gridRow = "auto",
  clamp,
}: ITestimony) {
  return (
    <Container
      color={backgroundColor}
      gridColumn={gridColumn}
      gridRow={gridRow}
    >
      {hasQuotes && (
        <img
          src={Quotes}
          alt="Quotes"
          className="absolute top-3 right-10 scale-125 md:top-7 md:right-24 md:scale150"
        />
      )}
      <div className="flex z-10 space-x-4">
        <img
          className="w-10 h-10 rounded-full ring-2 ring-purple-300"
          src={image}
          alt={name}
        />
        <div className="text-sm">
          <h4 className="opacity-90">{name}</h4>
          <p className="opacity-50">Verified Graduate</p>
        </div>
      </div>
      <p className="relative z-10 mt-6 text-xl">{title}</p>
      <ClampText clamp={clamp}>{summary}</ClampText>
    </Container>
  );
}
