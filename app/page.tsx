import Test from "./Test/page";
import data from "./lib/dummy-data";


export default function Home() {
  return (
       <div className=" flex justify-center gap-12" >
       {data.map((item) => 
       <Test key={item.id} id={item.id} />
      )}
       </div>

  );
}
