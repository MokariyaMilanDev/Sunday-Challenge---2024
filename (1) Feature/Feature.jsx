import React from 'react'

const Feature_details = [
  {
    title: "Coder",
    iconUrl: "[url]",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, numquam reiciendis! Quasi unde reprehenderit officiis eum consectetur nisi quaerat, minima ipsa corrupti quibusdam in commodi nihil nemo ratione molestiae iusto.",
  },
  {
    title: "Tech Add",
    iconUrl: "[url]",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non repudiandae saepe nesciunt fugit vitae. Officia ut, tenetur obcaecati beatae labore numquam, tempore rerum dolorum nisi, laboriosam minus aliquam non blanditiis!",
  },
  {
    title: "Files",
    iconUrl: "[url]",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id repellat accusantium et sunt expedita repellendus eos! Facilis accusantium modi soluta minus illo voluptatum aliquid repellendus, quos earum exercitationem, laboriosam distinctio.",
  }
]

const Feature = () => {
  return (
  <section className="m-4 sm:m-8">
    <h1 className="text-2xl font-bold m-4">Feature Component</h1>
    <div className="p-2 grid gap-4 sm:grid-cols-3 sm:gap-8">
    {
      Feature_details.map((e,i)=>{
        return(
          <div className="border rounded shadow shadow-blue-50 p-4" key={i}>
            <div className="flex my-4 justify-center items-center">
              <div className="bg-blue-50 flex justify-center items-center h-20 w-20 p-4 rounded-full">
                <img className="h-10" src={e.iconUrl} alt="" />
              </div>
            </div>
            <h3 className="font-bold my-4 text-2xl text-center">{e.title}</h3>
            <span className="abc">{e.description}</span>
          </div>
        )
      })
    }
    </div>
  </section>
  )
}

export default Feature
