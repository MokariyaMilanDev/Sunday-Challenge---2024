import React from 'react'

// sample details of pricing
const Pricing_details = [
  {
    price : "Free",
    iconURL : "[icon url]",
    level : "Basic",
    time : "",
    decription : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur",
    Feature : [
      {
        name : "One",
        available : true
      },
      {
        name : "Two",
        available : true
      },
      {
        name : "Three",
        available : true
      },
      {
        name : "Four",
        available : true
      },
      {
        name : "Five",
        available : false
      },
      {
        name : "Six",
        available : false
      },
      {
        name : "Seven",
        available : false
      }
    ]
  },
  {
    price : "$99",
    iconURL : "[icon url]",
    level : "Pro",
    time : "/per Month",
    decription : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur",
    Feature : [
      {
        name : "One",
        available : true
      },
      {
        name : "Two",
        available : true
      },
      {
        name : "Three",
        available : true
      },
      {
        name : "Four",
        available : true
      },
      {
        name : "Five",
        available : true
      },
      {
        name : "Six",
        available : true
      },
      {
        name : "Seven",
        available : false
      },
      {
        name : "Eight",
        available : false
      },
      {
        name : "Nine",
        available : false
      }
    ]
  },
  {
    price : "$199",
    iconURL : "[icon url]",
    level : "Ultimate",
    time : "/per Month",
    decription : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur",
    Feature : [
      {
        name : "One",
        available : true
      },
      {
        name : "Two",
        available : true
      },
      {
        name : "Three",
        available : true
      },
      {
        name : "Four",
        available : true
      },
      {
        name : "Five",
        available : true
      },
      {
        name : "Six",
        available : true
      },
      {
        name : "Seven",
        available : true
      },
      {
        name : "Eight",
        available : false
      }
    ]
  }
]

const Pricing = () => {
  return ( 
    <section className="p-4 md:mx-16">
      <h1 className="text-2xl font-bold m-4">Pricing</h1>
      <div className="p-2 grid gap-4 sm:grid-cols-3 sm:gap-8">
        {
          Pricing_details.map((e,i)=>{
            return(
              <div className="border p-4 flex justify-center rounded shadow-md h-fit">
                <div className="w-full">
                  <div className="w-full grid gap-2 items-cente">
                    <div className="grid ga-2 bg-blue-100 justify-center p-4 rounded">
                      <img className="h-16 w-16" src={e.iconURL} alt="" />
                    </div>
                    <p className="font-bold text-center bg-blue-50 p-4 rounded">{e.level}</p>
                  </div>
                  <div className="flex items-end my-4">
                    <h1 className=" text-2xl font-bold">{e.price}</h1>
                    <p className="text-sm mx-1">{e.time}</p> 
                  </div>
                  <ul className="my-4">
                    {
                    e.Feature.map((e,i)=>{
                      return(
                        
                        <div className="flex items-center">
                          {
                            e.available === true ? <img className="h-4 w-4 my-2" src="[icon url]" alt="" />:<img className="h-4 w-4 my-2" src="[icon url]" alt="" />
                          }
                          <li>{e.name}</li>
                        </div>
                      )
                    })
                  }
                  </ul>
                  <div className="flex justify-center items-center">
                    <button className="h-full w-full bg-blue-400 text-white p-2 rounded">Get Start</button>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Pricing
