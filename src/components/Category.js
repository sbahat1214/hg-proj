import React from 'react'
import apple from '../assets/images/category/DG_Help_Category_Icons_120x100_TV.png'
import samsung from '../assets/images/category/Repair_iPod_120x100.png'
import asus from '../assets/images/category/Repair_Laptop_120x100.png'
import hp from '../assets/images/category/Repair_Mobile_120x100.png'
import lenovo from '../assets/images/category/Repair_Printer_120x100.png'
import huawei from '../assets/images/category/Repair_Tablet_120x100.png'
import Typography from '@material-ui/core/Typography'

const Category = () => {
    return (
        <div>
            <div className="container">
            <div className="row mt-3">
                <div className="col-2 img-fluid text-center border "><img width="90px" src={apple} alt="apple" /><Typography variant='subtitle2'>
                    Apple
                    </Typography> </div>
                <div className="col-2 img-fluid text-center border "><img width="90px" src={samsung} alt="apple" /><Typography variant='subtitle2'>
                    Samsung
                    </Typography></div>
                <div className="col-2 img-fluid text-center border "><img width="90px" src={hp} alt="apple" /><Typography variant='subtitle2'>
                    Hp
                    </Typography></div>
                <div className="col-2 img-fluid text-center border "><img width="90px" src={lenovo} alt="apple" /><Typography variant='subtitle2'>
                    Lenovo
                    </Typography></div>
                <div className="col-2 img-fluid text-center border "><img width="90px" src={asus} alt="apple" /><Typography variant='subtitle2'>
                    Asus
                    </Typography></div>
                <div className="col-2 img-fluid text-center border "><img width="90px" src={huawei} alt="apple" /><Typography variant='subtitle2'>
                    Huawei
                    </Typography></div>
            </div>
        </div>
        </div>
    )
}

export default Category
