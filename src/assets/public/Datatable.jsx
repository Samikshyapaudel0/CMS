import React from "react";
import DataTable from "react-data-table-component";

const data=[
    {id:1, name:"Rita",age:24},
    {id:1, name:"sita",age:24},
    {id:1, name:"Gita",age:24},

];
const columns = [
    {
        name : "Names",
        selector: (row) =>row.name,
        sortable: true,
    },
    {name:"Age",

        selector:(row)=> row.age,
        sortable:true,
    },
];

export default function DataTableExample(){
    return (
    <DataTable title="My Table" columns={columns} data={data} pagination />
  );
}