import tw from "twin.macro";
import { IllustrationStayProductive, ArrowIcon } from "../images";
const ProductiveContainer = tw.div`container flex flex-col items-center mx-auto px-6 pt-24 pb-32 md:flex-row md:space-x-16`;
const Heading4 = tw.h4`max-w-md text-xl font-bold md:text-4xl`;
const Text = tw.p`text-base md:text-lg`;

export default function Productive() {
  return (
    <section className="bg-white dark:bg-darkBlue ">
      <ProductiveContainer>
        <div className="md:w-1/2">
          <img
            src={IllustrationStayProductive}
            alt="Stay Productive"
            className="mb-10"
          />
        </div>
        <div className="flex flex-col items-start md:w-1/2">
          <div className="flex flex-col space-y-5">
            <Heading4>Stay Productive, wherever you are</Heading4>
            <Text>
              Never let location be an issue when accessing your files. Fylo has
              you covered for all your file storage needs.
            </Text>
            <Text>
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </Text>
          </div>
          <div className="block mt-4">
            <a href="#" className="border-b border-accentCyan text-accentCyan">
              See how Fylo works
            </a>
            <img src={ArrowIcon} alt="Arrow icon" className="inline pb-2" />
          </div>
        </div>
      </ProductiveContainer>
    </section>
  );
}
