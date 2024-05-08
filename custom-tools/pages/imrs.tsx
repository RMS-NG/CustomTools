import { Table } from "mssql";
import { useEffect, useState } from "react";
import useSWR from "swr";
import './_app.css';

const IMRSPage = () => {

    const fetcher = (url: string) => fetch(url).then((res) => res.json());
    const [staffNo, setStaffNo] = useState<string>("");
    const [results, setResults] = useState<[]>([]);

    const [staffNoToSearch, setStaffNoToSearch] = useState<string>("");

    const { data, error } = useSWR(`/api/staff?staffNo=${staffNoToSearch}`, fetcher);

    const Search = (e: any) => {
        e.preventDefault();
        setStaffNoToSearch(staffNo);
        setStaffNo("");
    }

    useEffect(() => {

        if (data) {
            let newResult: any = [...results, data];
            setResults(newResult);
        }

    }, [data]);


    return (
        <>
            <div>IMRS</div>
            <form>
                <input placeholder="Staff No." value={staffNo} onChange={(e) => setStaffNo(e.target.value)} />
                <button type="submit" onClick={(e) => Search(e)}>Search</button>
            </form>

            <table className="table border border-slate-400">
                <thead className="text-xs text-gray-700 uppercase">
                    <tr className="table-row bg-gray-200">
                        <th className="px-6 py-3">Staff No.</th>
                        <th className="px-6 py-3">SAM Account Name</th>
                        <th className="px-6 py-3 ">Display Name</th>
                        <th className="px-6 py-3">Division Code</th>
                        <th className="px-6 py-3 ">Department Code</th>
                        <th className="px-6 py-3">Department Name</th>
                        <th className="px-6 py-3 ">Card No.</th>
                    </tr>
                </thead>
                <tbody>
                    {results.map((item: any, index) => {
                        return (
                            <tr key={index} className="border-b border-gray-200">
                                <td className="py px-2 text-gray-900 whitespace-nowrap bg-gray-100 text-center">{item.StaffNo}</td>
                                <td className="py px-2 text-center">{item.StaffID}</td>
                                <td className="py px-2 text-gray-900 whitespace-nowrap bg-gray-100 text-center">{item.DisplayNameEng}</td>
                                <td className="py px-2 text-center">{item.DivisionCode}</td>
                                <td className="py px-2 text-gray-900 whitespace-nowrap bg-gray-100 text-center">{item.DepartmentCode}</td>
                                <td className="py px-2 text-center">{item.DepartmentName}</td>
                                <td className="flex flex-col py px-2 text-gray-900 whitespace-nowrap bg-gray-100 text-center">
                                    {item.Nfc.map((nfc: any, index2: number) => {
                                        return (
                                            <span key={index2}>{`${nfc.CARD_TYPE} - ${nfc.ACT_CARD_NO}`}</span>
                                        )
                                    })}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    );
}

export default IMRSPage;