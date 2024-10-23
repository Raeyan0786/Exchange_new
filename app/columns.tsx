import { ColumnDef } from "@tanstack/react-table";
import type { CombinedExchangeData } from "./dashboard";
import TableHeader from "@/components/TableHeader";


export const columns: ColumnDef<CombinedExchangeData>[] = [
    // {
    //   header: ({ column }) => <TableHeader column={column} title='Account ID' />,
    //   accessorKey: 'name', // accessor is the "key" in the data
    // },
    {
      header: ({ column }) => <TableHeader column={column} title='EXCHANGES' />,
      accessorKey: 'icon',
      cell: (props) => (
        <div className="w-full flex items-center justify-center">
          <div className="w-[200px] max-w-[250px] flex gap-4 items-center justify-start">
          <img src={props.row.original.icon} alt="Icon" width="32" height="32" />
          <h1>{props.row.original.name}</h1>
          </div>
          
      
      </div>
    )
    ,
    },
    {
      header: ({ column }) => <TableHeader column={column} title='24H TRADE VOLUME' />,
      accessorKey:'volume_1day_usd',
      cell:(props)=>(
        <div className="flex justify-center items-center">
          {props.row.original.volume_1day_usd}
        </div>
      )
    }
  ]