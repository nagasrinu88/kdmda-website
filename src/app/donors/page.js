"use client";

import { useEffect, useState } from "react";

// export const metadata = {
//     title: 'Donors Page',
//     description: 'View the list of donors who have contributed to the temple.',
// };

export default function Doners() {

    useEffect(() => {
        fetch('https://playground.mockoon.com/users')
            .then(response => response.json())
            .then(data => setDoners(data))
            .catch(error => console.error('Error fetching doners:', error));
    }, []);

    const [doners, setDoners] = useState([]);

    return (
        <div className="min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
            <main className="max-w-6xl mx-auto">
                <h1 className="text-2xl font-bold mb-6">Data Table</h1>

                {/* Table Container with horizontal scroll for mobile */}
                <div className="table-container">
                    <table className="table">
                        <thead className="table-header">
                            <tr>
                            <th className="table-cell">ID</th>
                                <th className="table-cell">Name</th>
                                <th className="table-cell">Email</th>
                                <th className="table-cell">Role</th>
                            </tr>
                        </thead>
                        <tbody className="table-divider">
                            {doners.map((row) => (
                                <tr key={row.id} className="hover:bg-yellow-50">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm">{row.id}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm">{row.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm">{row.email}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm">{row.role}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
}