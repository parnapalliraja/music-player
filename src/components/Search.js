import React,{useState} from 'react'

function Search(props) {
  const [key, setKey] = useState("");

  const submithandler = (e) => {
    e.preventDefault();
    
    console.log('key = ',key)
    props.artistSearch(key);
  }

  return (
    <div className='row'>
        <div className='col-md-6 offset-md-3'>
            <div className='form-group mt-2 mb-2'>
                <div className='input-group'>
                    <input type="search" id='key' name='key' value={key} onChange={(e)=>setKey(e.target.value)} className='form-control' required />
                    <button onClick={submithandler} className='btn btn-outline-success' >Search</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Search