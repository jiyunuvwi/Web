import React, {useEffect} from "react";
import {Link, useLocation} from "react-router-dom";


import SimpleBarReact from "simplebar-react";
import 'simplebar-react/dist/simplebar.min.css';

import {AiOutlineAppstore, AiOutlineLineChart, FaBell, FaGift, TbHandFinger} from '../assets/icons/vander'

export default function Sidebar(){
    const location = useLocation();
    
    useEffect(() => {
        window.scrollTo(0, 0);
      }, [location]);

    return(
        <nav className="sidebar-wrapper sidebar-dark">
            <div className=" sidebar-content">
                <div className="sidebar-brand">
                    <Link to="/"><h3 className="text-3xl text-white">NiceToMenu</h3></Link>
                </div>
            <SimpleBarReact style={{height:"calc(100% - 70px)"}}> 
                <ul className="sidebar-menu border-t border-white/10">

                    <li>
                    {/*    대시보드 메뉴 입니다. */}
                    </li>

                    <li>
                        <Link to="/home" className="text-xl py-5"><AiOutlineAppstore className="me-3 icon"/>대시보드</Link>
                    </li>

                    <li>
                        <Link to="/order" className="text-xl py-5"><FaBell className="me-3 icon"/>주문 관리</Link>
                    </li>

                    <li>
                        <Link to="/menu" className="text-xl py-5"><TbHandFinger className="me-3 icon"/>상품 및 메뉴 관리</Link>
                    </li>

                    <li>
                        <Link to="/promotion" className="text-xl py-5"><FaGift className="me-3 icon"/>프로모션 관리</Link>
                    </li>

                    <li>
                        <Link to="/analysis" className="text-xl py-5"><AiOutlineLineChart className="me-3 icon"/>리포팅 및 분석</Link>
                    </li>

                </ul>
            </SimpleBarReact>
            </div>
        </nav>
        
    )
}