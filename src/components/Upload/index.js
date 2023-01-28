import React from "react";

export default function Uploadimg({ img, ...rest }) {
  return (
    <>
      <div className="upload">
        {img? (img && <img  src={img} className="rounded-circle w-75 h-75" />) :(<img className="rounded-circle w-75 h-75" src={require('../../assets/images/default.jpg')}/>)}
        <input className="rounded-3 p-4 w-100 mt-3 brown-bg" type="file" {...rest} />
      </div>
    </>
  );
}
