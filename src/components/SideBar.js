import React from "react";
import '../App.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo"><img src="/images/logo_fixoria.png" alt="Icon" width="40" height="40"/>Fixoria Sales</div>
      <nav>
        <h4>Main Menu</h4>
        <ul>
          <li><img src="/images/home.png" alt="Home" width="20" height="20"/>
          Home</li>
          <li className="active"><img src="/images/shopping-bag.png" alt="Shopping" width="20" height="20"/>
          My Store</li>
          <ul className="sub-menu">
            <li>Products</li>
            <li>Orders</li>
            <li>Inventory</li>
            <li>Discount</li>
          </ul>
          <li><img src="/images/money.png" alt="Finance" width="20" height="20"/>Finance</li>
          <li><img src="/images/customer.png" alt="Customer" width="20" height="20"/>Customers</li>
          <li><img src="/images/analysis.png" alt="Analysis" width="20" height="20"/>Analytics Report</li>
          <li><img src="/images/target.png" alt="Marketing" width="20" height="20"/>Marketing</li>
          <li><img src="/images/setting.png" alt="Setting" width="20" height="20"/>Settings</li>
        </ul>
        <h4>Sales Channel</h4>
        <ul>
        <li><img src="/images/shopping-bag.png" alt="Online Store" width="20" height="20"/>Online Store</li>
        <li><img src="/images/point-of-sale.png" alt="Point of Sale" width="20" height="20"/>Point of Sale</li> 
        </ul>
      </nav>
      <div className="profile">
        <img src="/images/SabikBhai.jpeg" alt="User" />
        <span>Sabik Tawsif Anjum</span>
      </div>
    </aside>
  );
};

export default Sidebar;
