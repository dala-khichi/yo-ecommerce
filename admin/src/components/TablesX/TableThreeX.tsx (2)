import TdImg from './TdImg';
import TebletAction from './TebletAction';
import TableTd from './TableTd';
import TableTh from './TableTh';
import { Package } from '../../types/package';
import { useEffect, useState } from 'react';
import Axios from "axios"
import { Link ,useParams} from 'react-router-dom';
import isImage from "../../common/Helper/IsImage"
import { toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';



const packageData: Package[] = [
  {
    name: 'Free package',
    price: 0.0,
    invoiceDate: `Jan 13,2023`,
    status: 'Paid',
  },
  {
    name: 'Standard Package',
    price: 59.0,
    invoiceDate: `Jan 13,2023`,
    status: 'Paid',
  },
  {
    name: 'Business Package',
    price: 99.0,
    invoiceDate: `Jan 13,2023`,
    status: 'Unpaid',
  },
  {
    name: 'Standard Package',
    price: 59.0,
    invoiceDate: `Jan 13,2023`,
    status: 'Pending',
  },
];



const TableThreeX = ({url}) => {
  
  
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);

  // Example: get a query param
  const pageNumber = queryParams.get('page')?queryParams.get('page'):1;
  
  
  
  
  
  
  
  const { id } = useParams();
       const data=[
    {
      id: 1,
      role_name: 'Admin',
      add_on: '2025-03-07T01:33:08.000Z',
      update_on: '2025-03-07T01:33:08.000Z'
    }
  ]
  const [updata, setUpdata] = useState(null);
  const [keyArryX, setKeyArryX] = useState([]);
    const [dataX, setDataX] = useState([]);
    const [loading, setLoading] = useState(null);
    
  useEffect(() => {
  const source = Axios.CancelToken.source();
  
  setLoading(true);
  Axios.get(url+"?page="+pageNumber, { cancelToken: source.token })
    .then((res) => {
      if (res.data.data && res.data.data.length > 0) {
        setKeyArryX(Object.keys(res.data.data[0]));
        setDataX(res.data.data);
      } else {
        toast.error("No data found");
        
        setDataX([]);
      }
    })
    .catch((err) => {
      if (!Axios.isCancel(err)) {
        toast.error("An error occurred while fetching data. Please try again.");
      }
    })
    .finally(() => {
      setLoading(false);
    });

  return () => {
    source.cancel("Component unmounted, request canceled.");
  };
}, [url, updata,pageNumber]);
    
 
 const delete_i = (id)=>{
   
   Axios.delete(url+id).then((res)=>{
     setUpdata(id)
         }).catch((err)=>{
           alert("err")
         })
 }
  
  
  
  

  useEffect(() => {
  var keyArry = Object.keys(data[0]);
  ///setKeyArryX(keyArry);
  //setDataX(data);

  }, [])
  useEffect(() => {
  setDataX([])


  }, [url,pageNumber])
  

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto ">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
             <TableTh  className={`min-w-[20px]`} text={"#"} />
            {keyArryX?.map((key,i)=>(
              <TableTh key={i} className={`min-w-[20px]`} text={key} />
                 ))}
             <th className="py-4 px-4 font-medium text-black dark:text-white">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {dataX.length>0?dataX?.map((packageItem, key) => (
                <tr key={key}>
                 <TableTd text_1={(Number(pageNumber) - 1) * 10 + (key + 1)} />
                  {keyArryX?.map((element, index) => (
                    typeof packageItem[element] === 'string' && isImage(packageItem[element])
                      ? <TdImg key={index} src={`/uploads/` + packageItem[element]  || "......loding" }  />
                      : <TableTd key={index} text_1={packageItem[element] || '-'} />
                  ))}
                  <TebletAction 
                    more_info_url={`display/${packageItem["id"]}`}
                    delete_url={() => delete_i(packageItem["id"])} 
                    update_url={`update/${packageItem["id"]}`} 
                    />
                </tr>
              )):"data not found"}
              
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableThreeX;
