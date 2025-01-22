import React from 'react'

function AboutUs() {
  return (
    <section className="mt-10 p-6 rounded-lg shadow-lg">
  <div className="flex flex-col md:flex-row p-6 shadow-lg rounded-lg mb-6">
    <div className="md:w-2/3 flex flex-col justify-between">
      <div>
        <h3 className="text-2xl font-bold mb-4">
          <span className='text-black'>About </span>
          <span className='text-[#FFA229]'>Register Karo</span>
        </h3>
        <p className="text-lg mb-4 whitespace-pre-line text-[#4a4a4a]">
          We have been using Intelegencia as our DevOps vendor for our field service applications over the last couple of years 
          and I’m extremely pleased with their performance, ability to execute, and willingness to adapt in our ever changing 
          environment. Perry is an outstanding leader who is fanatical about customer satisfaction. He has built a solid team 
          which has consistently delivered on projects thereby exceeding everyone’s expectations.
          
          I would strongly recommend their services to any organization that is looking for solid, reliable, and predictable outcomes.
        </p>
      </div>
      <button className="bg-[#1C4670] text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600 transition ease-in-out duration-300 self-start">
        Learn More
      </button>
    </div>
    <div className="md:w-1/3 flex items-center justify-center relative">
      <img src="/Assets/aboutus-img.jfif" alt="About Register Karo" className="h-full z-10 w-full object-cover rounded-lg"/>
      <img className='absolute bottom-0 right-[-1rem] z-0 w-[4rem]' alt="dots" src='/Assets/aboutus-dots.png'/>
    </div>
  </div>
  <div className="mt-10 text-center">
    <p className='text-[#FFA229] mb-2'>WHY REGISTERKARO.IN </p>
    <h3 className="text-2xl font-bold mb-6">
      Why <span >Choose Register Karo</span>
    </h3>
    <h4 className="text-xl mb-6">
      It is with consistent services and results that build trust with the people and that in turn help us to serve the business better.
    </h4>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="flex flex-row items-center p-4 shadow-lg rounded-lg mb-6 bg-[#fef3ef]">
        <div className="flex-1 pr-4">
          <h4 className="text-lg font-semibold mb-2">Confidential & Safe</h4>
          <p className="text-sm text-gray-600">All your private information is safe with us.</p>
        </div>
        <div className="flex-shrink-0 text-xl bg-white p-2 rounded-full">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="text-orange-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z"></path>
          </svg>
        </div>
      </div>

      <div className="flex flex-row items-center p-4 shadow-lg rounded-lg mb-6 bg-[#F1FBF3]" >
        <div className="flex-1 pr-4">
          <h4 className="text-lg font-semibold mb-2">No Hidden Fee</h4>
          <p className="text-sm text-gray-600">Everything is put before you with no hidden charges or conditions.</p>
        </div>
        <div className="flex-shrink-0 text-xl bg-white p-2 rounded-full">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="text-green-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
          </svg>
        </div>
      </div>

      <div className="flex flex-row items-center p-4 shadow-lg rounded-lg mb-6 bg-[#edf3ff]">
        <div className="flex-1 pr-4">
          <h4 className="text-lg font-semibold mb-2">Guaranteed Satisfaction</h4>
          <p className="text-sm text-gray-600">We ensure that you stay 100% satisfied with our offered services.</p>
        </div>
        <div className="flex-shrink-0 text-xl bg-white p-2 rounded-full">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" className="text-blue-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm194.8 170.2C334.3 380.4 292.5 400 248 400s-86.3-19.6-114.8-53.8c-13.6-16.3 11-36.7 24.6-20.5 22.4 26.9 55.2 42.2 90.2 42.2s67.8-15.4 90.2-42.2c13.4-16.2 38.1 4.2 24.6 20.5z"></path>
          </svg>
        </div>
      </div>

      <div className="flex flex-row items-center p-4 shadow-lg rounded-lg mb-6 bg-[#fbf1fb]">
        <div className="flex-1 pr-4">
          <h4 className="text-lg font-semibold mb-2 text-black">Expert CA/CS Assistance</h4>
          <p className="text-sm text-gray-600">Prompt support from our in-house expert professionals.</p>
        </div>
        <div className="flex-shrink-0 text-xl bg-white p-2 rounded-full">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="text-red-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm95.8 32.6L272 480l-32-136 32-56h-96l32 56-32 136-47.8-191.4C56.9 292 0 350.3 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-72.1-56.9-130.4-128.2-133.8z"></path>
          </svg>
        </div>
      </div>

      <div className="flex flex-row items-center p-4 shadow-lg rounded-lg mb-6 bg-[#f7fcf9]" >
        <div className="flex-1 pr-4">
          <h4 className="text-lg font-semibold mb-2" >Confidential & Safe</h4>
          <p className="text-sm text-gray-600">All your private information is safe with us.</p>
        </div>
        <div className="flex-shrink-0 text-xl bg-white p-2 rounded-full">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="text-orange-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zM224 24c58.8 0 106 48.2 106 106v72H112v-72c0-58.8 48.2-106 106-106zm176 400c0 13.3-10.7 24-24 24H72c-13.3 0-24-10.7-24-24V272c0-13.3 10.7-24 24-24h24v64h280v-64h24c13.3 0 24 10.7 24 24v152z"></path>
          </svg>
        </div>
      </div>
    </div>
  </div>
  <div className="flex flex-col md:flex-row p-6 shadow-lg rounded-lg mb-6 bg-[#1c4670]">
    <div className="md:w-2/3 flex flex-col items-center justify-center">
      <div className=' w-[50rem] text-white'>
        <h3 className="text-2xl font-bold mb-2">Our Video Introductions</h3>
        <p className="text-lg mb-4 text-[#aab5cd]">Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna vulputate pellentesque a diam tincidunt apis dui.</p>
        <div className="flex items-center mb-4">
          <div className="mr-2 bg-[#ffa229] p-2 rounded-[50%] fill-white">
            <svg stroke-width="0" viewBox="0 0 352 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M96.06 454.35c.01 6.29 1.87 12.45 5.36 17.69l17.09 25.69a31.99 31.99 0 0 0 26.64 14.28h61.71a31.99 31.99 0 0 0 26.64-14.28l17.09-25.69a31.989 31.989 0 0 0 5.36-17.69l.04-38.35H96.01l.05 38.35zM0 176c0 44.37 16.45 84.85 43.56 115.78 16.52 18.85 42.36 58.23 52.21 91.45.04.26.07.52.11.78h160.24c.04-.26.07-.51.11-.78 9.85-33.22 35.69-72.6 52.21-91.45C335.55 260.85 352 220.37 352 176 352 78.61 272.91-.3 175.45 0 73.44.31 0 82.97 0 176zm176-80c-44.11 0-80 35.89-80 80 0 8.84-7.16 16-16 16s-16-7.16-16-16c0-61.76 50.24-112 112-112 8.84 0 16 7.16 16 16s-7.16 16-16 16z"></path></svg>
          </div>
          <div>
            <h4 className="font-semibold">Explore ideas together</h4>
            <p className="text-sm text-[#aab5cd]">Engage audience segments and finally create actionable insights. Amplify vertical integration.</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="mr-2 text-xl bg-[#ffa229] p-2 rounded-[50%] fill-white flex items-center justify-center">
            <svg stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M505.12019,19.09375c-1.18945-5.53125-6.65819-11-12.207-12.1875C460.716,0,435.507,0,410.40747,0,307.17523,0,245.26909,55.20312,199.05238,128H94.83772c-16.34763.01562-35.55658,11.875-42.88664,26.48438L2.51562,253.29688A28.4,28.4,0,0,0,0,264a24.00867,24.00867,0,0,0,24.00582,24H127.81618l-22.47457,22.46875c-11.36521,11.36133-12.99607,32.25781,0,45.25L156.24582,406.625c11.15623,11.1875,32.15619,13.15625,45.27726,0l22.47457-22.46875V488a24.00867,24.00867,0,0,0,24.00581,24,28.55934,28.55934,0,0,0,10.707-2.51562l98.72834-49.39063c14.62888-7.29687,26.50776-26.5,26.50776-42.85937V312.79688c72.59753-46.3125,128.03493-108.40626,128.03493-211.09376C512.07526,76.5,512.07526,51.29688,505.12019,19.09375ZM384.04033,168A40,40,0,1,1,424.05,128,40.02322,40.02322,0,0,1,384.04033,168Z"></path></svg>
          </div>
          <div>
            <h4 className="font-semibold">Bring those ideas to life</h4>
            <p className="text-sm text-[#aab5cd]">Engage audience segments and finally create actionable insights. Amplify vertical integration.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="md:w-1/3 flex items-center justify-center mt-6 md:mt-0">
    <iframe width="560" height="315" className='rounded' src="https://www.youtube.com/embed/_EyZUTDAH0U?si=bQS3_w3KgvwpFNIB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  </div>
</section>

  )
}

export default AboutUs
