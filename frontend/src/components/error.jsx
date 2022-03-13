import React, { useEffect } from "react";

const Error = () => {
    useEffect(() => {
        document.title = "Error | Henry Golden Cinema";
    });
    return <section className="error-section">Backend-Error</section>;
};

export default Error;
