import EpisodesSection from "./EpisodesSection";
import ImageSection from "./ImageSection";

const MainContainer: React.FC = () => {
  return (
    <main className='w-full relative flex flex-col justify-center items-center mt-[2.563rem] pb-[7.188rem] lg:flex-row lg:items-start lg:justify-evenly lg:mt-[6.875rem] lg:pb-[13.75rem]'>
      <ImageSection />
      <EpisodesSection />
    </main>
  );
};

export default MainContainer;
