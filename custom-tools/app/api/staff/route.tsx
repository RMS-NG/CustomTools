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

    let query = {};
    if (param.get("staffNo")) {
        let staffNo = param.get("staffNo");
        query = {
            ...query,
            StaffNo: staffNo
        }
    }


    if (Object.keys(query).length === 0 && query.constructor === Object) {
        return NextResponse.json(rtn);
    }

    const results = await prisma.staffJobMapping.findMany({
        where: query,
        select: {
            StaffID: true,
            StaffNo: true,
            DisplayNameEng: true,
            StatusCode: true,
            DepartmentID: true
        }
    });

    if (results) {
        rtn = results[0];
        rtn.Nfc = await GetNFC(results[0].StaffNo ?? "");
        let dept = DepartmentJson.find((item: any) => item.DepartmentId === results[0].DepartmentID?.toString());
        rtn.DivisionCode = dept?.DivisionCode;
        rtn.DepartmentCode = dept?.DepartmentCode;
        rtn.DepartmentName = dept?.DepartmentNameEng;
    }

    return NextResponse.json(rtn);
}
const GetNFC = async (staffNo: string) => {

    try {
        // make sure that any items are correctly URL encoded in the connection string
        await sql.connect('Data Source="NFDDI02, 54876";Initial Catalog=DBAPM;User ID=diDBAPM;Password=ZD$_yxk$54_$UJ89;trustServerCertificate=true');
        const result = await sql.query`select [EMP_CODE],[CARD_TYPE],[ACT_CARD_NO] from [DBAPM].[dbo].[EMP_CARD_TB] where EMP_CODE=${staffNo}`;

        return result.recordset;
        //console.dir(result)
    } catch (err) {
        // ... error checks
    }

    return null;
}