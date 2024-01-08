import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import MdOutlineAddBox from 'react-icons/md'


const Home = () => {
  return (
    <div className='p-4'>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Book List</h1>
        <Link to='/books/create'>
          <MdOutlineAddBox className="text-sky-800 text4xl" />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <table className="w-full  border-separate border-spacing-2">
          <thead>
            <tr>
              <th className='border border-slate-600 rounded-md'>No</th>
              <th className='border border-slate-600 rounded-md'>Title</th>
              <th className='border border-slate-600 rounded-md max-md:hidden'>Author</th>
              <th className='border border-slate-600 rounded-md max-md:hidden'>Publish Year</th>
              <th className='border border-slate-600 rounded-md'>Operations</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-700 rounded-md text-center">1</td>
              <td className="border border-slate-700 rounded-md text-center">Harry Poter</td>
              <td className="border border-slate-700 rounded-md text-center max-md:hidden">Jason Luu</td>
              <td className="border border-slate-700 rounded-md text-center max-md:hidden">1945</td>
              <td className="border border-slate-700 rounded-md text-center">
                <div className="flex justify-center gap-x-4">
                  <Link to={`/books/details/${book._id}`}>
                    <BsInfoCircle className="text-2xl text-green-800" />
                  </Link>
                  <Link to={`/books/edit/${book._id}`}>
                    <AiOutlineEdit className="text-2xl text-yellow-600" />
                  </Link>
                  <Link to={`/books/delete/${book._id}`}>
                    <MdOutlineDelete className="text-2xl text-red-600" />
                  </Link>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  )
}

export default Home