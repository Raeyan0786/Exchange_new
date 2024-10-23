"use client";
import React, { useState, useEffect, useMemo, useCallback } from "react";
import { useRouter } from "next/navigation";
import ReactPaginate from 'react-paginate';
import { DataTable } from "@/components/Table/data-table";
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { columns } from "./columns";
import PriceRange from "./PriceRange";
import { Navbar } from "@/components";

interface Exchange {
    exchange_id: string;
    name: string;
    website: string;
    volume_1day_usd: number;
  }
  
  
  export interface ExChangeType {
    exchange_id: string;
    website: string;
    name: string;
    data_quote_start: string;
    data_quote_end: string;
    data_orderbook_start: string;
    data_orderbook_end: string;
    data_trade_start: string;
    data_trade_end: string;
    data_symbols_count: number;
    volume_1hrs_usd: number;
    volume_1day_usd: number;
    volume_1mth_usd: number;
    metric_id?: string[];
  }
  
  export interface Icon {
    exchange_id: string;
    url: string;
  }
  
  export interface CombinedExchangeData {
    exchange_id: string;
    name: string;
    icon: string | null;
    website: string;
    volume_1day_usd: number;
  }

const Dashboard = props => {

    const router = useRouter();
  const [selectedcountry, setSelectedCountry] = useState<number>();
  const [exchanges, setExchanges] = useState<Exchange[]>([]);
  const [filterExchanges, setFilterExchanges] = useState<Exchange[]>([]);
  const [icons, setIcons] = useState<Icon[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [search, setSearch] = useState('');
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isShow, setIsShow] = useState(true);
  const [volumeRange, setVolumeRange] = useState<[number, number]>([0, 10000000]);
  const itemsPerPage = 10; 

  useEffect(() => {
    const filteredExchanges = exchanges.filter(
      (exchange) =>
        exchange.volume_1day_usd >= volumeRange[0] &&
        exchange.volume_1day_usd <= volumeRange[1]
      
    );
    setFilterExchanges(filteredExchanges);
  }, [volumeRange,setVolumeRange]);

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`https://rest.coinapi.io/v1/exchanges?filter_exchange_id=${search}`, {
          headers: {
            'X-CoinAPI-Key': '80705f1f-34e9-4b0a-b31e-0a2333136d87' // Add your CoinAPI key here
          }
        });
        const data = await response.json();
      const formattedItems = data.map((exchange: any) => ({
        id: exchange.exchange_id,
        name: exchange.name,
      }));
      setItems(formattedItems);
        setExchanges(data);
      } catch (error) {
        console.error('Error fetching exchanges:', error);
      }
      finally{
        setIsLoading(false)
      }
    };

    const fetchIcons = async () => {
      try {
        const response = await fetch('https://rest.coinapi.io/v1/exchanges/icons/32', {
          headers: {
            'X-CoinAPI-Key': '80705f1f-34e9-4b0a-b31e-0a2333136d87'
          }
        });
        const data = await response.json();
        setIcons(data);
      } catch (error) {
        console.error('Error fetching icons:', error);
      }
    };

      fetchExchanges();

    fetchIcons(); 

  }, [,search,filterExchanges]);

  const exchangeData:CombinedExchangeData[] = useMemo(() => {
    const iconMap = new Map<string, string>(
      icons.map(icon => [icon.exchange_id, icon.url])
    );
    return exchanges.map(exchange => ({
      exchange_id: exchange.exchange_id,
      name: exchange.name,
      icon: iconMap.get(exchange.exchange_id) || null,
      website: exchange.website,
      volume_1day_usd: exchange.volume_1day_usd
    }));
  }, [exchanges, icons]);

  const filterData:CombinedExchangeData[] = useMemo(() => {
    const iconMap = new Map<string, string>(
      icons.map(icon => [icon.exchange_id, icon.url])
    );
    return filterExchanges.map(exchange => ({
      exchange_id: exchange.exchange_id,
      name: exchange.name,
      icon: iconMap.get(exchange.exchange_id) || null,
      website: exchange.website,
      volume_1day_usd: exchange.volume_1day_usd
    }));
  }, [icons,filterExchanges]);

  const handleOnSelect = (item: any) => {
    setSearch((item.name))
    setIsShow(false)
  };

  const handleOnSearch = (string: string) => {
    if(string.length==0){
      setSearch("")
    }
    setIsShow(false)
  };

  const pageCount = Math.ceil(exchangeData.length / itemsPerPage);
  const filterCount=Math.ceil(filterData.length / itemsPerPage);
  const currentData = exchangeData.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);
  const currentFilter=filterData.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);
  const searchData=exchangeData.filter((item)=> item.exchange_id.toLowerCase()==search.toLowerCase())


  console.log("current")
  console.log(currentFilter)

  console.log("volumn")
  console.log(volumeRange)

  console.log("exchange")
  console.log(exchanges)

  return (
    <div>
      
  <div className="w-full flex justify-center border-b-gray-300 border-b-2">
    <div>
    <h1 className="font-semibold text-xl leading-4 text-blue-500 py-4">Exchanges</h1>
    <div className="border-b-4 border-b-blue-500"></div>
    </div>
  
  </div>

<div className="w-[400px] mx-auto my-10">
  
        <ReactSearchAutocomplete
          items={items}
          onSearch={handleOnSearch}
          onSelect={handleOnSelect}
          autoFocus
          placeholder="Search for exchanges"
          // formatResult={(item) => <span>{item.name}</span>} // Customize auto-complete item display
          inputDebounce={500}
          onClear={()=> {setSearch("")
            setTimeout(()=>{
              setIsShow(true);
            },1000)
          }}
          
          
        />
      </div>
      <div className="flex justify-end">
        <div className="w-[200px] pr-8 pb-8">
        <PriceRange volumeRange={volumeRange} setVolumeRange={setVolumeRange}/>
        </div>
      
      </div>
      <div>
      {currentFilter.length>0 ? (
   <DataTable columns={columns} data={search?searchData:currentFilter} isLoading={isLoading}/>
):(
  <DataTable columns={columns} data={search?searchData:currentData} isLoading={isLoading}/>
)}
      </div>


     
      {isShow && (
        <div className="mt-8 ml-8">

            <ReactPaginate
            previousLabel={'< Previous'}
            nextLabel={'Next >'}
            pageCount={currentFilter.length>0?filterCount:pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={4}
            onPageChange={(selected) => setCurrentPage(selected.selected)}
            pageClassName='min-w-[2rem] p-[0.625rem] py-1 border border-gray-400 rounded-lg text-sm text-center'
            pageLinkClassName='page-link'
            nextClassName='text-sm font-medium'
            nextLinkClassName={`${
             (currentFilter.length>0?filterCount: pageCount) === currentPage + 1
                ? 'text-[#696767] pointer-events-none	cursor-not-allowed bg-gray-400'
                : 'bg-blue-500'
            } text-sm font-medium text-white px-[1.5rem] py-[0.55rem] bg-blue-500 rounded-full`}
            breakClassName='text-sm font-medium'
            breakLinkClassName='page-link'
            containerClassName='flex items-center justify-center gap-[0.4375rem] pl-8'
            activeClassName='bg-blue-700 text-white border-none'
            renderOnZeroPageCount={null}
            previousLinkClassName={`${
              (currentFilter.length>0?filterCount: pageCount) === 0
                ? 'text-[#696767] pointer-events-none cursor-not-allowed bg-gray-400'
                : ' bg-blue-500'
            } text-sm font-medium text-white px-[1.5rem] py-[0.55rem]  rounded-full`}
          />
        
        
      </div>
      )}
      
    </div>
  )
}



export default Dashboard