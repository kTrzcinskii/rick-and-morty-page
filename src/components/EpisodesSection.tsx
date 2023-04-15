import { useViewport } from "../hooks/useViewport";
import { DESKTOP_WIDTH } from "../utils/constants";
import EpisodeInfo, { Episode } from "./EpisodeInfo";

const EpisodesSection: React.FC = () => {
  //only for development process
  const fakeData: Episode[] = [
    {
      airDate: "November 10, 2019",
      episode: "S04E01",
      name: "Edge of Tomorty: Rick, Die, Rickpeat",
    },
    {
      airDate: "November 17, 2019",
      episode: "S04E02",
      name: "The Old Man and the Seat",
    },
    {
      airDate: "November 10, 2019",
      episode: "S04E03",
      name: "Edge of Tomorty: Rick, Die, Rickpeat",
    },
    {
      airDate: "November 17, 2019",
      episode: "S04E04",
      name: "The Old Man and the Seat",
    },
    {
      airDate: "November 10, 2019",
      episode: "S04E05",
      name: "Edge of Tomorty: Rick, Die, Rickpeat",
    },
    {
      airDate: "November 17, 2019",
      episode: "S04E06",
      name: "The Old Man and the Seat",
    },
    {
      airDate: "November 10, 2019",
      episode: "S04E07",
      name: "Edge of Tomorty: Rick, Die, Rickpeat",
    },
    {
      airDate: "November 17, 2019",
      episode: "S04E08",
      name: "The Old Man and the Seat",
    },
    {
      airDate: "November 10, 2019",
      episode: "S04E09",
      name: "Edge of Tomorty: Rick, Die, Rickpeat",
    },
    {
      airDate: "November 17, 2019",
      episode: "S04E10",
      name: "The Old Man and the Seat",
    },
  ];

  const { width } = useViewport();

  return (
    <section className='w-full max-w-[22.625rem] relative mt-[3.5rem] lg:mt-[0.375rem] lg:max-w-[28.125rem] xl:max-w-[44.375rem]'>
      <ul className='space-y-[0.938rem] lg:space-y-0'>
        {fakeData.map((data, index) => {
          return (
            <EpisodeInfo
              {...data}
              showSeperator={
                (index !== fakeData.length - 1 && width < DESKTOP_WIDTH) ||
                width >= DESKTOP_WIDTH
              }
              index={index}
              key={index}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default EpisodesSection;
