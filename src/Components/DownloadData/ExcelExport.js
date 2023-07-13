import * as FileSaver from "file-saver";
import XLSX from "sheetjs-style";
import { toast } from "react-toastify";

const ExportExcel = ({ excelData, fileName }) => {
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";

  const exportToExcel = async () => {
    const ws = XLSX.utils.json_to_sheet(excelData);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const BigData = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(BigData, fileName + fileExtension);
    toast.success("Download Success",  {
        autoClose: "3000",
        position: "bottom-right",
    })
    
    
  };

  return (
    <>

      <button variant="contained" onClick={exportToExcel} type="button" class="btn btn-primary btn-sm">Export To Excel</button>
    </>
  );
};

export default ExportExcel;
