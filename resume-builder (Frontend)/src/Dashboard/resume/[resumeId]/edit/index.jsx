import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom'
import FormSection from '../../components/FormSection';
import ResumePreview from '../../components/ResumePreview';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import { useState } from 'react';
import dummy from '@/data/dummy';

function EditResume() {
    const {resumeId}=useParams();
    const [resumeInfo,setResumeInfo]=useState();

    useEffect(()=>{
        setResumeInfo(dummy);
    },[])
  return (
    <ResumeInfoContext.Provider value={{resumeInfo,setResumeInfo}}>
    <div className='grid grid-cols-1 md:grid-cols-2 p-10 gap-10'>
      {/* Form section */}
     <FormSection />
     {/* Preview Section */}
     <ResumePreview />
    </div>
    </ResumeInfoContext.Provider> 
  )
}

export default EditResume
