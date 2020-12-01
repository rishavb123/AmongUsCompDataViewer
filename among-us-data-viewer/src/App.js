import React, { useState } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-dark.css';
import { Navbar } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

let rows = [];
let cols = [];

fetch('http://localhost:4000/data')
    .then(res => res.json())
    .then((data) => {
        cols = data.cols
        rows = data.rows;
    })
    .catch(console.log)

const App = () => {
    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);

    const [colDefs, setColDefs] = useState(cols);
    const [rowData, setRowData] = useState(rows);

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
                    {colDefs.map(def => <AgGridColumn field="def" sortable={true} filter={true} />)}
                    {/* <AgGridColumn field="make" sortable={true} filter={true}></AgGridColumn>
                    <AgGridColumn field="model" sortable={true} filter={true}></AgGridColumn>
                    <AgGridColumn field="price" sortable={true} filter={true}></AgGridColumn> */}
                </AgGridReact>
            </div>
        </>
    );
};

export default App;