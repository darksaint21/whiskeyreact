import {useEffect, useState} from 'react'
import { server_calls } from '../api/server';

export const useGetData = () => {
    const[contactData, setData]= useState<[]>([])

    async function handleDataFetch(){
        const result = await server_calls.get();
        setData(result)
    }

    // useeffect on mount
    useEffect( ()=>{
        handleDataFetch();
    }, [])// with nothing will accurr ever time with [] will happen when needed 
    return { contactData, getData:handleDataFetch}
}