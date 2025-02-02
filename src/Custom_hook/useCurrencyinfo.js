import { useEffect,useState } from "react";

const url='https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/'

const useCurrencyinfo = (currency) => {
    const [data,setData]=useState("");

   useEffect(() => {
    fetch(`$url${currency}.json`).then((res)=>res.json).then((res)=>setData(res[currency]))

   }, [currency])

   return data;

}

export default useCurrencyinfo;