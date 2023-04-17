import { useQuery } from "@apollo/client";
import { useViewport } from "../hooks/useViewport";
import {
  DESKTOP_WIDTH,
  EXPECTED_NUMBER_OF_EPISODES,
  SEASON_CODE,
} from "../utils/constants";
import EpisodeInfo, { LoadingEpisodeInfo } from "./EpisodeInfo";
import GET_EPISODES from "../queries/getEpisodes";
import { ReactNode } from "react";

const Container: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <section className='w-full max-w-[22.625rem] relative mt-[3.5rem] lg:mt-[0.375rem] lg:max-w-[28.125rem] xl:max-w-[44.375rem]'>
      {children}
    </section>
  );
};

const EpisodesSection: React.FC = () => {
  const { width } = useViewport();
  const { data, loading, error } = useQuery(GET_EPISODES, {
    variables: { page: 1, episodeName: SEASON_CODE },
  });

  if (loading) {
    const arr = new Array(EXPECTED_NUMBER_OF_EPISODES).fill(true);
    return (
      <Container>
        <ul className='space-y-[0.938rem] lg:space-y-0 animate-pulse'>
          {arr.map((_, index) => {
            return (
              <LoadingEpisodeInfo
                showSeperator={
                  (index !== data?.episodes?.info?.count! - 1 &&
                    width < DESKTOP_WIDTH) ||
                  width >= DESKTOP_WIDTH
                }
                index={index}
                key={index}
              />
            );
          })}
        </ul>
      </Container>
    );
  }

  if (error || !data) {
    console.log(error?.message);
    return (
      <Container>
        <h4 className='text-2xl lg:text-4xl font-bold w-full text-center mt-[3.125rem] lg:mt-[18.75rem]'>
          An error occured
        </h4>
        <p className='text-md lg:text-xl w-full text-center'>
          Failed to load data - please try again later.
        </p>
      </Container>
    );
  }

  return (
    <Container>
      <ul className='space-y-[0.938rem] lg:space-y-0'>
        {data.episodes?.results?.map((episode, index) => {
          return (
            <EpisodeInfo
              airDate={episode?.air_date!}
              episode={episode?.episode!}
              index={index}
              name={episode?.name!}
              key={episode?.id!}
              showSeperator={
                (index !== data.episodes?.info?.count! - 1 &&
                  width < DESKTOP_WIDTH) ||
                width >= DESKTOP_WIDTH
              }
            />
          );
        })}
      </ul>
    </Container>
  );
};

export default EpisodesSection;
