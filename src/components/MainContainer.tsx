import EpisodesSection from "./EpisodesSection";
import ImageSection from "./ImageSection";

const MainContainer: React.FC = () => {
  return (
    <main className='w-full relative flex flex-col justify-center items-center mt-[2.563rem]'>
      <ImageSection />
      <EpisodesSection />
    </main>
  );
};

export default MainContainer;
