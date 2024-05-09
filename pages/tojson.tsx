import { useState } from 'react';
var XLSX = require("xlsx");


export default function ToJson() {
    const [data, setData] = useState<any>([]);
    const [apiKey, setApiKey] = useState<string>("");
    const [replaceResult, setReplaceResult] = useState<any>("");

    const processExcel = (event: any) => {

        setReplaceResult("");
        const file = event.target.files[0];

        const reader = new FileReader();
        reader.onload = (evt: any) => {
            const arrayBuffer = evt.target.result;
            const data = new Uint8Array(arrayBuffer);
            const arr = [];
            for (let i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
            const bstr = arr.join("");

            const wb = XLSX.read(bstr, { type: 'binary' });
            const wsname = wb.SheetNames[0];
            const ws = wb.Sheets[wsname];
            const jsonData = XLSX.utils.sheet_to_json(ws);
            setData(jsonData);
        };
        reader.readAsArrayBuffer(file);
    };

    const replaceFile = (data: any) => {
        //call a post api to replace the file
        fetch("/api/settingplan", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                "API-Key": apiKey,
            },
        }).then((res) => {
            if (res.ok) {
                setReplaceResult("Success");
            }
            else {
                setReplaceResult("Failed");
            }
        });
    }

    const copyToClipboard = () => {
        navigator.clipboard.writeText(JSON.stringify(data, null, 2));
    };

    return (
        <div>
            <input type='text' placeholder='API Key' onChange={e => setApiKey(e.target.value)} />
            <input type="file" accept=".xlsx, .xls" onChange={processExcel} />
            <button onClick={copyToClipboard}>Copy</button>
            <button onClick={() => replaceFile(data)}>Replace File</button>
            <div>{replaceResult}</div>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}