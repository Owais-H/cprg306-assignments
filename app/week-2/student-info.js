import Link from 'next/link';
import React from 'react';

const StudentInfo = () => {
  return (
    <div>
      <h1>Awais Hafeez</h1>
      <p>
        Check out my GitHub repository:{" "}
        <Link className='github-repo' href="https://github.com/Owais-H/cprg306-assignments">Checkout my Github repo</Link>
      </p>
    </div>
  );
};

export default StudentInfo;
