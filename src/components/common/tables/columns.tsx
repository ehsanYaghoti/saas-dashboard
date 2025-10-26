import { Switch } from "@/components/ui/switch";
import { type ColumnDef } from "@tanstack/react-table";


export type Products = {
    id : string
    title : string
    totalBuyers : number
    price : number
    stock : number
    rating : number
    status : boolean
}


export const columns : ColumnDef<Products>[] = [
    {
        accessorKey : 'title',
        header : "Product"
    },
    {
        accessorKey : "totalBuyers",
        header : "Total Buyers",
        cell : ({row}) => {
            return <div className=" text-center font-bold " >{row.getValue('stock')}</div>
        }
    },
    {
        accessorKey : "price",
        header : () => <div className="text-left">Price</div>,
        cell : ({row}) => {
            const price = parseFloat(row.getValue("price"))
            const formatted = new Intl.NumberFormat("en-US" , {
                style : "currency",
                currency : "USD",
            }).format(price)

            return <div className=" text-center font-bold " >{formatted}</div>
        }
    },
    {
        accessorKey : "stock",
        header : "Stock",
        cell : ({row}) => {
            return <div className=" text-center font-bold " >{row.getValue('stock')}</div>
        }
    },
    {
        accessorKey : "rating",
        header : "Rating"
    },
    {
        accessorKey : "status",
        header : "status",
        cell : ({row}) => {
            const product = row.original;
            console.log(product);

            return (
                <div className="flex items-center gap-2" >
                    <Switch />
                    <span>Active</span>
                </div>
            )
        }
    }
]
