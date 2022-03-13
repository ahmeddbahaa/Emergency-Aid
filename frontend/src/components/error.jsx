import React, { useEffect } from "react";

const Error = () => {
    useEffect(() => {
        document.title = "Error | Emergency First Aid";
    });
    return <section className="error-section">Backend-Error</section>;
};

export default Error;
