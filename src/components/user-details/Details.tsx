import React from "react";

interface DetailsProps {
  imageSrc: string;
  altText: string;
  label: string;
  value: number | string;
  optionalSrc?: string;
}

const Details: React.FC<DetailsProps> = ({ imageSrc, altText, label, value, optionalSrc }) => {
  return (
    <div className="details">
      <div className="image">
        <div className="image-wrap">
          <img src={imageSrc} alt={altText} />
        </div>
        <span>{label}</span>
      </div>
      <p>{value}</p>
      {optionalSrc && <img src={optionalSrc} />}
    </div>
  );
};

export default Details;
