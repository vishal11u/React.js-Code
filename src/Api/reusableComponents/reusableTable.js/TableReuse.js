import React, { useState } from 'react';

const AdvancedTable = ({ headers, data }) => {
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

    const sortedData = [...data].sort((a, b) => {
        if (sortConfig.key !== null) {
            if (a[sortConfig.key] < b[sortConfig.key]) {
                return sortConfig.direction === 'asc' ? -1 : 1;
            }
            if (a[sortConfig.key] > b[sortConfig.key]) {
                return sortConfig.direction === 'asc' ? 1 : -1;
            }
        }
        return 0;
    });

    const requestSort = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    return (
        <table>
            <thead>
                <tr>
                    {headers.map((header, index) => (
                        <th key={index} onClick={() => requestSort(header.key)}>
                            {header.label} {sortConfig.key === header.key && (
                                <span>{sortConfig.direction === 'asc' ? '↑' : '↓'}</span>
                            )}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {sortedData.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {headers.map((header, cellIndex) => (
                            <td key={cellIndex}>{row[header.key]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default AdvancedTable;
