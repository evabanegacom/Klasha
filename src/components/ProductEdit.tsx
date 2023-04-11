import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  AreaChart, Area,
  ResponsiveContainer,
  Tooltip
} from "recharts";
import "./Product.css";

const data = [
  {
    name: "Jan",
    income: 4000,
    expenses: 2400,
  },
  {
    name: "Feb",
    income: 3000,
    expenses: 1398,
  },
  {
    name: "Mar",
    income: 2000,
    expenses: 9800,
  },
  {
    name: "Apr",
    income: 2780,
    expenses: 3908,
  },
  {
    name: "May",
    income: 1890,
    expenses: 4800,
  },
  {
    name: "Jun",
    income: 2390,
    expenses: 3800,
  },
  {
    name: "Jul",
    income: 340,
    expenses: 4300,
  },
  {
    name: "Aug",
    income: 3490,
    expenses: 4300,
  },
  {
    name: "Sep",
    income: 3490,
    expenses: 4300,
  },
  {
    name: "Oct",
    income: 3490,
    expenses: 4300,
  },
  {
    name: "Nov",
    income: 3490,
    expenses: 4300,
  },
  {
    name: "Dec",
    income: 3490,
    expenses: 4300,
  },
];

interface Props {
  bgcolor: string;
  month: string;
  price: string;
  date: string;
  textColor: string;
}

const Charts: React.FC<Props> = ({ bgcolor, month, price, date, textColor}) => {
  return (
    <div style={{ background: bgcolor }} className="chart__container">
      <div style={{color: textColor}} className="chart__date">{date}</div>
      <ResponsiveContainer>
        <AreaChart data={data}>
        <Tooltip />

        <Area type="monotone" dataKey="income" stroke="#FF0000" fillOpacity={0.3} fill="#FF0000" />
        </AreaChart>
      </ResponsiveContainer>
      <div style={{color: textColor}}>{month}</div>
      <div style={{color: textColor}}>{price}</div>
    </div>
  );
};

const ProductEdit = () => {
  return (
    <div className="charts__container-div">
      <div className='charts__container'>
        <Charts
          bgcolor="#fff"
          month=""
          price="$ 20,400"
          date="Today's sales"
          textColor="#000000"
        />
        <Charts
          bgcolor="black"
          month="This Month"
          price="$ 16,400"
          date="24 Aug - 01 Sep 21"
          textColor="#fff"

        />
        <Charts
          bgcolor="transparent"
          month="This week"
          price="23,400"
          date="24 Aug - 01 Sep 21"
          textColor="#000000"
        />
        <Charts
          bgcolor="transparent"
          month="Today"
          price="$ 2,400"
          date="24 Aug - 01 Sep 21"
          textColor="#000000"
        />
      </div>
      <div className='charts__big-chart'>
      <div style={{ height: "248px", width: "768px" }}>
        <ResponsiveContainer>
          <AreaChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />            
            <Tooltip />
            <Area type="monotone" dataKey="income" stroke="#FF0000" fillOpacity={0.3} fill="#FF0000" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className='charts__box'>
        <div>
        KlashaWire - send money to businesses globally from Africa
        </div>
        <button>Send a wire</button>
      </div>
      </div>
    </div>
  );
};

export default ProductEdit;
