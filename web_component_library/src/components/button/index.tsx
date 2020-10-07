import React from "react";

interface Props {
    title: string;
}

const Button = ({title}: Props) => {
    return <button>{title}</button>;
};

export default Button;
