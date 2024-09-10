import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import EducationalPreview from '@/dashboard/components/preview/EducationalPreview'
import ExperiencePreview from '@/dashboard/components/preview/ExperiencePreview'
import PersonalDetailPreview from '@/dashboard/components/preview/PersonalDetailPreview'
import SkillsPreview from '@/dashboard/components/preview/SkillsPreview'
import SummeryPreview from '@/dashboard/components/preview/SummeryPreview'
import React,{useContext} from 'react'

function ResumePreview() {
  const {resumeInfo,setResumeInfo}=useContext(ResumeInfoContext)
  return (
    <div className='shadow-lg h-full p-14 border-t-[20px]'
    style={{
        borderColor:resumeInfo?.themeColor
    }}>
      {/* Personal details */}
      <PersonalDetailPreview resumeInfo={resumeInfo}/>

      {/* Summary */}
      <SummeryPreview resumeInfo={resumeInfo} />

      {/* Professional preview */}
      <ExperiencePreview resumeInfo={resumeInfo} />

      {/* Edu  */}
      <EducationalPreview resumeInfo={resumeInfo} />

      {/* Skills */}
      <SkillsPreview resumeInfo={resumeInfo} />


    </div>
  )
}

export default ResumePreview
