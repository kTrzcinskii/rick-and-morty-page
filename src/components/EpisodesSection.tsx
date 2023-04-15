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
      episode: "S04E01",
      name: "Edge of Tomorty: Rick, Die, Rickpeat",
    },
    {
      airDate: "November 17, 2019",
      episode: "S04E02",
      name: "The Old Man and the Seat",
    },
  ];

  return (
    <section className='w-full max-w-[22.625rem] relative mt-[3.5rem]'>
      <ul className='space-y-[0.938rem]'>
        {fakeData.map((data, index) => {
          return (
            <EpisodeInfo
              {...data}
              showSeperator={index !== fakeData.length - 1}
              index={index}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default EpisodesSection;
