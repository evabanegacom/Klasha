import React from 'react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 200 },
  { name: 'Apr', value: 278 },
  { name: 'May', value: 189 },
  { name: 'Jun', value: 239 },
  { name: 'Jul', value: 349 },
  { name: 'Aug', value: 200 },
  { name: 'Sep', value: 278 },
  { name: 'Oct', value: 189 },
  { name: 'Nov', value: 239 },
  { name: 'Dec', value: 400 },
];

const Chart = () => {
  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <div style={{ width: 256, height: 240, backgroundColor: 'black', padding: '20px' }}>
        <ResponsiveContainer>
          <LineChart data={data}>
            <Line type="monotone" dataKey="value" stroke="red" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div style={{ width: 256, height: 240, backgroundColor: 'white', padding: '20px' }}>
        <ResponsiveContainer>
          <LineChart data={data}>
            <Line type="monotone" dataKey="value" stroke="blue" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div style={{ width: 256, height: 240, backgroundColor: 'gray', padding: '20px' }}>
        <ResponsiveContainer>
          <LineChart data={data}>
            <Line type="monotone" dataKey="value" stroke="green" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div style={{ width: 256, height: 240, backgroundColor: 'lightgray', padding: '20px' }}>
        <ResponsiveContainer>
          <LineChart data={data}>
            <Line type="monotone" dataKey="value" stroke="orange" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;
