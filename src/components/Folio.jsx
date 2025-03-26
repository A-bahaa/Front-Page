import React from 'react';
import '../styles/folio.css';

const Folio = () => {
  const issue_no = parseInt(localStorage.getItem('issue_no'));
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const formattedDate = new Date()
    .toLocaleDateString('en-US', options)
    .toUpperCase();
  return (
    <div className="folio-wrap ">
      <span>VOL. I .... No. {issue_no + 1}</span>
      <span> {formattedDate}</span>
      <span>$0.00</span>
    </div>
  );
};

export default Folio;
