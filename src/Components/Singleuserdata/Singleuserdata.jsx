import React from 'react'

const Singleuserdata = ({singleData}) => {
    const{name, phone, website,company,} = singleData;
    console.log(singleData)
  return (
    <div>

        <h1>{name}</h1>
        <p>{website}</p>
        <h3>{phone}</h3>
        <h4>company Name: {company.name} </h4>
        <span>{company.catchPhrase}</span>
    </div>
  )
}
export default Singleuserdata