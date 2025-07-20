import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

// Create Supabase client (typically in a separate file like supabaseClient.ts)
const supabase = createClient(
  process.env.VITE_SUPABASE_URL!,
  process.env.VITE_SUPABASE_ANON_KEY!
);

function StudentFeesComponent() {
  const [studentId, setStudentId] = useState('');
  const [installmentAmount, setInstallmentAmount] = useState('');
  const [studentFees, setStudentFees] = useState(null);
  const [error, setError] = useState(null);

  // Fetch Student Fees
  const fetchStudentFees = async () => {
    try {
      const { data, error } = await supabase.functions.invoke('student-fees', {
        body: JSON.stringify({
          method: 'GET',
          studentId: studentId
        })
      });

      if (error) throw error;
      setStudentFees(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setStudentFees(null);
    }
  };

  // Add Installment
  const addInstallment = async () => {
    try {
      const { data, error } = await supabase.functions.invoke('student-fees', {
        body: JSON.stringify({
          method: 'POST',
          studentId: studentId,
          installmentAmount: parseFloat(installmentAmount)
        })
      });

      if (error) throw error;
      setStudentFees(data);
      setInstallmentAmount('');
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  // Update Total Fees
  const updateTotalFees = async (newTotalFees) => {
    try {
      const { data, error } = await supabase.functions.invoke('student-fees', {
        body: JSON.stringify({
          method: 'PUT',
          studentId: studentId,
          totalFees: newTotalFees
        })
      });

      if (error) throw error;
      setStudentFees(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h2>Student Fees Management</h2>

      {/* Student ID Input */}
      <input
        type="text"
        value={studentId}
        onChange={(e) => setStudentId(e.target.value)}
        placeholder="Enter Student ID"
      />

      {/* Fetch Fees Button */}
      <button onClick={fetchStudentFees}>
        Fetch Student Fees
      </button>

      {/* Add Installment Section */}
      <div>
        <input
          type="number"
          value={installmentAmount}
          onChange={(e) => setInstallmentAmount(e.target.value)}
          placeholder="Installment Amount"
        />
        <button onClick={addInstallment}>
          Add Installment
        </button>
      </div>

      {/* Display Fees */}
      {studentFees && (
        <div>
          <h3>Student Fees Details</h3>
          <p>Total Fees: {studentFees.total_fees}</p>
          <p>Paid Fees: {studentFees.paid_fees}</p>
          <p>Installments: {studentFees.installment_amt?.join(', ')}</p>
        </div>
      )}

      {/* Error Handling */}
      {error && (
        <div style={{ color: 'red' }}>
          Error: {error}
        </div>
      )}
    </div>
  );
}

export default StudentFeesComponent;