import React, { useState } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-dark.css';
import { Navbar } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);

    const [rowData, setRowData] = useState([
        {make: "Toyota", model: "Celica", price: 35000},
        {make: "Ford", model: "Mondeo", price: 32000},
        {make: "Porsche", model: "Boxter", price: 72000},
        {make: "Porsche", model: "Boxter", price: 72000},
        {make: "Porsche", model: "Boxter", price: 72000},
        {make: "Porsche", model: "Boxter", price: 72000},
        {make: "Porsche", model: "Boxter", price: 72000},
        {make: "Porsche", model: "Boxter", price: 72000},
        {make: "Porsche", model: "Boxter", price: 72000},
        {make: "Porsche", model: "Boxter", price: 72000},
        {make: "Porsche", model: "Boxter", price: 72000},
        {make: "Porsche", model: "Boxter", price: 72000},
        {make: "Porsche", model: "Boxter", price: 72000}
    ]);

    return (
        <>
            <Navbar bg="dark" variant="dark" style={{
                height: Math.floor(window.innerHeight / 15)
            }}>
                <Navbar.Brand>Among Us: Competitive</Navbar.Brand>
            </Navbar>
            <div className="ag-theme-dark" style={{ 
                width: window.innerWidth, 
                height: Math.floor(window.innerHeight * 14 / 15)
            }}>
                <AgGridReact
                    animateRows={true}
                    enableCellChangeFlash={true}
                    getRowNodeId={ data => data.make }
                    onGridReady={
                        params => {
                            setGridApi(params.api);
                            setGridColumnApi(params.columnApi);
                        }
                    }
                    rowData={rowData}>
                    <AgGridColumn field="make" sortable={true} filter={true}></AgGridColumn>
                    <AgGridColumn field="model" sortable={true} filter={true}></AgGridColumn>
                    <AgGridColumn field="price" sortable={true} filter={true}></AgGridColumn>
                </AgGridReact>
            </div>
        </>
    );
};

export default App;