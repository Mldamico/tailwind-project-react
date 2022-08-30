import tw from "twin.macro";
const Item = tw.div`flex flex-col items-center space-y-2 md:w-1/2`;

interface IFeatureItem {
  image: string;
  altText: string;
  title: string;
  text: string;
}

export default function FeatureItem({
  image,
  altText,
  title,
  text,
}: IFeatureItem) {
  return (
    <Item>
      <div className="flex items-center justify-center h-24 mb-6">
        <img src={image} alt={altText} />
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="max-w-md">{text}</p>
    </Item>
  );
}
