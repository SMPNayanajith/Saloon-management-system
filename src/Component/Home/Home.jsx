import React from 'react';

function Home() {
  return (
    <div>
      <div className=" overflow-hidden flex flex-col mt-3 items-center justify-center mx-auto">
        <h1 className="font-thin text-sm mt-3">SALOON ONE O ONE</h1>
        <h1 className="font-semibold font-sans text-3xl mt-4">How It Works !</h1>

      </div>
      <div>
        <img className=' opacity-15 ml-[-140px] mt-[-200px] ' src="https://s3-alpha-sig.figma.com/img/6bab/5c41/6ae69c8e4527c159d5161c121b86cf3e?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Af5rejnkctLEPza926nbY9EtMFx69H3qrdI5U-FWyKRfIAV4j0qYEn6nHfmzV7-Brc538u5IGwqCcqANTNhEPxs46dce6ZKm3XwzpwaOhR71qcI8TUNuzQlH5-iGmRmEqqkEyWHoDvnSwhU~Rq9PygoISL6fVoT~tcvwLDN4swSgwsjagBG~Q1QI8T-CNvLVfFvOse-IkR~wHn9FQW-8cS-97JdoWz5S~JmLZ9YRDDbWCDjZJ--yO3mS1x4NvPHJglmR8rnPhG-DAIU3VaWa2ICEjC4ggyGSHpS8Y3LdOXgcmCz806aDxv-VuGhg1C9RDnYNBriK8ePeGgKEBfc7DQ" alt="" />
        <div className='mt-[-280px] grid grid-cols-4 gap-5 ml-22'>
          <div className='flex flex-col items-center'>
            <img className='h-[148px] w-[120px] ' src="Images/image 3.png" alt=" " />
            <p className='mt-2'>Choose the service</p>
          </div>
          <div className='flex flex-col items-center'>
            <img className='h-[148px] w-[120px] ' src="Images/image 4.png" alt="" />
            <p className='mt-2'>Select your hair dresser</p>
          </div>
          <div className='flex flex-col items-center'>
            <img className='h-[148px] w-[120px] ' src="Images/image 5.png" alt="" />
            <p className='mt-2'>Find out your time </p>
          </div>
          <div className='flex flex-col items-center'>
            <img className='h-[148px] w-[120px] ' src="Images/image 6.png" alt="" />
            <p className='mt-2'>Lets grab your time</p>
          </div>
        </div>

        <div className='items-center justify-center flex mt-4 '>
          <button className='bg-black rounded-md p-2 text-white font-thin px-3' > BOOK NOW !</button>
        </div>

      </div>
      <div className="">
        <img
          className="w-full h-[95vh] object-cover object-top mt-5"
          src="https://s3-alpha-sig.figma.com/img/73d2/3e5f/6c39cf7ad9b7dc1a1d752f3c2dc41565?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ozZxJUr-V4sjovY8DPBsw56OEYfYnEVq16~yvi61faUzYVMcyIpG-t~pXcYKuSzsv6TkM3D3no4BAGwq7G48hDh3HNelgilW5sedzvGFxcBGINwqMn~CLIMN6fA8H1MQySd1ShmDydA7TZtH-vRzb~Wod90ON4o5~P8Em7yDfMzIsgjsCElbcKzwvo9X5E1PAXvQ~wVvkVTMAXS~NRRTzCEmOYl0aPsG6ciDKs8cuPdQZXWjOaH1kPlw42X4KbXk7CQ4Xk8bOAVy5EGl7eyVcgQNG-ookef5wwH8ymmTdffHfWU9z95pxbRvEp~1oG7~Awx42twD6Qqg421F0wzxpA__"
          alt=""
        />
      </div>
      <div className='flex flex-row w-full'>
        <div className='ml-28 mt-16 w-1/2'>
          <h1 className='font-thin text-sm'>OUR STORY</h1>
          <h1 className='font-medium text-xl my-2'>SALOON ONE O ONE</h1>
          <h1 className='font-thin text-md'>We understand the dedication it takes to achieve a magnificent beard.  That's why our passionate team, all beard aficionados themselves, is committed to providing you with the ultimate beard care experience.</h1>
          <h1 className='my-6 font-thin text-sm'>We utilize only the highest quality products, meticulously chosen to nourish, style, and tame your facial mane.
          <div className='mt-3'>
          <button className='bg-black  p-2 text-white font-thin px-3' > READ MORE </button>
          </div>
          </h1>
        </div>
        <div className='overflow-hidden'>
          <img className='h-screen opacity-15 mt-[-130px] ml-[330px] overflow-hidden ' src="https://s3-alpha-sig.figma.com/img/6bab/5c41/6ae69c8e4527c159d5161c121b86cf3e?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Af5rejnkctLEPza926nbY9EtMFx69H3qrdI5U-FWyKRfIAV4j0qYEn6nHfmzV7-Brc538u5IGwqCcqANTNhEPxs46dce6ZKm3XwzpwaOhR71qcI8TUNuzQlH5-iGmRmEqqkEyWHoDvnSwhU~Rq9PygoISL6fVoT~tcvwLDN4swSgwsjagBG~Q1QI8T-CNvLVfFvOse-IkR~wHn9FQW-8cS-97JdoWz5S~JmLZ9YRDDbWCDjZJ--yO3mS1x4NvPHJglmR8rnPhG-DAIU3VaWa2ICEjC4ggyGSHpS8Y3LdOXgcmCz806aDxv-VuGhg1C9RDnYNBriK8ePeGgKEBfc7DQ" alt="" />
        </div>
        
      
      </div>
      <div className=' '>
        <img className='w-screen  object-top h-[90vh] object-cover mt-[-150px] ' src="Images/education_bg.jpg.png" alt="" />
      </div>



    </div>
  );
}

export default Home;
