import React from 'react'
import { ReactFlowDiagram } from "../components/FlowDiagram";

const backendfeatures = [
  `The API comes with the latest tech Stack (node js, express js, and MongoDB) It comes with robust CRUD operations`,

  `Has in build functionality of image upload and mapping the image to correct fields in DB (MongoDB) also saves the image in API folder with managed names as per entity`,

  `comes with an option for you to create a flow of authentication so dynamic that you chose the payload and what you want in token the login API endpoint is created with JSON web token. Even you can decide which other entities should apply authentication as in the video above`,

  `the code is as simple as it looks, and every file is customizable for you to insert your unique business logic`,

]
const frontendFeatures = [
  `The web application comes with again a trending library (react js). Comes with robust yet very dynamic and decupled react forms for creating and edit`,
  `the list view is under active development currently, it has pagination and searching functionality in it`,
  `The data is not some fake data. It has integration with the generated API`,
  `Some great packages are already implemented like redux redux-saga for state management`,
  `No Class Component Everything is built using react hooks and a promise always to be updated`,
]
export default function index() {
  return (
    <>
      <div className='flex  sm:flex-row flex-col p-8 py-32 justify-evenly items-center'>

        <div className=' rounded-lg relative border-gray-800  px-8 py-16'>

          <p className='font-body text-sm absolute -top-5  text-white rounded-md bg-indigo-900 inline px-4 py-2'>

            The Docs Are Still Under Development</p>

          <h1 className='font-Heading text-6xl mt-6 text-gray-900'>Smartcodehub</h1>
          <p className='font-Heading text-3xl mt-4 text-gray-800'>Opensource Web Based Full Stack Web Application Generator</p>
      
        </div>
        <div className='sm:w-2/3 w-full'>
          <ReactFlowDiagram />
        </div>
      </div>
      <section className=' p-16 w-full'>
        <p className='prose prose-lg  my-8'> SmartCodeHub is a platform where you can quickly create a fully functional and highly customizable full-stack application. and it's not just a boilerplate it has some fantastic features as discussed below. Before going forward, please see this small video to get an idea of what SmartCodeHub can do. I bet that it will be worth it if you are a javascript developer

          some features of the application generated by smartcodehub are :

          Node Express API.</p>
          <div className='w-2/3  items-center justify-center'>
          <div class="aspect-w-16 aspect-h-9 rounded">
  <iframe className='rounded-lg' src="https://www.youtube.com/embed/kA6yMPhfztk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
          </div>
        
        <div>
          <h1 className='prose my-8 prose-2xl'>Backend Features</h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-full gap-4'>
            {backendfeatures.map((a, i) => {
              return <div className='border border-gray-700 rounded-lg shadow-xl'>
                <p className='text-lg text-gray-500 w-full  rounded-lg p-5'>{i + 1}. {a}</p>
              </div>
            })}
          </div>
        </div>
        <div>
          <h1 className='prose my-8 prose-2xl'>Frontend Features</h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-full gap-4'>
            {frontendFeatures.map((a, i) => {
              return <div className='border border-gray-700 rounded-lg shadow-xl'>
                <p className='text-lg text-gray-500 w-full  rounded-lg p-5'>{i + 1}. {a}</p>
              </div>
            })}
          </div>
        </div>
        <div>
          <h1 className='prose my-8 prose-2xl'>Vision.</h1>
          <p className='text-lg text-gray-500 w-full   rounded-lg p-5'>
            Currently, it provides backend in Node and mongo DB. By the end of this year, we will try to give full API in .net core, python, and go. And frontend in angular, lit-element, vue, and blazer directly from your UI.
          </p>
        </div>




      </section>
    </>
  )
}
