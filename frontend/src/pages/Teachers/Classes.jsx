// ClassSection.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import { ClassContainer, SidebarContainer, Content, ClassHeader, ClassList, ClassItem, ClassBody, ClassBox, StyledTable, ExportButton } 
from '../../styles/ClassesStyles'; 


const ClassSection = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/v1/class/getall');
      if (response.data && Array.isArray(response.data.classes)) {
        setClasses(response.data.classes);
      } else {
        console.error('Error fetching classes: Invalid data format', response.data);
      }
    } catch (error) {
      console.error('Error fetching classes:', error.message);
    }
  };

  const handleExport = () => {
    // Logic to export the attendance data to an Excel sheet
    console.log("Export to Excel functionality will be implemented here.");
  };

  return (
    <ClassContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <ClassHeader>Classes </ClassHeader>
               
          <ClassBody>
                <ClassBox>
                  <h3>Class 1</h3>
                </ClassBox>
                <ClassBox>
                  <h3>Class 2</h3>
                </ClassBox>
                <ClassBox>
                  <h3>Class 3</h3>
                </ClassBox>
                <ClassBox>
                  <h3>Class 4</h3>
                </ClassBox>
              </ClassBody>

              
              <StyledTable>
                <thead>
                  <tr>
                    <th>Roll No</th>
                    <th>Full Name</th>
                    <th>Attendance</th>
                    <th>Total Student</th>
                    <th>Absent</th>
                    <th>Present</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>01</td>
                    <td>Santoshi Pallaye</td>
                    <td>P</td>
                    <td>24</td>
                    <td>20</td>
                    <td>4</td>
                  </tr>
                
                </tbody>
              </StyledTable>
              <ExportButton onClick={handleExport}>Export to Excel</ExportButton>
        <ClassList>
          {classes.map((classItem, index) => (
            <ClassItem key={index}>
              <h3>{classItem.grade}</h3>
            </ClassItem>
          ))}
        </ClassList>
        
      </Content>
    </ClassContainer>
  );
};

export default ClassSection;
