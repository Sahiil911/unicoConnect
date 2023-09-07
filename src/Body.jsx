import React from 'react';

const Body = () => {
  return (
    <div className='w-full grid grid-flow-row justify-center content-center'>
      <div>
        <h1 className='w-5/6 align-text-bottom text-6xl ml-48 font-bold p-20 text-white'>
          <span className='text-gray-400'>Transform your Ideas</span> into Stunning Products with Unico's Expert Team
        </h1>
      </div>
      <div className='text-center mx-auto'>
        <h1 className='w-4/6 text-3xl ml-32 text-white'>
          Build, Launch, and Scale your Products with Unmatched Efficiency
        </h1>
        <button className='bg-white p-3 my-6  text-black   hover:bg-cyan-500'>GET STARTED</button>
      </div>

      <div className=' w-3/6  ml-96 my-7 flex justify-between '>
       <div><img src='https://uploads-ssl.webflow.com/6203b6d57823100847efd9b1/64707a7fa93d52282e9c85b3_Group%20289531.svg' />
       <h2 className=' text-white' >Top Mobile App Developers
</h2></div>
       <div><img src='https://uploads-ssl.webflow.com/6203b6d57823100847efd9b1/64707a820d72f61b1a74629c_Group%20289530.svg'  />
       <h2 className=' text-white' >Expert in No code Web Development

</h2></div>
       <div className='' ><img src='https://uploads-ssl.webflow.com/6203b6d57823100847efd9b1/64707a826201b89f5f3a5cc6_Group%20289529.svg'  />
       <h2 className=' text-white' >Top Design Agency

</h2></div>
      </div>
    </div>
  );
};

export default Body;
