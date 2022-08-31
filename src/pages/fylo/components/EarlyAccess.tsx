import tw from "twin.macro";
import { Button } from "./Hero";

const EarlyContainer = tw.div`relative -top-40 max-w-4xl mx-auto p-10 px-6 space-y-6 text-center rounded-lg bg-gray-200 dark:bg-darkBlue1 md:px-16`;
const Heading5 = tw.h5`text-2xl font-bold`;
export default function EarlyAccess() {
  return (
    <section className="relative px-6 dark:bg-darkBlue2 md:px-0">
      <EarlyContainer>
        <Heading5>Get early access today</Heading5>
        <p className="text-sm">
          It only takes a minute to sign up and our free started tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        <div className="flex flex-col items-start space-y-6 md:flex-row md:space-y-0 space-x-6">
          <div className="w-full flex-1">
            <input
              type="text"
              className="w-full px-10 py-3 rounded-full focus:outline-none dark:text-black"
              placeholder="email@example.com"
            />
          </div>
          <Button>Get Started For Free</Button>
        </div>
      </EarlyContainer>
    </section>
  );
}
