import React, { useState } from 'react'
import Button from './Button'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import Modal from './Modal';
import { useGetData } from '../custom-hooks/FetchData';
import { server_calls } from '../api/server';
import Background from "../assets/images/truck.jpg"
const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90, hide: true },
    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'brand', headerName: 'Brand', flex: 1 },
    { field: 'size', headerName: 'Size', flex: 1 },
    { field: 'proof', headerName: 'Proof', flex: 2 },
    { field:'price', headerName: 'Price', flex: 2}
];

interface gridData {
    data: {
        id?: string
    }
};



export default function DataTable() {
    // We will write our OWN. HOOK. later
    // write functionality for populating our grid
    const [ open, setOpen ] = useState(false)
    const { contactData, getData } = useGetData();
    const [ selectionModel, setSelectionModel ] = useState<string[]>([])

    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    // add delete data function etc
    const deleteData = () => {
        server_calls.delete(selectionModel[0]);
        getData();
        console.log(`selection model: ${selectionModel}`)
        setTimeout( () => { window.location.reload() }, 500 )
    }

    return (
        <>
            <Modal
                id={ selectionModel }
                open={open}
                onClose={() => handleClose()}
            />
            <div className="flex flex-row">
                <div>
                    <Button
                        onClick={ handleOpen }
                        className="p-3 bg-slate-400 m-3 rounded hover:bg-slate-800 hover:text-white"
                    >
                        Add new whisky
                    </Button>
                </div>
            <Button onClick={ handleOpen } className="p-3 bg-slate-400 m-3 rounded hover:bg-slate-800 hover:text-white">Update</Button>
            <Button onClick={ deleteData } className="p-3 bg-slate-400 m-3 rounded hover:bg-slate-800 hover:text-white">Delete</Button>
            </div>
            <div
                className={ open ? "hidden" : "container mx-5 my-5 flex flex-col"}
                style={{ height: 400, width: '100%' }}
            >
                <h2 className='p-3 bg-slate-800 my-2 rounded text-white'>my whiskey</h2>
                <DataGrid className='bg-slate-300 text-white flex rounded'rows={ contactData } columns={ columns } 
                rowsPerPageOptions={ [5] } checkboxSelection={true}
                onSelectionModelChange={ (item:any) => {
                    setSelectionModel(item)
                }}
                />
            </div>
           
      
          
       

            
        </>
    )
}