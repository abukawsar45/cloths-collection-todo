import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const ProductDetails = () => {

  const productData = useLoaderData();
  console.log(productData);

  const {id: serachId} = useParams();
  console.log(serachId)


  const job = {};

  const {
    _id,
    name,
    category,
    img,
    price,
    quantity,
    ratings,
    ratingsCount,
    seller,
    spipping,
    stock
  } = {};

  const {
    
    companyLogo,
    jobTitle,
    companyName,
    remoteOrOnsite,
    location,
    typeOfJob,
    salary,
    jobDescription,
    jobResponsibility,
    educationalRequirements,
    experiences,
    contactInformation,
  } = job;

  return (
    <div className='flex flex-col md:flex-row justify-center border-2 border-lime-100 bg-slate-50 w-auto gap-2 md:gap-6 p-2 md:p-6 md:mx-36 rounded-sm'>
      <img src={companyLogo} className='w-48 h-48  rounded-md me-6 ' alt='' />
      <div className='flex flex-col md:flex-row justify-between items-center w-4/6'>
        <div className='flex flex-col justify-center w-4/6 '>
          <h2 className='text-2xl font-semibold'>{jobTitle} </h2>
          <h4 className='text-xl text-red-500'>{companyName} </h4>
          <div className='flex gap-9'>
            <button className='my-btn-one'>{remoteOrOnsite} </button>
            <button className='my-btn-one'>{typeOfJob} </button>
          </div>
          <div className='flex gap-6'>
            <p className='flex items-center gap-1 text-neutral-600'>
              <span>
              assistant
              </span>
              {location}{' '}
            </p>
            <p className='flex items-center gap-1 text-neutral-600'>
              <span>
                assistant2
              </span>{' '}
              Salary: {salary}{' '}
            </p>
          </div>
        </div>
        <div className='flex justify-end'>
          <Link to={`/jobdetails/${_id}`}>
            {' '}
            <button className='button-linear2 mt-4 md:mt-6 mb-3 mb:mb-0'>
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;