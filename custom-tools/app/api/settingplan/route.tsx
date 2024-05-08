import prisma from '@/lib/primsa';
import sql from 'mssql';
import { NextApiRequest, NextApiResponse } from 'next'
import { NextRequest, NextResponse } from 'next/server'
import SeatingPlan from '@/data/seating_plan.json';
import fs from 'fs';
import path from 'path';

// @ts-ignore: Unreachable code error
BigInt.prototype.toJSON = function () {
    return this.toString();
};

//post a json data and replace the seating_plan.json
export const POST = async (req: NextRequest, res: NextApiResponse,) => {

    let apiKey = req.headers.get("API-Key");

    if (apiKey === "n*nfun97Oth@N1") {

        // let a: any = req.headers["API-Key"];
        const data = await req.json();
        const jsonData = JSON.stringify(data, null, 2);
        const filePath = path.resolve('data/seating_plan.json');

        try {
            await fs.promises.writeFile(filePath, jsonData);
            return NextResponse.json({ message: 'Success' }, { status: 200 });
        } catch (err) {
            return NextResponse.json({ message: 'Failed' }, { status: 500 });
        }
    } else {
        return NextResponse.json({ message: 'Failed' }, { status: 500 });
    }

}


// GET /api/filterPosts?searchString=:searchString
export const GET = async (req: NextRequest, res: NextResponse,) => {

    const param: any = req.nextUrl.searchParams ?? null;
    let rtn: any = null;

    console.log(param.get("name"));
    //search the name in json
    if (param.get("name")) {
        let staffName = param.get("name");
        staffName = staffName.trim();
        let staffNameSplit = staffName.split(" ");

        // let staff = SeatingPlan.filter((item: any) => item.Name.toLowerCase().includes(staffName.toLowerCase()));
        // if (staff) {
        //     rtn = staff;
        // }

        let staff = SeatingPlan.filter((item: any) =>
            staffNameSplit.every((word: string) =>
                item.Name.toLowerCase().includes(word.toLowerCase())
            )
        );

        if (staff.length > 0) {
            rtn = staff;
        }

    } else if (param.get('tableNo')) {
        let tableNo = param.get("tableNo");
        let staff = SeatingPlan.filter((item: any) => item.TableNo == tableNo);
        if (staff) {
            rtn = staff;
        }
    }
    console.log(rtn);

    if (rtn == null) {
        rtn = [];
    }

    return NextResponse.json(rtn);
}


