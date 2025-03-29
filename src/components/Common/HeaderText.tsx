import React from "react";

const HeaderText = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return <h1 className={`text-3xl font-bold ml-4 ${className}`}>{title}</h1>;
};

export default HeaderText;
