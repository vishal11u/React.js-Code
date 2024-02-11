import React, { useEffect, useState } from 'react';
import Data from './Data'

function Node() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            setData(Data)
        } catch (error) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <div className=''>
                {loading ? (
                    <div className=''>
                        <h1>Loading...</h1>
                    </div>
                ) : error ? (
                    <div className=''>
                        <h1>Error fetching data</h1>
                    </div>
                ) : (
                    <div>
                        {data.map((item) => (
                            <div key={item.id}>
                                <ul>
                                    <li>{item.id}</li>
                                    <img src={item.image} alt=''/>
                                     <li>{item.price}</li>
                                </ul>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Node;
