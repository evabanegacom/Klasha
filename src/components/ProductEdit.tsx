import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import './Product.css';

const data = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 200 },
  { name: "Apr", value: 278 },
  { name: "May", value: 189 },
  { name: "Jun", value: 209 },
  { name: "Jul", value: 349 },
  { name: "Aug", value: 200 },
  { name: "Sep", value: 278 },
  { name: "Oct", value: 189 },
  { name: "Nov", value: 239 },
  { name: "Dec", value: 400 },
];

const seconddata = [
  { name: '20 Aug', value: 1500 },
  { name: '26 Aug', value: 2300 },
  { name: '27 Aug', value: 2800 },
  { name: '28 Aug', value: 2200 },
  { name: '29 Aug', value: 2400 },
  { name: '30 Aug', value: 3000 },
  { name: '31 Aug', value: 2700 },
  { name: '01 Sep', value: 3200 },
];


interface Props {
    bgcolor: string;
    month: string;
    price: string;
    date: string;
  }
  
  const Charts:React.FC<Props> = ({ bgcolor, month, price, date }) => {
    return (
      <div style={{background: bgcolor}} className='chart__container'>
          <div className='chart__date'>
            {date}
          </div>
          <ResponsiveContainer>
            <LineChart data={data}>
              <Line type="monotone" dataKey="value" stroke="red" />
            </LineChart>
          </ResponsiveContainer>
          <div >{month}</div>
          <div>{price}</div>
        </div>
    );
  };

const ProductEdit = () => {
  return (
    <div className='charts__container-div'>
      <div style={{display: 'flex', gap: '20px'}}>
      <Charts bgcolor='#fff' month='This year' price='$ 20,400' date='24 Aug - 01 Sep 21'/>
      <Charts bgcolor='black' month='This Month' price='$ 16,400' date='24 Aug - 01 Sep 21'/>
      <Charts bgcolor='green' month='This week' price='23,400' date='24 Aug - 01 Sep 21'/>
      <Charts bgcolor='blue' month='Today' price='$ 2,400' date='24 Aug - 01 Sep 21'/>
      </div>
      <div style={{ height: '248px', width: '768px' }}>
      <ResponsiveContainer>
        <LineChart data={seconddata}>
        <Line type="monotone" dataKey="value" stroke="red" />
          <XAxis dataKey="name" />
          <YAxis unit="k" />
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <Line type="monotone" dataKey="price" stroke="#8884d8" strokeWidth={2} dot={false} style={{background: 'linearGradient(0deg, #EF2C5A -435.62%, rgba(239, 44, 90, 0) 93.15%)'}} />
        </LineChart>
      </ResponsiveContainer>
    </div>
    </div>
  );
};

export default ProductEdit;



// transform: matrix(1, 0, 0, -1, 0, 0);