import React, {useState, useEffect} from 'react';

const Syntax = () => {

    const [checkBoxValue, setCheckBoxValue] = useState(false);

    useEffect(() =>{
        console.log(' in use Effect');
        return () => {
            console.log('in useEffect Cleanup')
        }
    }, [checkBoxValue]);

    return (
        <div>

        </div>
    );
};

export default Syntax;

