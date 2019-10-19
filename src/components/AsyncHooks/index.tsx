import React, { useEffect } from 'react'

const AsyncHooks = () => {
  useEffect(() => {
    const asyncFunction = async () => {
      const data = await fetch('https://twitter.com')
    };
    asyncFunction()
  }, []);

  return <div>Hello</div>
};

export default AsyncHooks
