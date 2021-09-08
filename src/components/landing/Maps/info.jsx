import * as React from 'react';

const Info = (props)=> {
  const {info} = props;
  const displayName = `${info.id}, ${info.name}`;

  return (
    <div>
      <div>
        {displayName}
      </div>
      {/* <img width={240} src={info.image} /> */}
    </div>
  );
}

export default React.memo(Info);