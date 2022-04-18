import React, { Component } from 'react'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import uuid from 'uuid/v4'

class BreadcrumbHistory extends Component {

  renderBreadCrumbs = () => {
    
    let route = this.props.url.split('/')
    .slice(1)
    .map(route => route
      .split('-')
      .map(word => word[0].toUpperCase() + word.slice(1))
      .join(' ')
    )
    const length = route.length;
    return route.map((item,index) => (
      length === index + 1 ? 
    
    <BreadcrumbItem key={uuid()} className="active"><strong className="mr-2">{this.changeName(item)}</strong></BreadcrumbItem> : 
      <BreadcrumbItem key={uuid()}><span className="mr-2">{this.changeName(item)}</span></BreadcrumbItem>
    ))

  }
  changeName = (routeName)=>{
    switch (routeName) {
      case "Dashboard":
        return "داشبورد"    
      default:
        break;
    }
  }
  
  render() {
    return (
      <>
        { this.props.url !== '/app/chat' ?
          <div className="mr-3 mt-5">
            <Breadcrumb tag="nav" listTag="div">
              {" "}
              <BreadcrumbItem>خانه</BreadcrumbItem>
              {this.renderBreadCrumbs()}
            </Breadcrumb>
          </div>
        :null}
      </>
    )
  };
};

export default BreadcrumbHistory;