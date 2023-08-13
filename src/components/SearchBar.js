




export default function SearchBar({ SearchProp, setSearchProp,setCountryprop}) {

function handleSearch(event) {
    setSearchProp(event.target.value)
    console.log(SearchProp);
}


function HandleSubmit(event) {
  event.preventDefault();
  setCountryprop(SearchProp)
  setSearchProp("")
}


  return (


    <div>
    
    <form className='text-center '
    onSubmit={HandleSubmit}>
    <input type='search' placeholder='Country Name Here...'
    value={SearchProp}
    onChange={handleSearch}
    
    className=' w-3/4 h-12 text-lg bg-inherit font-extrabold rounded-lg p-4 placeholder-gray border-2 border-gray-500'/>
    </form>



    </div>


  )
}
