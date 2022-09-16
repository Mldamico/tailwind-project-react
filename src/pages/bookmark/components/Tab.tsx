import tw from "twin.macro";

const Link = tw.a`px-6 py-3 mt-4 font-semibold text-white border-2 border-white rounded-lg md:inline-flex bg-softBlue hover:bg-white hover:text-softBlue hover:border-softBlue hover:border-2`;
const TabContainer = tw.div`flex flex-col py-5 md:flex-row md:space-x-7`;
const TabHeading = tw.h3`mt-32 text-3xl font-semibold text-center md:mt-0 md:text-left`;
interface ITab {
  image: string;
  title: string;
  text: string;
  link?: string;
}

export default function Tab({ image, title, text, link = "" }: ITab) {
  return (
    <TabContainer>
      <div className="flex justify-center md:w-1/2">
        <img src={image} alt={title} className="relative z-10" />
      </div>
      <div className="flex flex-col space-y-8 md:w-1/2">
        <TabHeading>{title}</TabHeading>
        <p className="max-w-md text-center text-grayishBlue md:text-left">
          {text}
        </p>
        <div className="mx-auto md:mx-0">
          <Link href={link}>More Info</Link>
        </div>
      </div>
    </TabContainer>
  );
}
