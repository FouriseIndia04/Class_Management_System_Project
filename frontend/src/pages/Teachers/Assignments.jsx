// AssignmentSection.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import { AssignmentsContainer, Content, AssignmentsContent, AssignmentsHeader, AssignmentList, AssignmentItem, AddAssignmentForm, 
  AddAssignmentInput, AddAssignmentTextArea, AddAssignmentButton, StyledTable } from '../../styles/AssignmentsStyles'; 

const AssignmentSection = () => {
  const [newAssignment, setNewAssignment] = useState({ title: '', description: '', grade: '', deadline: '' });
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    fetchAssignments();
  }, []);

  const fetchAssignments = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/v1/assignments/getall');
      setAssignments(response.data.assignments);
    } catch (error) {
      console.error('Error fetching assignments:', error);
    }
  };

  const handleAddAssignment = async (e) => {
    e.preventDefault();
    if (newAssignment.title.trim() !== '' && newAssignment.description.trim() !== '' && newAssignment.grade.trim() !== '' && newAssignment.deadline.trim() !== '') {
      try {
        const response = await axios.post('http://localhost:4000/api/v1/assignments', newAssignment);
        setAssignments([...assignments, response.data.assignment]);
        setNewAssignment({ title: '', description: '', grade: '', deadline: '' });
      } catch (error) {
        console.error('Error adding assignment:', error);
      }
    }
  };

  return (
    <AssignmentsContainer>
      <Sidebar />
      <Content>
        <AssignmentsContent>
          <AssignmentsHeader>Assignments</AssignmentsHeader>
          <AddAssignmentForm onSubmit={handleAddAssignment}>
            <AddAssignmentInput
              type="text"
              placeholder="Enter assignment title"
              value={newAssignment.title}
              onChange={(e) => setNewAssignment({ ...newAssignment, title: e.target.value })}
            />
            <AddAssignmentTextArea
              placeholder="Enter assignment description"
              value={newAssignment.description}
              onChange={(e) => setNewAssignment({ ...newAssignment, description: e.target.value })}
            />
            <AddAssignmentInput
              type="text"
              placeholder="Enter assignment grade"
              value={newAssignment.grade}
              onChange={(e) => setNewAssignment({ ...newAssignment, grade: e.target.value })}
            />
            <AddAssignmentInput
              type="text"
              placeholder="Enter assignment deadline"
              value={newAssignment.deadline}
              onChange={(e) => setNewAssignment({ ...newAssignment, deadline: e.target.value })}
            />
            <AddAssignmentInput
              type="file"
              placeholder="Enter assignment deadline"
              value={newAssignment.deadline}
              onChange={(e) => setNewAssignment({ ...newAssignment, deadline: e.target.value })}
            />
            <AddAssignmentButton type="submit">Add Assignment</AddAssignmentButton>
          </AddAssignmentForm>

        
          <AssignmentList>
            {assignments.map((assignment) => (
              <AssignmentItem key={assignment.id}>
                <strong>{assignment.title}: </strong>
                {assignment.description}, {assignment.grade}, {assignment.deadline}
              </AssignmentItem>
            ))}
          </AssignmentList>
        </AssignmentsContent>

        <StyledTable>
      <thead>
        <tr>
          <th>Assignment title</th>
          <th>Description</th>
          <th>Grade</th>
          <th>Deadline</th>
          <th>File</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Assignment 1</td>
          <td>This is Assignment 1</td>
          <td>9</td>
          <td>10/10/24</td>
          <td>File Here</td>
        </tr>
       
      </tbody>
    </StyledTable>
      </Content>
    </AssignmentsContainer>
  );
};

export default AssignmentSection;
