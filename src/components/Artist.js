import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import Track from './Track';


function Artist(props) {
    const [curItems, setCurItems] = useState([]);
    const [pCount, setpCount] = useState(0);
    const [off, setOff] = useState(0);

    useEffect(()=>{
        const endOff = off + props.itemCount;
        setpCount(Math.ceil(props.artistInfo.length / props.itemCount))
        setCurItems(props.artistInfo.slice(off, endOff))

    }, [off, props.itemCount, props.artistInfo])

    const handleClick = (event, value)=>{
        const newOff =    (event.selected * props.itemCount) % (props.artistInfo.length);
        setOff(newOff)
    }

  return (
    <div className='row'>
        <div className='col-md-12'>
            <div className='table-responsive'>
                <div className='table table-bodered table-stripped'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Genres</th>
                            <th>Popularity</th>
                            <th>followers</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                           curItems && curItems.map((item,index)=>{
                                let { id, name, type, genres, popularity,followers} = item;
                                return(
                                    <tr className='text-center' key={index}>
                                        <td>{name}</td>
                                        <td>{type}</td>
                                        <td>{
                                            genres.map((item,index) =>{
                                                return <span key={index} className="badge bg-success">{item}</span>
                                            })
                                        }
                                        </td>
                                        <td>{popularity}</td>
                                        <td>{followers.total}</td>
                                        <td><NavLink to={`/tracks/${id}`} className="btn btn-warning">Tracks</NavLink></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="6">
                            <ReactPaginate 
                            pageCount={pCount}
                            onPageChange={handleClick}
                            className="pagination justify-content-center"
                            pageClassName='page-item'
                            pageLinkClassName='page-link'
                            activeClassName='page-item'
                            activeLinkClassName='active'
                            previousClassName='page-item'
                            previousLinkClassName='page-link'
                            nextClassName='page-item'
                            nextLinkClassName='page-link'
                        />  
                            </td>
                        </tr>

                    </tfoot>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Artist