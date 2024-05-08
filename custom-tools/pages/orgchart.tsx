/* eslint-disable react/jsx-no-undef */

import React from 'react';
import OrganizationChart from "../lib/dabeng-react-orgchart/ChartContainer";
import './_app.css';
import html2canvas from 'html2canvas';
import Image from "next/image";



const OrgChartPage = () => {

    const orgchartRef = React.useRef<any>();

    const ds =
    {
        id: "13", name: "Ken Ka Chung WU", title: "Chief Information Officer", orgPosition: "Information Technology Department", icon: "/staffdirectory_photo/KKC_WU.jpg",
        children: [
            { id: "13A", name: "Una Lai Na KWOK", title: "IT Officer", orgPosition: "", icon: "/staffdirectory_photo/ULN_KWOK.jpg" },
            {
                id: "131", name: "<acting : Ken Ka Chung WU>", title: "", orgPosition: "Enterprise Systems & Modern Workplace", icon: "",
                children: [
                    {
                        id: "1311", name: "Louisa Wing Yan KWOK", title: "Senior IT Project Manager", orgPosition: "Finance / Investment / Asset Management", icon: "/staffdirectory_photo/LWY_KWOK.jpg",
                        children: [
                            {
                                id: "1311A", name: "Pak To YUEN", title: "Manager - Information Technology", orgPosition: "", icon: "/staffdirectory_photo/PPT_YUEN.jpg",
                                children: [
                                    { id: "1311AA", name: "Arthur Wai Shing LEE", title: "Assistant Manager - Information Technology", orgPosition: "", icon: "/staffdirectory_photo/AWS_LEE.jpg" },
                                    { id: "1311AB", name: "Andy Chi Leung KWONG", title: "System Analyst", orgPosition: "", icon: "/staffdirectory_photo/ACL_KWONG.jpg" },
                                    { id: "1311AC", name: "John, Cheuk Kin CHAN", title: "PROJECT LEADER", orgPosition: "", icon: "" },
                                ]
                            },
                            { id: "1311B", name: "Issac Chun Hin CHAN", title: "Senior Business Analyst", orgPosition: "", icon: "/staffdirectory_photo/ICH01_CHAN.jpg" },
                            { id: "1311C", name: "Karson Tin Wai LAW", title: "Business Analyst", orgPosition: "", icon: "/staffdirectory_photo/KTW_LAW.jpg" },

                        ]
                    },
                    {
                        id: "1312", name: "<hiring: Senior Manager - Digital Workplace>", title: "Senior Manager - Digital Workplace", orgPosition: "Digital Workplace", icon: "",
                        children: [
                            { id: "1312A", name: "Ricky Miu Sum NG", title: "Senior Analyst Programmer", orgPosition: "", icon: "/staffdirectory_photo/RMS_NG.jpg" },
                            { id: "1312B", name: "Ringo Wing Wai FAN", title: "Senior System Analyst", orgPosition: "", icon: "/staffdirectory_photo/RWW_FAN.jpg" },
                            { id: "1312C", name: "Ken Kin Tak CHENG", title: "Senior System Analyst", orgPosition: "", icon: "/staffdirectory_photo/KKT_CHENG.jpg" },
                            { id: "1312D", name: "Tony Ying To LAU", title: "System Analyst", orgPosition: "", icon: "/staffdirectory_photo/TYT_LAU.jpg" },
                            { id: "1312E", name: "<hiring: System Analyst>", title: "System Analyst", orgPosition: "", icon: "" },

                        ]
                    },
                    {
                        id: "1313", name: "Belle Xianyuan HUANG", title: "Manager - Information Technology", orgPosition: "Human Capital", icon: "/staffdirectory_photo/BX_HUANG.jpg",
                        children: [
                            { id: "1313A", name: "Heidi Ka Wai LUK", title: "Business Analyst", orgPosition: "", icon: "/staffdirectory_photo/HKW_LUK.jpg" },
                        ]
                    },



                ]
            },
            {
                id: "132", name: "KC Ka Chung NG", title: "Assistant General Manager - Information Technology", orgPosition: "Business Technology & Innovation", icon: "/staffdirectory_photo/KKC_NG.jpg",
                children: [
                    {
                        id: "1321", name: "Wan Kin", title: "Manager - Information Technology", orgPosition: "Digital & Web Applications", icon: "/staffdirectory_photo/K01_WAN.jpg",
                        children: [
                            { id: "1321A", name: "Leo Ka Hung LEUNG", title: "System Analyst", orgPosition: "", icon: "/staffdirectory_photo/LKH01_LEUNG.jpg" },

                        ]
                    },
                    {
                        id: "1322", name: "Alan Kin Lun TAM", title: "IT Manager - Digital Marketing", orgPosition: "Digital Marketing", icon: "/staffdirectory_photo/AKL_TAM.jpg",
                        children: [
                            { id: "1322A", name: "Rachel Wing Tung FONG", title: "Senior Business Analyst (Contract)", orgPosition: "", icon: "/staffdirectory_photo/RWT_FONG.jpg" },
                            { id: "1322B", name: "Ariel Chung Nga WONG", title: "UX/UI Designer", orgPosition: "", icon: "/staffdirectory_photo/ACN_WONG.jpg" },
                            { id: "1322C", name: "Ruby Lok Wing CHAN", title: "System Analyst", orgPosition: "", icon: "/staffdirectory_photo/RLW_CHAN.jpg" },
                            { id: "1322D", name: "Ivy Tsoi Ying SHUM", title: "Assistant Business Analyst", orgPosition: "", icon: "/staffdirectory_photo/ITY_SHUM.jpg" },

                        ]
                    },
                    {
                        id: "1323", name: "Joey Wai Chung LEUNG", title: "IT Engagement Manager", orgPosition: "Project, Construction & Property Sales", icon: "/staffdirectory_photo/JWC_LEUNG.jpg",
                        children: [
                            { id: "1323A", name: "Gary Chi Wai CHOW", title: "Assistant Project Manager - IT", orgPosition: "", icon: "/staffdirectory_photo/GCW_CHOW.jpg" },
                            { id: "1323B", name: "Iria Lai Kuen CHAN", title: "Assistant Project Manager - IT", orgPosition: "", icon: "/staffdirectory_photo/ILK_CHAN.jpg" },
                        ]
                    },
                    {
                        id: "1324", name: "Yvonne Yim Man CHENG", title: "IT Project Manager", orgPosition: "Property Management ", icon: "/staffdirectory_photo/YYM01_CHENG.jpg",
                        children: [
                            { id: "1324A", name: "Mike Loi Fat CHOI", title: "Senior System Analyst", orgPosition: "", icon: "/staffdirectory_photo/MLF_CHOI.jpg" },
                            { id: "1324B", name: "Johnny Man Hon TAM", title: "Assistant Business Analyst (Contract)", orgPosition: "", icon: "/staffdirectory_photo/JMH_TAM.jpg" },
                        ]
                    },
                    {
                        id: "1325", name: "Vienn Kiu Kwan CHOW", title: "IT Project Manager", orgPosition: "Property Management (Tenant Portal)", icon: "/staffdirectory_photo/VKK_CHOW.jpg",
                        children: [
                            { id: "1325A", name: "Ivan Kwan Ngai CHIU", title: "Business Analyst", orgPosition: "", icon: "/staffdirectory_photo/IKN_CHIU.jpg" },

                        ]
                    },
                    {
                        id: "1326",
                        name: "",
                        title: "",
                        orgPosition: "Innovation / SEWIT / AIRSIDE",
                        children: [
                            { id: "1326A", name: "Vincent Shun Lam CHAU", title: "Manager - Information Technology", orgPosition: "", icon: "/staffdirectory_photo/VSL_CHAU.jpg" },
                            { id: "1326B", name: "Andy Kim Fung WOO", title: "Manager - Information Technology", orgPosition: "", icon: "/staffdirectory_photo/AKF_WOO.jpg", children: [] },
                        ]
                    },
                    {
                        id: "1328", name: "Marco, Tak Kwan YU", title: "SENIOR IT MANAGER", orgPosition: "Property Management Team", icon: "",
                        children: [
                            { id: "1328A", name: "Sai, Sai Cheong WONG", title: "ASSISTANT IT MANAGER", orgPosition: "", icon: "" },
                            { id: "1328B", name: "Eiffel, Tsz Him FAN", title: "ANALYST PROGRAMMER", orgPosition: "", icon: "" },
                            { id: "1328C", name: "Ed, Chok Fan HSU", title: "SENIOR IT OFFICER", orgPosition: "", icon: "" },
                            { id: "1328D", name: "Arron, Yin Tsi TSANG", title: "IT OFFICER", orgPosition: "", icon: "" },

                        ]
                    },

                ]
            },
            {
                id: "133", name: "Nelson Chi Kin MAK", title: "Senior IT Project Manager", orgPosition: "Enterprise Architecture & Data Management", icon: "/staffdirectory_photo/NCK_MAK.jpg",
                children: [
                    { id: "1331", name: "Colin Wing Kong AU YANG", title: "IT Manager - Database Administration", orgPosition: "Enterprise Architecture (Database Administration)", icon: "/staffdirectory_photo/CWK_AUYANG.jpg" },
                    {
                        id: "1332", name: "Simon Wan Yeung POW", title: "Manager - Data Analytics", orgPosition: "Enterprise Architecture (Data Analytics)", icon: "/staffdirectory_photo/SWY_POW.jpg",
                        children: [
                            { id: "1332A", name: "Billy Chun Fung POON", title: "Data Analytics Specialist", orgPosition: "", icon: "/staffdirectory_photo/BCF_POON.jpg" },
                            { id: "1332B", name: "Heidi Man Yee HO", title: "Business Intelligence Specialist", orgPosition: "", icon: "/staffdirectory_photo/HMY_HO.jpg" },

                        ]
                    },

                ]
            },
            {
                id: "134", name: "Will Man Lung SIU", title: "Manager - Information Security", orgPosition: "Information Security & Risk Management", icon: "/staffdirectory_photo/WML_SIU.jpg",
                children: [
                    { id: "1341", name: "Kelvin Ming Fung LEE", title: "Assistant Manager - Information Security", orgPosition: "", icon: "/staffdirectory_photo/KMF_LEE.jpg" },
                    { id: "1342", name: "Carol Pei Hei CHU", title: "Security Specialist", orgPosition: "", icon: "/staffdirectory_photo/CPH_CHU.jpg" },
                    { id: "1343", name: "Adrian Kwan Wai SO", title: "Security Specialist", orgPosition: "", icon: "/staffdirectory_photo/AKW_SO.jpg" },
                    { id: "1344", name: "Jenny Tsz Wa KAM", title: "Security Specialist", orgPosition: "", icon: "/staffdirectory_photo/JTW_KAM.jpg" },

                ]
            },
            {
                id: "135", name: "Andrew Kwai Hung LEI", title: "Assistant General Manager - Information Technology", orgPosition: "Infrastructure & Operation", icon: "/staffdirectory_photo/AKH01_LEI.jpg",
                children: [
                    {
                        id: "1351", name: "Steven Chi Hang LAM", title: "IT Manager - Infrastructure", orgPosition: "Email, Firewall, Cloud, Security", icon: "/staffdirectory_photo/SCH_LAM.jpg",
                        children: [
                            { id: "1351A", name: "Edwin Kwan Yiu CHEW", title: "Assistant Infrastructure Manager", orgPosition: "", icon: "/staffdirectory_photo/EKY_CHEW.jpg" },
                            { id: "1351B", name: "Howard LEE", title: "Senior Infrastructure Specialist", orgPosition: "", icon: "/staffdirectory_photo/H_LEE.jpg" },
                            { id: "1351C", name: "Ken Chun Ngai LEE", title: "Infrastructure Specialist", orgPosition: "", icon: "/staffdirectory_photo/KCN_LEE.jpg" },

                        ]
                    },
                    {
                        id: "1352", name: "<hiring: IT Manager - Infrastructure>", title: "IT Manager - Infrastructure", orgPosition: "Server, Network , Infrastructure, DC", icon: "",
                        children: [
                            { id: "1352A", name: "Chris Chi Fai LEUNG", title: "Assistant Manager - Information Technology", orgPosition: "", icon: "/staffdirectory_photo/CCF_LEUNG.jpg" },
                            { id: "1352B", name: "Eric Kwun Hong YAU", title: "Assistant Infrastructure Manager", orgPosition: "", icon: "/staffdirectory_photo/EKH01_YAU.jpg" },
                            { id: "1352C", name: "Ken Wing Kei CHAN", title: "Infrastructure Specialist", orgPosition: "", icon: "/staffdirectory_photo/KWK01_CHAN.jpg" },

                        ]
                    },
                    {
                        id: "1353", name: "<hiring: Manager - IT Services>", title: "Manager - IT Services", orgPosition: "IT Support & Operation", icon: "",
                        children: [
                            {
                                id: "1353A", name: "King Wai King CHOW", title: "Assistant Manager - IT Services", orgPosition: "", icon: "/staffdirectory_photo/KWK_CHOW.jpg",
                                children: [
                                    { id: "1353AA", name: "Bryan Wai Ming LO", title: "IT Services Supervisor", orgPosition: "", icon: "/staffdirectory_photo/BWM_LO.jpg" },
                                    { id: "1353AB", name: "Ka Kit CHOY", title: "Senior IT Support", orgPosition: "", icon: "/staffdirectory_photo/KK_CHOY.jpg" },
                                    { id: "1353AC", name: "Po Hung WUN", title: "Senior IT Support", orgPosition: "", icon: "/staffdirectory_photo/PH_WUN.jpg" },
                                    { id: "1353AD", name: "Ken Kwok Keung FUNG", title: "Senior IT Support", orgPosition: "", icon: "/staffdirectory_photo/KKK_FUNG.jpg" },
                                    { id: "1353AE", name: "Queenie Pui Lam CHUNG", title: "Senior IT Support", orgPosition: "", icon: "/staffdirectory_photo/QPL_CHUNG.jpg" },

                                ]
                            },
                            { id: "1353B", name: "<hiring: Technical Support Specialist>", title: "Technical Support Specialist", orgPosition: "", icon: "" },

                        ]
                    },
                    {
                        id: "1354", name: "Kevin Ka Wai YU", title: "IT Support Manager", orgPosition: "Retail Mall", icon: "/staffdirectory_photo/KKW_YU.jpg",
                        children: [
                            { id: "1354A", name: "Tsz Ho CHUNG", title: "Senior IT Support", orgPosition: "", icon: "/staffdirectory_photo/TH_CHUNG.jpg" },
                            { id: "1354B", name: "Leo Ching Hang YEUNG", title: "Senior IT Support", orgPosition: "", icon: "/staffdirectory_photo/LCH_YEUNG.jpg" },
                            { id: "1354C", name: "Kelvin Ying Kit LEUNG", title: "Senior IT Support", orgPosition: "", icon: "/staffdirectory_photo/KYK_LEUNG.jpg" },
                            { id: "1354D", name: "<hiring: Senior IT Support>", title: "Senior IT Support", orgPosition: "", icon: "" },

                        ]
                    },
                    { id: "1355", name: "Kiyoko Kit Hung CHAN", title: "Assistant Procurement Officer", orgPosition: "IT Procurement", icon: "/staffdirectory_photo/KKH_CHAN.jpg" },

                ]
            },
            {
                id: "136", name: "Patrick Kim Po YU", title: "General Manager - Information Technology", orgPosition: "China IT / Special Projects", icon: "/staffdirectory_photo/PKP_YU.jpg",
                children: [
                    { id: "1361", name: "Harry, Yu ZHANG", title: "Head of IT, East China", orgPosition: "", icon: "" },
                    { id: "1362", name: "Raymond, Wei Wen CHEN", title: "Assistant IT Manager", orgPosition: "", icon: "" },

                ]
            },
            {
                id: "137", name: "", title: "", orgPosition: "Overseas IT", icon: "",
                children: [
                    { id: "137A", name: "Barry, Ho Tak TSIU", title: "Senior IT Services Manager", orgPosition: "", icon: "" },
                    { id: "137B", name: "Samon, Kit Yung TSE", title: "IT Consultant", orgPosition: "", icon: "" },
                ]
            },

        ]
    };

    const colorClasses = ['bg-red-200', 'bg-blue-200', 'bg-green-200', 'bg-yellow-200',
        'bg-indigo-200', 'bg-pink-200', 'bg-purple-200', 'bg-teal-200'];
    const colorHiring = 'bg-gray-200';

    const exportChart = () => {
        if (orgchartRef.current) {
            orgchartRef.current.exportTo("OrgChart", "pdf");
        }
    }
    const exportAsImage = async () => {
        if (orgchartRef.current) {
            orgchartRef.current.exportTo("OrgChart", "png");
        }
    }

    const zoomIn = () => {
        if (orgchartRef.current) {
            orgchartRef.current.zoomIn();
        }
    }

    const zoomOut = () => {
        if (orgchartRef.current) {
            orgchartRef.current.zoomOut();
        }
    }



    const defaultChartNodeView = (data: any) => {
        const { nodeData: { id, name, title, orgPosition, icon } } = data;
        const color = name == "" ? colorHiring : colorClasses[id.length];
        return (
            <div className={`${orgPosition == "" ? `rounded-full` : `rounded-lg`} p-4 m-2 border border-gray-300 w-max text-center flex flex-col items-center ${color}`}>

                {orgPosition &&
                    <div className="flex items-center">
                        <div className="font-bold text-gray-700 border border-gray-700 bg-gray-100 px-4 py-1 rounded-lg mb-2">{orgPosition}</div>
                    </div>
                }
                <div className={`inline-flex items-center ${title && `mb-2`}`}>
                    {icon &&
                        <div className='flex-auto mr-3'>
                            <Image src={icon}
                                alt={name}
                                width="0"
                                height="0"
                                sizes="100vw"
                                className="w-10 h-10 rounded-full object-cover inline-flex" />

                        </div>
                    }
                    <div className="text-xl font-bold flex-auto">
                        {name}
                    </div>
                </div>
                <div className="text-lg">{title}</div>
            </div>
        );
    }

    const chartProps: any = {
        datasource: ds,
        pan: false,
        zoom: true,
        collapsible: true,
        NodeTemplate: defaultChartNodeView
    }

    return (
        <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => exportChart()}>
                Export To PDF
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => exportAsImage()}>
                Export As Image
            </button>

            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded float-right"
                onClick={() => zoomIn()}>
                Zoom In
            </button>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded float-right"
                onClick={() => zoomOut()}>
                Zoom Out
            </button>
            <OrganizationChart ref={orgchartRef} {...chartProps} />
        </div>
    );
}

export default OrgChartPage;