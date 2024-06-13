import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: false,
            text: 'Chart.js Bar Chart',
        },
    },
};

const days = []
for (let i = 0; i < 30; i++) {
    days.push(i + 1);
}
// const labels = ['1', 'February', 'March'];
const labels = days;

export const data = {
    labels,
    datasets: [
        {
            label: '',
            data: [10000, 100,5000,200,300,600,300,600,800,6000],
            backgroundColor: '#4285f4',
        },
    ],
};

export default function BarChart() {
    return (
        <>
            <div className='w-full bg-white border-2 rounded-xl mt-3 p-5'>
                <select
                    id="order-date-seclector"
                    name="order-date-seclector"
                    autoComplete="order-date-seclector"
                    className="foucs:outline-none block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset sm:max-w-xs sm:text-sm sm:leading-6"
                >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                </select>
                <Bar redraw={true} height={"30px"} width={"100%"} options={options} data={data} />
            </div>
        </>
    );
}
