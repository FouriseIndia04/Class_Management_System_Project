// ClassesStyles.js
import styled from 'styled-components';

export const ClassesContainer = styled.div`
  display: flex;
  padding-left: 240px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding-left: 0;
  }
`;

export const Content = styled.div`
  flex: 1;
`;

export const ClassesContent = styled.div`
  padding: 20px;
`;

export const ClassesHeader = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const ClassList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ClassItem = styled.li`
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 10px 20px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const AddClassForm = styled.form`
  margin-bottom: 20px;
`;

export const AddClassInput = styled.input`
  padding: 8px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const AddClassButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;


export const ClassContainer = styled.div`
  display: flex;
`;

export const SidebarContainer = styled.div`
  flex: 0 0 250px; /* Sidebar width */
`;

export const ClassHeader = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const GradeHeader = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;
// Styled component for the container that holds the boxes
export const ClassBody = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 boxes in one row */
  gap: 20px; /* Space between the boxes */
  padding: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* 2 boxes per row on smaller screens */
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr; /* 1 box per row on mobile screens */
  }
`;

// Styled component for each box
export const ClassBox = styled.div`
  background-color: #f9f9f9; /* Light background color */
  border-radius: 8px; /* Rounded corners */
  padding: 20px; /* Space inside the box */
  text-align: center; /* Center text */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
  font-size: 18px; /* Font size for the class name */
  font-weight: bold; /* Bold text */

  /* Add hover effect */
  &:hover {
    background-color: #e7f3ff; /* Change background on hover */
    transform: translateY(-2px); /* Slight lift effect on hover */
    transition: background-color 0.3s ease, transform 0.3s ease; /* Smooth transition */
  }
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 16px;
  margin: 25px 0;
  min-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

  
  thead tr {
    background-color: #2c3e50;
    color: White;
    text-align: left;
  }
  
  th, td {
    padding: 12px 15px;
    border: 1px solid #ddd;
  }
  
  tbody tr {
    border-bottom: 1px solid #dddddd;
  }
  
  tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
  }
  
  tbody tr:last-of-type {
    border-bottom: 2px solid #2c3e50;
  }
  
  tbody tr:hover {
    background-color: #f1f1f1;
  }
  
  @media (max-width: 768px) {
    th, td {
      padding: 8px 10px;
      font-size: 14px;
    }
  }
`;

// Styled component for the export button
export const ExportButton = styled.button`
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin: 20px 0; /* Spacing above and below the button */
  
  &:hover {
    background-color: #218838;
  }
`;