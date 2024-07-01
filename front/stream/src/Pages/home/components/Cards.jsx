import { Suspense, lazy } from "react";
import { useDataProvider } from "../../../data/dataProvider";

const Card = lazy(() => import("./Card"));

export const Cards = ({ searchData, id }) => {
  const { data: films } = useDataProvider(
    id
      ? `http://localhost:5892/films/genre/${id}`
      : "http://localhost:5892/films"
  );

  console.log(films, "aa");
  // const testfilms = films
  //   ? [...films, ...films, ...films, ...films, ...films, ...films]
  //   : [];
  if (searchData) {
    return (
      <div style={{ maxHeight: "675px" }} className="overflow-y-auto">
        {searchData?.data?.map((card) => (
          <Suspense fallback={<div>Loading...</div>} key={card.rand_id}>
            <Card card={card} />
          </Suspense>
        ))}
      </div>
    );
  } else {
    return (
      <div>
        {films?.map((card) => (
          <Suspense fallback={<div>Loading...</div>} key={card.rand_id}>
            <Card card={card} />
          </Suspense>
        ))}
      </div>
    );
  }
};
// return (
//   <div>
//     {searchData
//       ? searchData.map((card) => (
//           <Suspense fallback={<div>Loading...</div>} key={card.rand_id}>
//             <Card card={card} />
//           </Suspense>
//         ))
//       : testfilms.map((card) => (
//           <Suspense fallback={<div>Loading...</div>} key={card.rand_id}>
//             <Card card={card} />
//           </Suspense>
//         ))}
//   </div>
// );
