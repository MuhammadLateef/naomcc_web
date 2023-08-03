import React,{useState} from "react";
import * as XLSX from 'xlsx';
import MUIDataTable from "mui-datatables";

const ExcelImport = () =>{
    const [tableData,setTableData] = useState([]);

    // Function to convert the excel file data into JSON format.
        const convertToJson = async (headers,data) =>{
            debugger
            const rows = []
            data.forEach(async row => {
                let rowData = {}
                row.forEach(async(element,index) =>{
                    rowData[headers[index]] = element;
                })
                console.log("row Data------->",rowData)
                rows.push(rowData)        
            });
            setTabledata(rows)
            return rows
        }
    const importExcel = (e) =>{
        const file = e.target.files[0]
        const reader = new FileReader()
        reader.onload = (event) =>{
            const bstr = event.target.result
            const workbook = XLSX.read(bstr,{type:"binary"})
            const workSheetName = workbook.SheetNames[0]
            const workSheet = workbook.Sheets[workSheetName]
            const fileData = XLSX.utils.sheet_to_json(workSheet, { header })
            const headers = fileData[0]
            const heads = headers.map(head=>({title:head, field:head}))
            fileData.splice(0,1)
            convertToJson(headers,fileData)
        }
        reader.readAsBinaryString(file)
    }
    
const columns = [
    {
        name:"task_detailsomedata_id",
        label:"Task Name",
        options:{
            filter:false,
            sort:true,
            display:false,
        },
    },
        {
            name:"timer_status",
            label:"Timer_status",
        options: {
            filter:false,
            sort:true,
            display:false,
        },
    },
    {
        name:"task_name",
        label:"Task Name",
        options:{
            filter:false,
            sort:true,
            // setCellHeaderProps:()=>({
            //     style:({
            //         whiteSpace:"nowrap",
            //         position:"static",
            //         left:0,
            //         zIndex:101,
            //         textAlign:"center",
            //         fontWeight:"bold",
            //     }),
            //     setCellProps:()=>({
            //         style:{
            //             whiteSpace:"normal",
            //             position:"static",
            //             left:"0",
            //             zIndex:100,
            //             fontWeight:'normal',
            //             fontSize:"12px",
            //         }
            //     }),
            // }),

        },
    },
    {
        name:"task_name",
        label:"Task Name",
        options:{
            filter:false,
            sort:true,
            // setCellHeaderProps:()=>({
            //     style:({
            //         whiteSpace:"nowrap",
            //         position:"static",
            //         left:0,
            //         zIndex:101,
            //         textAlign:"center",
            //         fontWeight:"bold",
            //     }),
            //     setCellProps:()=>({
            //         style:{
            //             whiteSpace:"normal",
            //             position:"static",
            //             left:"0",
            //             zIndex:100,
            //             fontWeight:'normal',
            //             fontSize:"12px",
            //         }
            //     }),
            // }),

        },
    },
];
const options = {
    sorting:true,
    print:false,
    download:false,
    filter:false,
    fixedHeader:true,
    caseSensitive:false,
    selectableRows:false,
    customSearch:false,
}

return (
    <div className="App">
    <h2>My Excel</h2>
    <input
      type="text"
      placeholder="Search clinics"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
    <div>
      {Object.keys(filteredData).map((sheetName) => (
        <div key={sheetName}>
          <h3>{sheetName}</h3>
          <table>
            <thead>
              <tr>
                <th>Clinic Name</th>
              </tr>
            </thead>
            <tbody>
              {filteredData[sheetName].map((clinic) => (
                <tr key={clinic.id}>
                  <td>{clinic.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
</div>
  )
}

export default ExcelImport;

