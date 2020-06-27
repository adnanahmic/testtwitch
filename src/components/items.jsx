import React from 'react';

const Items = (props) => {
  const stream = props.stream.stream;
  const imgUrl = stream.preview.medium;
  const url = stream.channel.url;
  const chanelname = stream.channel.name;

  return (
    <tr>
      <tr>
        <td><img src={imgUrl} /></td>
      </tr>
      <tr><td>
        <a href={url}>
          {chanelname}
        </a>
      </td>
    
    </tr>
    </tr>
  );
};

export default Items;
