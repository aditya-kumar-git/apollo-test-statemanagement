import React, { ReactElement } from "react";
import { useQuery } from "@apollo/client";
import { Launch_Details } from "./graphql/Queries";
import SomeOtherPage from "./SomeOtherPage";

interface Props {}
interface APICall {
  call: [
    {
      mission_name: string;
      launch_date_local: string;
      launch_site: {
        site_name_long: string;
      };
      rocket: {
        rocket_name: string;
      };
      ships: {
        name: string;
        home_port: string;
        image: string;
      };
    }
  ];
}

export default function HomePage({}: Props): ReactElement {
  const { data, error, loading } = useQuery(Launch_Details);

  let useableData: APICall["call"];
  if (data) {
    useableData = data.launchesPast;
  }

  const renderData = () => {
    if (data) {
      return useableData.map((x, y) => {
        return (
          <div style={{ marginTop: "2rem" }} key={"item" + y}>
            <div style={{ fontSize: "2rem", fontWeight: "bold" }}>
              {x.mission_name}
            </div>
            <div>🚀 {x.rocket.rocket_name}</div>
          </div>
        );
      });
    }
    return <div>Loading....</div>;
  };
  return (
    <div>
      {renderData()}
      <SomeOtherPage />
    </div>
  );
}
