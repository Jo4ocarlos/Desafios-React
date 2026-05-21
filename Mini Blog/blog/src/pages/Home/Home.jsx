//hooks
import {useNavigate, Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
// components
import Posts from '../../components/Posts/Posts'

const Home = ()=>{

    return(
        <div>
            <Posts/>
        </div>
    )
}

export default Home;