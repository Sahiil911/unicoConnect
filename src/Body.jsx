import React from 'react';

const Body = () => {
  return (
    <div className='w-full m-auto grid grid-flow-row justify-center content-center'>
      <div>
        <h1 className='w-5/6 align-text-bottom text-6xl m-auto font-bold p-20 text-white text-center '>
          <span className='text-gray-400'>Transform your Ideas</span> into Stunning Products with Unico's Expert Team
        </h1>
      </div>
      <div className='text-center mx-auto'>
        <h1 className='w-4/6 text-3xl m-auto text-white'>
          Build, Launch, and Scale your Products with Unmatched Efficiency
        </h1>
        <button className='bg-white p-3 my-6  text-black   hover:bg-cyan-500'>GET STARTED</button>
      </div>

      <div className='  w-4/6 my-7 m-auto flex justify-between '>
       <div className=' flex flex-col content-center'>
        <img className=' w-1/2 h-12 ml-11' src='https://uploads-ssl.webflow.com/6203b6d57823100847efd9b1/64707a7fa93d52282e9c85b3_Group%20289531.svg' />
       <h2 style={{border:"1px solid white",padding:"2%",width:"100%",borderRadius:"25px"}} className=' text-white text-center mt-5' >Top Mobile App Developers</h2>

</div>
       <div className=' flex flex-col content-center' ><img className=' w-1/2 h-12 ml-10 '  src='https://uploads-ssl.webflow.com/6203b6d57823100847efd9b1/64707a820d72f61b1a74629c_Group%20289530.svg'  />
       <h2 className=' text-white text-center mt-5 ' style={{border:"1px solid white",padding:"2%",width:"100%",borderRadius:"25px"}}  >Expert in No code Web Development</h2>

       </div>
       <div className=' flex flex-col content-center' ><img className=' w-1/2 h-12 ml-5' src='https://uploads-ssl.webflow.com/6203b6d57823100847efd9b1/64707a826201b89f5f3a5cc6_Group%20289529.svg'  />
       <h2 className=' text-white text-center mt-5 ' style={{border:"1px solid white",padding:"2%",width:"100%",borderRadius:"25px"}} >Top Design Agency</h2>

       </div>

      </div>
    </div>
  );
};

export default Body;
