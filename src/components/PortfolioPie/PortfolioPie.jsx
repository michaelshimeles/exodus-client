import { Pie } from "react-chartjs-2";

const PortfolioPie = ({ collectibles }) => {
  if (!collectibles) {
    return null;
  }
  const data = {
    labels: collectibles.map((label) => {
        return label.name;
      }),
    datasets: [
      {
        label: [
          collectibles.map((label) => {
            return label.quantity;
          }),
        ],

        data: collectibles.map((label) => {
          return label.floorPrice;
        }),

        backgroundColor: [
          "#151515",
          "#202020",
          "#303030",
        ],
        hoverOffset: 4,
      },
    ],
  };
  return (
    <div className="pie">
      <Pie data={data} />
    </div>
  );
};

export default PortfolioPie;
