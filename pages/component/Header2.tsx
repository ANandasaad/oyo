

const Header2 = () => {
    const List=[{
        name:"Delhi"
    },{
        name:"Mumbai"
    },{
        name:"Hyderabad"
    },{
        name:"Chennai"
    },{
        name:"Bangalore"
    },{
        name:"Gurgaon"
    },{
        name:"Kolkata"
    },{
        name:"Noida"
    },{
        name:"Pune"
    },{
        name:"All Cities"
    }]
  return (
    <div>
      <div className="flex justify-between bg-gray-100 px-20 py-3">
       {List.map((item)=>{
        return (<span key={item.name}>{item.name}</span>)
       })}
      </div>
    </div>
  )
}

export default Header2
