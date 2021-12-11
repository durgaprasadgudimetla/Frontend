import { red } from "@material-ui/core/colors";
import { DataGrid } from "@material-ui/data-grid";

const Datatable= props =>{

    const columns = [
        { field: 'id', headerName: 'ID', width: 170 },
        { field: 'name', headerName: 'NAME', width: 170 },
        { field: 'age', headerName: 'AGE', width: 170 },
      ];
        
      const rows = [
        { id: 1, name: 'Gourav', age: 12 },
        { id: 2, name: 'Geek', age: 43 },
        { id: 3, name: 'Pranav', age: 41 },
        { id: 4, name: 'Pranav', age: 41 },
        { id: 5, name: 'Pranav', age: 41 },
        { id: 6, name: 'Pranav', age: 41 },
        { id: 7, name: 'Pranav', age: 41 },
        { id: 8, name: 'Pranav', age: 41 },
        { id: 9, name: 'Pranav', age: 41 },
        { id: 10, name: 'Pranav', age: 41 },
        { id: 11, name: 'Pranav', age: 41 },
        { id: 12, name: 'Pranav', age: 41 }
      ];


    return (
        // <div style={{maxHeight:400,width:'100%'}}>
            <DataGrid   rows={rows} columns={columns} pageSize={10} checkboxSelection  style={{height:500,padding:15}}></DataGrid>
            
        // </div>
            
    
    );
}
export default Datatable;