// this is only practice component 😎 
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    //wrap <Link> tag in <BrowserRouter> || <Router> tag 
    <section className=" bg-cyan-950 text-white p-4 text-center">
      <div className="flex justify-center items-center p-8">
        <picture>
          <img src="[Image URL]" alt="" />
        </picture>
      </div>
      <div className="sm:flex justify-center items-center gap-2">
        {
          ["Terms & Condition","Privacy Policy","Security","G-map"].map((e,i)=>{
            return(
            <div key={i} className="m-2">
              <Link to={e} className="">{e}</Link>
            </div>
            )
          })
        }
      </div>
      <div className="sm:grid sm:p-4 grid-cols-3 justify-center items-center">
        <div className="p-4">
          <p>@ 2000 Copyright : [companyName] Limited</p>
        </div>
        <div className="flex justify-center items-center gap-4 p-4">
          {
            ['[icon URL]','[icon URL]','[icon URL]'].map((e,i)=>{
              return(
                <img key={i} className="p-2" src={e} alt="" />
              )
            })
          }
        </div>
        <div className="">
          <select className="bg-cyan-950" name="" id="">
            {
              ["English","Hindi","Gujarati","[ADD more language, as you wish]"].map((e,i)=>{
                return(
                  <option key={i} value={e}>{e}</option>
                )
              })
            }
          </select>
        </div>
      </div>
    </section>
  )
}

export default Footer
