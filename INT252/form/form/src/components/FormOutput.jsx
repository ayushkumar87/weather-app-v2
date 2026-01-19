import React, { useContext } from 'react'
import MyContext from './MyContext';

const FormOutput = ( ) => {
  let { handleDelete , data} = useContext(MyContext)
    return (
        <>
            {data.map((value, index) => (
                <div key={index} className='bg-white p-5 border'>
                    <div className='bg-amber-900 text-white text-3xl p-3 flex justify-evenly items-center'>
                        <span className=''>{index + 1}</span>
                        <span className=''>{value.name}</span>
                        <span className=''>{value.regno}</span>
                        <span className=''>{value.cgpa}</span>
                        <button onClick={() => handleDelete(index)} className='bg-red-500 p-2 rounded'>Delete</button>

                    </div>

                </div>
            ))}
        </>
   
    );
};

export default FormOutput