import React, { useState } from 'react'
import { AiOutlineQuestionCircle } from "react-icons/ai";

import './App.css'
import ImageUploader from './ImageUploader'
const App = () => {

  const [text1, setText1] = useState('Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.')
  const [text2, setText2] = useState('I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...')

  return (
    <div className="flex h-screen bg-gray-900 text-white w-[1728px] h-[881px] bg-gradient-to-t from-[#191B1F] to-[#373E44] rounded-[28px] justify-center items-center" >
      {/* Empty left half */}
      <div className="right bg-[#616161] w-[836px] h-[689px] border-[1px] border-[#96BEE7] rounded-[27px] ml-4"></div>

      {/* Right half with the widgets */}
      <div className="w-1/2 flex flex-col justify-center items-center p-8 gap-5">
        
          <div id='tabs' className='shad w-[720px] h-[319px] bg-[#363C43] rounded-[18.89px] flex flex-col items-center p-5 gap-6'>
        
              <div className='bg-[#171717] w-[614px] h-[62px] rounded-[23px] flex gap-[6px] text-[#A3ADB2] justify-around'>
                
                    <button onClick={()=>(setText1('Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.'), setText2('I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...'))} className='btn pt-[10px] pb-[10px] pl-[24px] pr-[24px] font-[500] font-poppins '>About Me</button>
                
                    <button onClick={()=>(setText1(':)'), setText2(''))} className='btn pt-[10px] pb-[10px] pl-[24px] pr-[24px] font-[500] font-poppins'>Experiences</button>
                    <button onClick={()=>(setText1(':('), setText2(''))} className='btn pt-[10px] pb-[10px] pl-[24px] pr-[24px] font-[500] font-poppins'>Recommended</button>
              </div>
              <div className='px-9 flex flex-col gap-4 w-[680px] h-[205px]'>
                <p className='text-[#969696] font-[400] font-jakarta text-[20px]' >{text1}</p>
                <p className='text-[#969696] font-[400] font-jakarta text-[20px]'>{text2}</p>
              </div>
          </div>
          <div className='line bg-[#3e3e3e] h-[3px] w-[590px]'></div>
          <div id='gallery' className='shad w-[720px] h-[316px] bg-[#363C43] rounded-[18.89px] flex flex-col items-center  gap-6'>
              
              <ImageUploader/>
              
          </div>
          <div className='line bg-[#3e3e3e] h-[3px] w-[590px]'></div>
        </div>
    </div>
  )
}

export default App
