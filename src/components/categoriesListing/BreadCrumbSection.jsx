import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import breadcrumb from '../../assets/img/breadcrumb.jpg';

class BreadCrumbSection extends Component {
    state = {  } 
    render() { 
        return (
            <>
                {/* <!-- Breadcrumb Section Begin --> */}
                <section className="breadcrumb-section set-bg" data-setbg={breadcrumb}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <div className="breadcrumb__text">
                                    <h2>{this.props.title}</h2>
                                    <div className="breadcrumb__option">
                                        {
                                            this.props.links?.map((val, idx)=>{
                                                if(idx === this.props.links?.length-1){
                                                    return (<span key={idx}>{Object.keys(val)[0]}</span>)
                                                }
                                                return (<Link key={idx} to={val[Object.keys(val)]}>{Object.keys(val)[0]}</Link>)
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Breadcrumb Section End --> */}
            </>
        );
    }
}
 
export default BreadCrumbSection;