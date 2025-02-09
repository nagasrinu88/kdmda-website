import React from 'react';

async function fetchHomamDetails(id) {
    const host = process.env.HOST;
    const response = await fetch(`${host}/api/homams?id=${id}`);
    const homam = await response.json();
    return homam;
}

const metadata = {};

const HomamPage = async ({ params }) => {
    const { id } = params;
    const homam = await fetchHomamDetails(id);

    metadata.title = `Homam Details - ${homam.displayName}`;
    metadata.description = homam.description;

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Homam Details</h2>
            <div className="bg-white shadow-md rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">{homam.displayName}</h3>
                <p className="mb-4">{homam.description}</p>
                <p className="mb-2">Date: {new Date(homam.date).toLocaleDateString()}</p>
                <p className="mb-4">Time: {homam.time}</p>

                <h4 className="text-lg font-semibold mb-2">దాతలు వివరాలు</h4>
                <table className="min-w-full bg-white">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b">దాత పేరు</th>
                            <th className="py-2 px-4 border-b">విరాళం మొత్తం</th>
                            <th className="py-2 px-4 border-b hidden sm:table-cell">ఇతర వివరాలు</th>
                        </tr>
                    </thead>
                    <tbody>
                        {homam.donors.map((donor, index) => (
                            <tr key={index}>
                                <td className="py-2 px-4 border-b">{donor.name}</td>
                                <td className="py-2 px-4 border-b">₹{donor.amount}</td>
                                <td className="py-2 px-4 border-b hidden sm:table-cell">{donor.gothram && `(${donor.gothram})`}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <h4 className="text-lg font-semibold mb-2">Photos</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {homam.photos.map((photo, index) => (
                        <div key={index} className="bg-gray-100 p-2 rounded-lg">
                            <img src={photo.url} alt={photo.description} className="w-full h-auto rounded-md mb-2" />
                            <p className="text-center">{photo.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


export { metadata };

export default HomamPage;