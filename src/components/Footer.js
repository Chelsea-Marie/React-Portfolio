import React from 'react';

function Footer(props) {
    return (
        <footer className="w-100 mt-auto text-dark p-4">
            <div className="container text-center mb-5">
                <h4>&copy; {new Date().getFullYear()} - Chelsea Pederson</h4>
            </div>
        </footer>
    );
}

export default Footer;