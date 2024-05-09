import { Table } from "mssql";
import { useEffect, useState } from "react";
import useSWR from "swr";
import './_app.css';

const DocPage = () => {

    const [content, setContent] = useState<string>("");

    useEffect(() => {

        const params = new URLSearchParams(window.location.search)
        let content = params.get('content')
        console.log(content);
        //content?.replace("%0a%0a", "\n\n");
        setContent(content ?? "");

    }, [])

    return (
        <div className="bg-gray-200 min-h-screen p-3">
            <div className="max-w-full mx-auto bg-white rounded-xl shadow-md overflow-hidden 
                        lg:max-w-[60%]">
                <div className="md:flex">

                    <div className="p-8">
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Reference</div>
                        <div className="whitespace-pre-wrap block mt-1 text-md text-black">{content}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DocPage;