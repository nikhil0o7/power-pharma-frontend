import React, { useState } from 'react'
import { Button } from '@npm/grnoc-ui-button';
import { Link } from 'react-router-dom';
// eslint-disable-next-line react-hooks/rules-of-hooks


const Counter = () => {
  const [count, setCount] = useState(0);

const handleClick = () => {
  setCount(count + 1);
};
  return (
    
    <div>
      <Link  to={`/app/`}><Button  style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    }}>Home Page  </Button></Link>
      <Button onClick={()=>handleClick()}>{count} times clicked</Button>
    </div>
  )
}

export default Counter