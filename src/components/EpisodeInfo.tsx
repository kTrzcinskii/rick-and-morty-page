import { useViewport } from "../hooks/useViewport";
import { DESKTOP_WIDTH } from "../utils/constants";

const Seperator: React.FC = () => {
  return (
    <hr className='w-full b-0 bt-[0.063rem] border-t-gray-light lg:w-[0.063rem] lg:h-full lg:bg-gray-light ' />
  );
};

type Episode = {
  episode: string;
  name: string;
  airDate: string;
};

interface EpisodeInfoProps extends Episode {
  index: number;
  showSeperator?: boolean;
}

const EpisodeInfo: React.FC<EpisodeInfoProps> = ({
  episode,
  name,
  airDate,
  index,
  showSeperator = true,
}) => {
  const { width } = useViewport();
  return (
    <li className='w-full relative flex flex-col space-y-[1.125rem] lg:flex-row '>
      <article className='w-full font-bold space-y-[0.563rem] flex flex-col lg:flex-row lg:space-y-0 lg:min-h-[6.625rem]'>
        <p className='text-[1.125rem] lg:text-[1.563rem] lg:mr-[2.125rem] lg:mt-[1rem]'>
          {episode}
        </p>
        {showSeperator && width >= DESKTOP_WIDTH && <Seperator />}
        <div className='space-y-[0.563rem] lg:ml-[1.813rem]'>
          <h3
            className={`text-[1.125rem] ${
              index % 2 === 0 ? "text-blue" : "text-green-dark"
            } lg:text-[1.563rem] lg:mt-[1rem]`}
          >
            {name}
          </h3>
          <p className='text-[0.938rem] text-gray lg:text-[1.25rem]'>
            {airDate}
          </p>
        </div>
      </article>
      {showSeperator && width < DESKTOP_WIDTH && <Seperator />}
    </li>
  );
};

export default EpisodeInfo;

interface LoadingEpisodeInfoProps {
  index: number;
  showSeperator?: boolean;
}

export const LoadingEpisodeInfo: React.FC<LoadingEpisodeInfoProps> = ({
  showSeperator = true,
  index,
}) => {
  const { width } = useViewport();
  //only divs as it is just a "decoration" of the page
  return (
    <li className='w-full relative flex flex-col space-y-[1.125rem] lg:flex-row '>
      <div className='w-full font-bold space-y-[0.563rem] flex flex-col lg:flex-row lg:space-y-0 lg:min-h-[6.625rem]'>
        <div className='w-full max-w-[7.5rem] h-[1.688rem] relative flex items-center'>
          <div className='bg-dark rounded-xl h-[0.625rem] w-[5.313rem]' />
        </div>
        {showSeperator && width >= DESKTOP_WIDTH && <Seperator />}
        <div className='space-y-[0.563rem] lg:ml-[1.813rem] w-full relative'>
          <div className='w-full max-w-[22.625rem] h-[1.688rem] relative flex items-center'>
            <div
              className={`${
                index % 2 === 0 ? "bg-blue" : "bg-green-dark"
              } rounded-xl h-[1.188rem] w-full`}
            />
          </div>
          <div className='w-full max-w-[10.625rem] h-[1.406rem] relative flex items-center'>
            <div className='bg-gray rounded-xl h-[0.5rem] w-full' />
          </div>
        </div>
      </div>
      {showSeperator && width < DESKTOP_WIDTH && <Seperator />}
    </li>
  );
};
