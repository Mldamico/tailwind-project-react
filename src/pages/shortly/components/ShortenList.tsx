import tw from "twin.macro";

const Button = tw.button`p-2 px-8 text-white  rounded-lg hover:opacity-70 focus:outline-none`;

export const ShortenList = ({
  link,
  short,
  color,
}: {
  link: string;
  short: string;
  color: string;
}) => (
  <div className="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row">
    <p className="font-bold text-center text-veryDarkViolet md:text-left">
      {link}
    </p>
    <div className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
      <p className="font-bold text-cyan">{short}</p>
      <Button className={color}>Copy</Button>
    </div>
  </div>
);