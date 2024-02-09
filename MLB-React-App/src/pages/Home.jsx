import React from "react";
import TableHeader from "../components/TableHeader";
import TableRow from "../components/TableRow";
import PlayerPic from "../components/PlayerPic";
import { fetchData, randomPlayerGenerator } from "../Functions";
import { useState, useEffect } from "react";

const Home = () => {
  const [data, setData] = useState(undefined);

  const fetchInfo = () => {
    let player = randomPlayerGenerator();
    let firstName = player[0];
    let lastName = player[1];
    return fetchData(firstName, lastName).then((res) => {
      setData(res);
    });
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  if (data) {
    return (
      <>
        <PlayerPic pic={{ url: data[1] }} />
        <div>
          <table>
            <thead>
              <TableHeader />
            </thead>
            <tbody>
              {data[0].map((index) => (
                <TableRow
                  key={index.season}
                  fullData={{
                    season: index.season,
                    team: index.team.name,
                    hits: index.stat.hits,
                    rbis: index.stat.rbi,
                    homeruns: index.stat.homeRuns,
                    avg: index.stat.avg,
                    obp: index.stat.obp,
                    slg: index.stat.slg,
                    ops: index.stat.ops,
                  }}
                />
              ))}
            </tbody>
          </table>
        </div>
      </>
      // <TableRow
      //     fullData={{
      //       season: data[0][0].season,
      //       hits: data[0][0].stat.hits,
      //       rbis: data[0][0].stat.rbi,
      //       homeruns: data[0][0].stat.homeRuns,
      //       avg: data[0][0].stat.avg,
      //       obp: data[0][0].stat.obp,
      //       slg: data[0][0].stat.slg,
      //       ops: data[0][0].stat.ops,
      //     }}
      //   />
      //   <TableRow
      //     fullData={{
      //       season: data[0][1].season,
      //       hits: data[0][1].stat.hits,
      //       rbis: data[0][1].stat.rbi,
      //       homeruns: data[0][1].stat.homeRuns,
      //       avg: data[0][1].stat.avg,
      //       obp: data[0][1].stat.obp,
      //       slg: data[0][1].stat.slg,
      //       ops: data[0][1].stat.ops,
      //     }}
      //   />
      //         </tbody>
      //       </table>
      //     </div>
      //   </>
    );
  }
};

export default Home;
