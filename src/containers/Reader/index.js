import React from 'react';
import "./index.css"

const Reader = () => {
    return (
        <object className={"pdf-reader"} data="/assets/pdfs/pdf1.pdf" type="application/pdf">
            <iframe src="/assets/pdfs/pdf1.pdf"></iframe>
        </object>
    );
};

export default Reader;
