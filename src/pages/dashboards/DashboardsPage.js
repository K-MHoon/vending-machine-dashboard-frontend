import React from "react";
import BasicLayout from "../../layouts/basic/BasicLayout";
import ContentHeader from "../../layouts/main/ContentHeader";
import Card from "../../components/dashboards/Card";
import { AiOutlineDollar } from "react-icons/ai";
import { MdOutlineCreditCard } from "react-icons/md";
import { GiCash } from "react-icons/gi";
import { BarChart, PieChart } from "@mui/x-charts";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const DashboardsPage = () => {
    const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
    const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
    const xLabels = [
        "10/11",
        "10/12",
        "10/13",
        "10/14",
        "10/15",
        "10/16",
        "10/17",
    ];

    const categoryItems = [
        {
            label: "코카콜라",
            value: 10.33,
        },
        {
            label: "제로콜라",
            value: 16.38,
        },
        {
            label: "홈런볼",
            value: 3.83,
        },
        {
            label: "포카리스웨트",
            value: 2.42,
        },
        {
            label: "그 외",
            value: 4.65,
        },
    ];

    const valueFormatter = (item) => `${item.value}%`;

    const columns = [
        { field: "id", headerName: "물품명", width: 90 },
        {
            field: "firstName",
            headerName: "개당 가격",
            width: 150,
            editable: false,
        },
        {
            field: "lastName",
            headerName: "판매 유형",
            width: 150,
            editable: false,
        },
        {
            field: "age",
            headerName: "날짜",
            type: "number",
            width: 110,
            editable: true,
        },
        {
            field: "fullName",
            headerName: "위치",
            description: "This column has a value getter and is not sortable.",
            sortable: false,
            width: 160,
            valueGetter: (value, row) =>
                `${row.firstName || ""} ${row.lastName || ""}`,
        },
    ];

    const rows = [
        { id: 1, lastName: "Snow", firstName: "Jon", age: 14 },
        { id: 2, lastName: "Lannister", firstName: "Cersei", age: 31 },
        { id: 3, lastName: "Lannister", firstName: "Jaime", age: 31 },
        { id: 4, lastName: "Stark", firstName: "Arya", age: 11 },
        { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
        { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
        { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
        { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
        { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
    ];

    return (
        <BasicLayout>
            <ContentHeader title={"Dashboards"} />
            <main>
                <div className="m-2">
                    <div className="grid grid-cols-1 gap-8 p-4 lg:grid-cols-2 xl:grid-cols-4">
                        <Card name={"카드"} value={"$30,000"}>
                            <MdOutlineCreditCard className="w-12 h-12 text-orange-400" />
                        </Card>
                        <Card name={"현금"} value={"$30,000"}>
                            <AiOutlineDollar className="w-12 h-12 text-green-700" />
                        </Card>
                        <Card name={"전체 수익"} value={"$60,000"}>
                            <GiCash className="w-12 h-12 text-blue-700" />
                        </Card>
                    </div>

                    <div className="grid grid-cols-1 p-4 space-y-8 lg:gap-8 lg:space-y-0 lg:grid-cols-3">
                        <div className="col-span-2 bg-white rounded-md ">
                            <div className="flex items-center justify-between p-4 border-b">
                                <h4 className="text-lg font-semibold text-gray-500">
                                    일별 판매 금액
                                </h4>
                                <div className="flex items-center space-x-2">
                                    <button className="text-sm text-purple-700 font-semibold">
                                        Expolore ▶
                                    </button>
                                </div>
                            </div>
                            <div className="relative p-4 h-72">
                                <BarChart
                                    height={300}
                                    series={[
                                        {
                                            data: pData,
                                            label: "카드",
                                            id: "pvId",
                                            stack: "total",
                                        },
                                        {
                                            data: uData,
                                            label: "현금",
                                            id: "uvId",
                                            stack: "total",
                                        },
                                    ]}
                                    xAxis={[
                                        { data: xLabels, scaleType: "band" },
                                    ]}
                                />
                            </div>
                        </div>
                        <div className="bg-white rounded-md">
                            <div className="flex items-center justify-between p-4 border-b">
                                <h4 className="text-lg font-semibold text-gray-500">
                                    카테고리별 판매량
                                </h4>
                                <div className="flex items-center">
                                    <button className="text-sm text-purple-700 font-semibold">
                                        Expolore ▶
                                    </button>
                                </div>
                            </div>
                            <div className="relative p-4 h-72 ">
                                <PieChart
                                    series={[
                                        {
                                            data: categoryItems,
                                            highlightScope: {
                                                fade: "global",
                                                highlight: "item",
                                            },
                                            faded: {
                                                innerRadius: 30,
                                                additionalRadius: -30,
                                                color: "gray",
                                            },
                                            valueFormatter,
                                        },
                                    ]}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="p-4">
                        <div className="bg-white rounded-md">
                            <div className="flex items-center justify-between p-4 border-b">
                                <h4 className="text-lg font-semibold text-gray-500">
                                    최근 판매 기록
                                </h4>
                                <div className="flex items-center">
                                    <button className="text-sm text-purple-700 font-semibold">
                                        Expolore ▶
                                    </button>
                                </div>
                            </div>
                            <Box sx={{ height: 400, width: "100%" }}>
                                <DataGrid
                                    rows={rows}
                                    columns={columns}
                                    initialState={{
                                        pagination: {
                                            paginationModel: {
                                                pageSize: 5,
                                            },
                                        },
                                    }}
                                    pageSizeOptions={[5]}
                                    checkboxSelection
                                    disableRowSelectionOnClick
                                />
                            </Box>
                        </div>
                    </div>
                </div>
            </main>
        </BasicLayout>
    );
};

export default DashboardsPage;
