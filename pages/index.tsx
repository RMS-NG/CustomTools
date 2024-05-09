import { Table } from "mssql";
import { useEffect, useState } from "react";
import useSWR from "swr";
import './_app.css';
import { url } from "inspector";

const HomePage = () => {

    const [showResult, setShowResult] = useState(false);
    const [name, setName] = useState('');
    const [results, setResults] = useState<any[]>([]);

    const Search = (e: any) => {
        e.preventDefault();

        if (name === '') return;

        //call web api to get the data
        fetch(`/api/settingplan?name=${name}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setResults(data);
            });

        setShowResult(true);
        // Implement your search logic here
    };

    const SearchByTable = (tableNo: any) => {

        if (tableNo === '') return;

        //call web api to get the data
        fetch(`/api/settingplan?tableNo=${tableNo}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setResults(data);
            });

        setShowResult(true);
        // Implement your search logic here
    };

    return (
        <div className="px-4 py-5 sm:p-6 flex flex-col justify-center items-center min-h-screen"
            style={{
                backgroundImage: "url('/bg-large.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'top center',
            }}>
            <div className="pl-2 pr-2 mb-4">
                <img src="/70th-logo-hori.png" alt="logo" className="w-full max-w-xl inline-block" />
            </div>
            <form className="mb-4 w-full max-w-md">
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 
                    leading-tight focus:outline-none focus:shadow-outline "
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <button
                    className="mt-3 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full findTableBtn"
                    type="submit"
                    onClick={(e) => Search(e)}
                >
                    Find Your Table No.
                </button>
            </form>

            {showResult && (
                <div className="w-full max-w-md">
                    <table className="min-w-full ">
                        <thead className="bg-gray-50 sticky top-0"
                            style={{
                                backgroundColor: 'rgba(127, 0, 34, 0.8)',
                                color: 'white'
                            }}>
                            <tr>
                                <th className="text-left p-2 pl-4">Name</th>
                                <th className="text-center">Table No.</th>
                            </tr>
                        </thead>
                        <tbody className="bg-transparent">
                            {results.map((item, index) => (
                                <tr key={index} className={index % 2 === 0 ? 'evenResult' : 'oddResult'}>
                                    <td className="p-3 pl-4 bg-transparent font-medium">{item.Name}</td>
                                    <td className="text-center bg-transparent">
                                        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold px-4 rounded-full focus:outline-none focus:shadow-outline"
                                            onClick={() => SearchByTable(item.TableNo)}>
                                            {item.TableNo}
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default HomePage;