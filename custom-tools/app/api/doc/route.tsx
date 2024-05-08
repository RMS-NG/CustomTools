import prisma from '@/lib/primsa';
import sql from 'mssql';
import { NextApiRequest, NextApiResponse } from 'next'
import { NextRequest, NextResponse } from 'next/server'
import DepartmentJson from '@/data/rms_department.json';

// @ts-ignore: Unreachable code error
BigInt.prototype.toJSON = function () {
    return this.toString();
};

// GET /api/filterPosts?searchString=:searchString
export const GET = async (req: NextRequest, res: NextResponse,) => {

    const param: any = req.nextUrl.searchParams ?? null;
    let rtn: any = null;
    var content = "";
    let query = {};
    if (param.get("content")) {
        content = param.get("content");
    }


    if (Object.keys(query).length === 0 && query.constructor === Object) {
        return NextResponse.json(rtn);
    }


    return NextResponse.json(content);
}
