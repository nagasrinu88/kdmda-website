"use client"

import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const HomamsPage = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/homams');
            const result = await response.json();
            setData(result);
        };
        fetchData();
    }, []);

    return (
        <div className="mt-12 max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Homams performed at alayam</h1>
            <div className="table-container">
                <table className="table">
                    <thead className="table-header">
                        <tr>
                            <th className="table-cell">Homam Name</th>
                            <th className="table-cell">Date & Time</th>
                            <th className="table-cell">Link</th>
                        </tr>
                    </thead>
                    <tbody className="table-divider">
                        {data.map((item, index) => (
                            <tr key={index} className="hover:bg-yellow-50">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.displayName}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.date}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-500">
                                    <Link href={`/homams/${item.id}`}>
                                        View
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

};

export default HomamsPage;