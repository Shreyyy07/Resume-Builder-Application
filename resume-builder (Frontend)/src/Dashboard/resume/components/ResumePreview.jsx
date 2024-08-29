import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import EducationalPreview from '@/Dashboard/components/preview/EducationalPreview'
import ExperiencePreview from '@/Dashboard/components/preview/ExperiencePreview'
import PersonalDetailPreview from '@/Dashboard/components/preview/PersonalDetailPreview'
import SkillsPreview from '@/Dashboard/components/preview/SkillsPreview'
import SummeryPreview from '@/Dashboard/components/preview/SummeryPreview'
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
