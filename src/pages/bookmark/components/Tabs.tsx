import React from "react";
import { styled } from "twin.macro";
import tw from "twin.macro";
import Tab from "./Tab";
import { FeatureTab1, FeatureTab2, FeatureTab3 } from "../images";

const LinkTab = styled.div(({ isActive }: { isActive: boolean }) => [
  tw`py-5`,
  isActive && tw`border-b-4 border-softRed`,
]);

const BgBlue = styled.div([
  `
  @media (min-width: 976px){
    width: 2000px;
     height: 300px;
     right: 60%;
     
   }`,
]);

const TabContainer = tw.div`flex flex-col justify-center max-w-xl mx-auto mb-6 border-b md:space-x-10 md:flex-row`;
const TabLink = tw.div`flex justify-center text-center cursor-pointer text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3`;
enum TAB {
  SIMPLE_BOOKMARKING,
  SPEEDY_SEARCHING,
  SHARE_BOOKMARK,
}
export default function Tabs() {
  const [activeTab, setActiveTab] = React.useState(TAB.SIMPLE_BOOKMARKING);

  return (
    <section>
      <div className="container relative mx-auto my-32 mt-12 px-6">
        <BgBlue className="absolute rounded-r-full top-60 bg-softBlue" />
        <TabContainer>
          <TabLink>
            <LinkTab
              isActive={activeTab === TAB.SIMPLE_BOOKMARKING}
              onClick={() => setActiveTab(TAB.SIMPLE_BOOKMARKING)}
            >
              Simple Boormarking
            </LinkTab>
          </TabLink>
          <TabLink>
            <LinkTab
              isActive={activeTab === TAB.SPEEDY_SEARCHING}
              onClick={() => setActiveTab(TAB.SPEEDY_SEARCHING)}
            >
              Speedy Searching
            </LinkTab>
          </TabLink>
          <TabLink>
            <LinkTab
              isActive={activeTab === TAB.SHARE_BOOKMARK}
              onClick={() => setActiveTab(TAB.SHARE_BOOKMARK)}
            >
              Share Bookmark
            </LinkTab>
          </TabLink>
        </TabContainer>
        <div id="panels" className="container mx-auto">
          {activeTab === TAB.SIMPLE_BOOKMARKING ? (
            <Tab
              image={FeatureTab1}
              title="Bookmark in one click"
              text="Organize your bookmarks however you like. Our simple
                drag-and-drop interface gives you complete control over how you
                manage your favoirite sites."
            />
          ) : activeTab === TAB.SPEEDY_SEARCHING ? (
            <Tab
              image={FeatureTab2}
              title="Intelligent search"
              text="Our powerful search feature will help you find saved sites in no
                time at all. No need to trawl through all of your bookmarks."
            />
          ) : (
            <Tab
              image={FeatureTab3}
              title="Share your bookmarks"
              text="Easily share your bookmarks and collections with others. Create
                a shareable link that you can send at the click of a button."
            />
          )}
        </div>
      </div>
    </section>
  );
}
