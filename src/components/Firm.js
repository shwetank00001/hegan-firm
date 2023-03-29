import React from 'react'
import './Firm.css'
import {FaFileCsv, FaRegFilePdf,FaRegCopy} from "react-icons/fa";

const Firm = () => {
  return (
    <div>
            <div className='firm'>
                <div className='firm-header'>
                    <h1>FIRM LIST</h1>
                </div>
               

      <div className='table-top'>
        
            <div className='show-name'>
              <label htmlFor='show'>Show : </label>
              <input id='show' />
              <FaRegFilePdf className='pdf' />
              <FaFileCsv className='csv' />
              <FaRegCopy className='copy' />   
            </div>

            <div className='search-name'>
              <input placeholder='Search by Name, Firm Name' />
            </div>

      </div>
        <div className='table-customer'>
    
          <table id="customers">
                            <tr className='table-customer-heading'>
                                <th>S.No.</th>
                                <th>Due</th>
                                <th>Contact name </th>
                                <th>Mobile No.</th>
                                <th>Email</th>
                                <th>State </th>
                                <th>register As</th>
                                <th>D.L. No. (1)</th>
                                <th>D.L. No. (2)</th>
                                <th>GSTIN</th>
                                <th>FSSAI No.</th>
                                <th>Action</th>
                            </tr>
                            <tr>
                                <td><input type='text' value={"1"} /></td>
                                <td><input type='text' value={"Shwetank"} /></td>
                                <td><input type='text' value={"0"} /></td>
                                <td><input type='text' value={"114"} /></td>
                                <td><input type='text' value={"1141"} /></td>
                                <td><input type='text' value={"1141"} /></td>
                                <td><input type='text' value={"11"} /></td>
                                <td><input type='text' value={"11"} /></td>
                                <td><input type='text' value={"11"} /></td>
                                <td><input type='text' value={"11"} /></td>
                                <td><input type='text' value={"11"} /></td>
                                <td>
                                    <button className='add'>Add</button>
                                    <button className='update'>Update</button>
                                    <button className='delete'>Delete</button></td>
                            </tr>


          </table>
        </div>
    </div>
    </div>
  )
}

export default Firm