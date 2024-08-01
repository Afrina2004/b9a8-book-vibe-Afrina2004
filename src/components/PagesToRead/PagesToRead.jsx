import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Cell } from 'recharts';

const PagesToRead = () => {
  const [readBooks, setReadBooks] = useState([]);

  useEffect(() => {
    const readBooksFromStorage = JSON.parse(localStorage.getItem('readBooks')) || [];
    setReadBooks(readBooksFromStorage);
  }, []);

  const data = readBooks.map((book) => ({
    name: book.bookName,
    pages: book.totalPages,
  }));

  const colors = ['#8884d8', '#82ca9d', '#ffc658', '#ff7300', '#d0ed57']; // Add more colors if needed

  return (
    <div className="p-4 mt-10">
     
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="pages" fill="#8884d8" isAnimationActive={true}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PagesToRead;
