import React from 'react'
import { useSelector } from 'react-redux';
import { selectPoll } from './pollSlice';
import { Bar } from 'react-chartjs-2';
import "chartjs-plugin-datalabels";

export function PollChart() {
    const poll = useSelector(selectPoll);
    const chartHeight = Math.max(...poll.answers.map(el => el.vote)) + 1;

    const data = {
        labels: poll.answers.map(el => el.answer),
        datasets: [
            {
                label: poll.pollName,
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: poll.answers.map(el => el.vote)
            }
        ]
    };

    return (
        <>
            {poll.pollName}
            <Bar
                data={data}
                width={100}
                height={50}
                options={{
                    legend: {
                        display: false
                    },
                    plugins: {
                        datalabels: {
                            anchor: 'end',
                            align: 'top',
                            display: ctx => {
                                return true;
                            },
                            formatter: (ctx, data) => {
                                return `${data.dataset.data[data.dataIndex]}`;
                            }
                        }
                    },
                    scales: { yAxes: [{ ticks: { display: false, beginAtZero: true, min: 0, stepSize: 1, max: chartHeight }, gridLines: { display: false } }], scaleLabel: { display: false } },
                    maintainAspectRatio: false
                }}
            />
        </>
    )
}