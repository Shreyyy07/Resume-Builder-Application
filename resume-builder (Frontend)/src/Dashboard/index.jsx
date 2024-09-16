// eslint-disable-next-line no-unused-vars
import React,{ useEffect, useState } from 'react'
import AddResume from './components/AddResume'
import { useUser } from '@clerk/clerk-react'
import GlobalApi from './../../service/GlobalApi'
import ResumeCardItem from './components/ResumeCardItem';

function dashboard() {

  const{user}=useUser();
  const [resumeList,setResumeList]=useState([]);

  useEffect(() => {
    if (user) {
      GetResumesList();
    }
  }, [user]);

  // used to get users resume list //

  const GetResumesList=()=>{
    GlobalApi.GetUserResumes(user?.primaryEmailAddress?.emailAddress)
      .then(resp=>{
        console.log(resp.data.data)
        setResumeList(resp.data.data || []);
      })
      .catch(error => {
        console.error('Error fetching resumes:', error);
        setResumeList([]);  // Set to empty array on error
      });
  };
  return (
    <div className='p-10 md:px-20 lg:px-32'>
      <h2 className='font-bold text-3xl'>My Resume</h2>
      <p>Build your own AI Resume</p>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-10 gap-5'>

        <AddResume/>

        {resumeList.length > 0 ? resumeList.map((resume) => (
          <ResumeCardItem resume={resume} key={resume.id || resume.someUniqueProperty} refreshData={GetResumesList} />
        )) :
        [1, 2, 3, 4].map((item, index) => (
          <div key={index} className='h-[280px] rounded-lg bg-slate-200 animate-pulse'>
          </div>
        ))
        }
      </div>
    </div>
  )
}

export default dashboard
