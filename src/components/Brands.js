import React, {useEffect} from 'react'
import axios from 'axios'
import apple from '../assets/images/services/apple.png'
import samsung from '../assets/images/services/samsung.png'
import asus from '../assets/images/services/Asus-Logo.jpg'
import hp from '../assets/images/services/HP_Logo.jpg'
import lenovo from '../assets/images/services/lenovo.png'
import huawei from '../assets/images/services/Huawei-Logo.jpg'

const Brands = (props) => {
    useEffect(()=>{
        axios.get('https://www.new.holistictechnologies.com.pk/wp-json/wp/v2/media?media_type=image')
        .then(res=> console.log(res.data))
    },[])
    return (
        <div className="container">
            <div className="row mt-3">
                <div className="col-2 img-fluid"><img width="100%" src={apple} alt="apple" /> </div>
                <div className="col-2 img-fluid"><img width="100%" src={samsung} alt="apple" /></div>
                <div className="col-2 img-fluid"><img width="100%" src={hp} alt="apple" /></div>
                <div className="col-2 img-fluid"><img width="100%" src={lenovo} alt="apple" /></div>
                <div className="col-2 img-fluid"><img width="100%" src={asus} alt="apple" /></div>
                <div className="col-2 img-fluid"><img width="100%" src={huawei} alt="apple" /></div>
            </div>
            <div className="row mt-3">
                <div className="col-2 img-fluid"><img width="100%" src={apple} alt="apple" /> </div>
                <div className="col-2 img-fluid"><img width="100%" src={samsung} alt="apple" /></div>
                <div className="col-2 img-fluid"><img width="100%" src={hp} alt="apple" /></div>
                <div className="col-2 img-fluid"><img width="100%" src={lenovo} alt="apple" /></div>
                <div className="col-2 img-fluid"><img width="100%" src={asus} alt="apple" /></div>
                <div className="col-2 img-fluid"><img width="100%" src={huawei} alt="apple" /></div>
            </div>
        </div>
    )
}

export default Brands
