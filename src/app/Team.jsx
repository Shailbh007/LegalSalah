import React from 'react'
import Navbar from '../componets/Navbar'
import Footer from '../componets/Footer'
const lawyers = [
    {
      id:1,
      name: 'John Doe',
      imageSrc: 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      imageAlt: 'John Doe',
      href: '#',
      description: [
        "The Senior consultant at LegalHire",
      ],
  
    },
    {
      id:2,
      name: 'John Doe',
      imageSrc: 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      imageAlt: 'John Doe',
      href: '#',
      description: [
        "The Senior consultant at LegalHire",
      ],
  
    },
    {
      id:3,
      name: 'John Doe',
      imageSrc: 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      imageAlt: 'John Doe',
      href: '#',
      description: [
        "The Senior consultant at LegalHire",
      ],
  
    },
    
    
    // More products...
  ]

export default function Team() {
  
  return (
    <>
    <Navbar/>
    <div>
       <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Experts from LegalHire</h2>
        
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 px-5 py-10 sm:grid-cols-1 lg:grid-cols-4 l:gap-x-8">
          {lawyers.map((lawyer) => (
            <div key={lawyer.id} className="group relative">
              <div className="aspect-h-4 aspect-w-4 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-50">
                <img
                  src={lawyer.imageSrc}
                  alt={lawyer.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={lawyer.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {lawyer.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{lawyer.description}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{lawyer.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div> 
    <Footer/>
    </>
  )
}
