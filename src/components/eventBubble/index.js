import React, {useEffect} from 'react';
import {Button} from 'antd';

window.addEventListener('click', e => {
  console.log('window');
});

document.addEventListener('click', e => {
  console.log('before react mount: document');
})

document.body.addEventListener('click', e => {
  console.log('body');
})

export default () => {
  const documentHandle = () => {
    console.log('within react: document');
  }

  useEffect(() => {
    document.addEventListener('click', documentHandle);
    return () => {
      document.removeEventListener('click', documentHandle);
    }
  }, [])

  const handleClick = (e) => {
    e.stopPropagation();
    console.log('button');
  }

  return (
    <div onClick={() => {console.log('container')}}>
      <Button type="primary" onClick={handleClick}>click me</Button>
    </div>
  );
}
