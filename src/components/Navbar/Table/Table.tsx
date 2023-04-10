import { useState } from "react";
import { FaFilter, FaFileExport } from "react-icons/fa";

const TransactionTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  let [itemsPerPage] = useState<any>(10);

  const transactions = [
    {
      id: 1,
      date: "2022-01-01",
      description: "Transaction 1",
      amount: 100.0,
      type: "income",
      category: "Category 1",
    },
    {
      id: 2,
      date: "2022-01-02",
      description: "Transaction 2",
      amount: -50.0,
      type: "expense",
      category: "Category 2",
    },
    {
      id: 3,
      date: "2022-01-03",
      description: "Transaction 3",
      amount: 75.0,
      type: "income",
      category: "Category 3",
    },
    {
      id: 4,
      date: "2022-01-04",
      description: "Transaction 4",
      amount: -30.0,
      type: "expense",
      category: "Category 4",
    },
    {
      id: 5,
      date: "2022-01-05",
      description: "Transaction 5",
      amount: 200.0,
      type: "income",
      category: "Category 5",
    },
    {
      id: 6,
      date: "2022-01-06",
      description: "Transaction 6",
      amount: -100.0,
      type: "expense",
      category: "Category 6",
    },
    {
      id: 7,
      date: "2022-01-07",
      description: "Transaction 7",
      amount: 150.0,
      type: "income",
      category: "Category 7",
    },
    {
      id: 8,
      date: "2022-01-08",
      description: "Transaction 8",
      amount: -20.0,
      type: "expense",
      category: "Category 8",
    },
    {
      id: 9,
      date: "2022-01-09",
      description: "Transaction 9",
      amount: 50.0,
      type: "income",
      category: "Category 9",
    },
    {
      id: 10,
      date: "2022-01-10",
      description: "Transaction 10",
      amount: -75.0,
      type: "expense",
      category: "Category 10",
    },
    {
      id: 11,
      date: "2022-01-11",
      description: "Transaction 11",
      amount: 125.0,
      type: "income",
      category: "Category 11",
    },
    {
      id: 12,
      date: "2022-01-12",
      description: "Transaction 12",
      amount: -90.0,
      type: "expense",
      category: "Category 12",
    },
  ];
  

  const handlePageChange = (pageNumber: any) => {
    setCurrentPage(pageNumber);
  };

  const renderTableBody = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return transactions.slice(startIndex, endIndex).map((transaction) => (
      <tr key={transaction.id}>
        <td className="py-2 px-4 border-b border-gray-200">
          {transaction.date}
        </td>
        <td className="py-2 px-4 border-b border-gray-200">
          {transaction.description}
        </td>
        <td className="py-2 px-4 border-b border-gray-200">
          {transaction.amount}
        </td>
        <td className="py-2 px-4 border-b border-gray-200">
          {transaction.type}
        </td>
        <td className="py-2 px-4 border-b border-gray-200">
          {transaction.category}
        </td>
      </tr>
    ));
  };

  const renderTableHeaders = () => {
    return (
      <thead>
        <tr>
          <th className="py-2 px-4 border-b border-gray-200">Date</th>
          <th className="py-2 px-4 border-b border-gray-200">Description</th>
          <th className="py-2 px-4 border-b border-gray-200">Amount</th>
          <th className="py-2 px-4 border-b border-gray-200">Type</th>
          <th className="py-2 px-4 border-b border-gray-200">Category</th>
        </tr>
      </thead>
    );
  };

  const renderPagination = () => {
    const totalPages = Math.ceil(transactions.length / itemsPerPage);
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }

    return (
      <div className="flex justify-between items-center py-4">
        <div className="flex items-center">
          <p className="text-sm text-gray-700 mr-2">Rows per page:</p>
          <select
            className="text-sm text-gray-700 border rounded-md border-gray-300 py-1 px-2 mr-4"
            value={itemsPerPage}
            onChange={(e) => {
              setCurrentPage(1);
              itemsPerPage = e.target.value;
            }}
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="50">50</option>
          </select>
          <p className="text-sm text-gray-700">
            Showing {(currentPage - 1) * itemsPerPage + 1}-
            {Math.min(currentPage * itemsPerPage, transactions.length)} of{" "}
            {transactions.length} results
          </p>
        </div>
        <div className="flex items-center">
          <p className="text-sm text-gray-700 mr-4">Page:</p>
          {pageNumbers.map((pageNumber) => (
            <button
              key={pageNumber}
              className={`${
                pageNumber === currentPage
                  ? "bg-gray-200 text-gray-700"
                  : "bg-white text-gray-500 hover:text-gray-700"
              } py-1 px-3 mr-1 rounded-md`}
              onClick={() => handlePageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          ))}
        </div>
      </div>
    );
  };
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-medium text-gray-700 mb-4">Transactions</h2>
        <div className="flex items-center">
          <button className="flex items-center text-gray-700 text-sm mr-4">
            <FaFilter className="mr-1" />
            Filters
          </button>
          <button className="flex items-center text-gray-700 text-sm">
            <FaFileExport className="mr-1" />
            Export
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table-auto w-full">
          {renderTableHeaders()}
          <tbody>{renderTableBody()}</tbody>
        </table>
      </div>
      {renderPagination()}
    </div>
  );
};
export default TransactionTable;
