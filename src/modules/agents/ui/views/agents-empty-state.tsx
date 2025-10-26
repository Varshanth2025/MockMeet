
import {AlertCircleIcon} from "lucide-react"
import Image from "next/image";

interface Props{
    title:string;
    description:string;
}
<script src="https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js"></script>
export const EmptyState=({
    title,description
}:Props)=>{
    return (
        <div className="flex flex-col items-center justify-center">
                <Image src="/empty-agent-1.svg" alt="Empty" width={840} height={1040} />
                <div className="flex flex-col gap-y-6 max-w-md mx-auto text-center" >
                    <h6 className="text-lg font-medium" >{title}</h6>
                    <p className="text-sm text-muted-foreground ">{description}</p>
            </div>
        </div>
    )
}