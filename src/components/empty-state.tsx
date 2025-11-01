
import Image from "next/image";

interface Props{
    title:string;
    description:string;
    image?:string;
    w?:number;
    h?:number
}
export const EmptyState=({
    title,
    description,
    image="/create-Meet-3.svg",
    w=600,
    h=400
}:Props)=>{
    return (
        <div className="flex flex-col items-center justify-center">
<Image
  src={image}
  alt="Create Meet"
  width={w}
  height={h}
  style={{ height: "auto" }} 
  className="w-80"
  priority
/>
                <div className="flex flex-col gap-y-6 max-w-md mx-auto text-center" >
                    <h6 className="text-lg font-medium" >{title}</h6>
                    <p className="text-sm text-muted-foreground ">{description}</p>
            </div>
        </div>
    )
}