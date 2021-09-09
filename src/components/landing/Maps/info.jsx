import * as React from 'react';


const Info = (props)=> {
  const {info} = props;
  const author = `${info.id}`;
  const content = `${info.address}`
  const lat = `${info.latitude}`
  const lng = `${info.longitude}`
  return (
    <>
      <div>
        {author}
      </div>
      <div>
        {content}
        {lat}
        {lng}
      </div>
      {/* <img width={240} src={info.image} /> */}
    </>
  );
}

export default React.memo(Info);