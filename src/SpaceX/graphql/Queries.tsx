import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
export const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://api.spacex.land/graphql/",
});

export const Launch_Details = gql`
  {
    launchesPast(limit: 10) {
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
      rocket {
        rocket_name
      }
      ships {
        name
        home_port
        image
      }
    }
  }
`;
