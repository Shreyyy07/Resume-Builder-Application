import React,{useState} from 'react'
import { Notebook } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

function ResumeCardItem(resume) {
  return (
    <Link to={'/dashboard/resume/'+resume.resumeId+"/edit"}>
        <div className='p-14  bg-gradient-to-b from-indigo-400 from-10% via-sky-400 via-30% to-emerald-300 to-70% ...
          flex items-center justify-center
        h-[280px] rounded-t-lg border-t-4 gap-5'
        
        style={{
          borderColor:resume?.themeColor
        }}
        >
              <div className='flex 
        items-center justify-center h-[180px] '>
                {/* <Notebook/> */}
                <img src="/cv.png" width={80} height={80} />
              </div>
        </div>
        </Link>
  )
}

export default ResumeCardItem
