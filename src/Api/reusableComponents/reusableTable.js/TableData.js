import React from 'react';
import AdvancedTable from './TableReuse';

const TableDataProvider = () => {
    const data = [
        { id: 1, name: 'John', age: 25, city: 'New York' },
        { id: 2, name: 'Alice', age: 30, city: 'San Francisco' },
        { id: 3, name: 'Bob', age: 22, city: 'Los Angeles' },
    ];

    const headers = [
        { label: 'ID', key: 'id' },
        { label: 'Name', key: 'name' },
        { label: 'Age', key: 'age' },
        { label: 'City', key: 'city' },
    ];

    return (
        <div>
            <h2>Table Data</h2>
            <AdvancedTable headers={headers} data={data} />
        </div>
    );
};

export default TableDataProvider;
