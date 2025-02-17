import React from "react";

interface Props {
  className?: string;
}

const Spinner: React.FC<Props> = ({ className }) => {
  return <div className={className}>Spinner</div>;
};

export default Spinner;
