import tw from "twin.macro";

const ItemContainer = tw.div`flex flex-col p-10 space-y-6 rounded-lg bg-gray-100 dark:bg-darkBlue3 md:w-1/3`;

interface ITestimonialItem {
  image: string;
  imageAlt: string;
  summary: string;
  fullName: string;
  jobPosition: string;
}

export default function TestimonialItem({
  image,
  imageAlt,
  summary,
  fullName,
  jobPosition,
}: ITestimonialItem) {
  return (
    <ItemContainer>
      <p className="text-sm leading-5 md:text-lg">{summary}</p>
      <div className="flex space-x-4">
        <img src={image} alt={imageAlt} className="w-10 h-10 rounded-full" />
        <div>
          <h5 className="text-sm font-semibold">{fullName}</h5>
          <p className="text-sm font-extralight">{jobPosition}</p>
        </div>
      </div>
    </ItemContainer>
  );
}
