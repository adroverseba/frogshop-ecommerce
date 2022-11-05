import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Chart = ({ chartData }) => {
  return (
    <>
      <Bar
        options={{
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: 'Category',
              // fontSize: 20,
            },
            legend: {
              display: true,
              position: 'right',
            },
          },
        }}
        data={chartData}
      />
    </>
  );
};

export default Chart;
// reduce;
// categories name
// Clothes, Furniture, Others, Toys, Electronics
