import React,{useState} from 'react'
import PersonalDetail from './forms/PersonalDetail'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight, Home, LayoutGrid } from 'lucide-react'
// import { Link, Navigate, useParams } from 'react-router-dom';
// import ThemeColor from './ThemeColor';

function FormSection() {
  const [activeFormIndex,setActiveFormIndex]=useState(1);
  const [enableNext,setEnableNext]=useState(true);
  // const {resumeId}=useParams();
  return (
    <div>
      <div className='flex justify-between items-center'>
        <Button variant="outline" size="sm"
           className='flex gap-5'>
            <LayoutGrid/>Theme</Button>
            {/* <Link to={"/dashboard"}>
          <Button><Home/></Button>
          </Link>
          <ThemeColor/> */}
          <div className='flex gap-2'>
            {activeFormIndex>1
            &&<Button size="sm" 
            onClick={()=>setActiveFormIndex(activeFormIndex-1)}> <ArrowLeft/> </Button> }
            <Button 
            disabled={!enableNext}
            className="flex gap-2" size="sm"
            onClick={()=>setActiveFormIndex(activeFormIndex+1)}
            > Next 
            <ArrowRight/> </Button>
          </div>
        </div>

      {/* Personal details */}
      {activeFormIndex==1 ?
       <PersonalDetail enabledNext={(v)=>setEnableNext(v)} />
      :null}
    </div>
  )
}

export default FormSection