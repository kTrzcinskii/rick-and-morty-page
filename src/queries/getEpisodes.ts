import { gql } from "../__generated__";

const GET_EPISODES = gql(`
 query episodes ($page: Int!, $episodeName: String!) {
  episodes(page: $page, filter: {episode: $episodeName}) {
    info {
      count
    }
    results {
      id
      name
      air_date
      episode
    }
  }
}
`);

export default GET_EPISODES;
