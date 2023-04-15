const Seperator: React.FC = () => {
  return <hr className='w-full b-0 bt-[0.063rem] border-t-gray-light' />;
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
  return (
    <li className='w-full relative flex flex-col space-y-[1.125rem]'>
      <article className='w-full font-bold space-y-[0.563rem]'>
        <p className='text-[1.125rem]'>{episode}</p>
        <h3
          className={`text-[1.125rem] ${
            index % 2 === 0 ? "text-blue" : "text-green-dark"
          }`}
        >
          {name}
        </h3>
        <p className='text-[0.938rem] text-gray'>{airDate}</p>
      </article>
      {showSeperator && <Seperator />}
    </li>
  );
};

export default EpisodeInfo;
