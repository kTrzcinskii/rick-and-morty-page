import { useViewport } from "../hooks/useViewport";
import { DESKTOP_WIDTH } from "../utils/constants";

const Seperator: React.FC = () => {
  return (
    <hr className='w-full b-0 bt-[0.063rem] border-t-gray-light lg:w-[0.063rem] lg:h-full lg:bg-gray-light ' />
  );
};

export type Episode = {
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
