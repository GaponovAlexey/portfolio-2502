import React from 'react'

import { BsFillEnvelopeFill} from 'react-icons/bs';

function Footer() {
    return (
        <div className="main_footer">
            <p>Add your email to subscribe to newsletter. You will get best news from us</p>
            <div className="main_footer--newsletter">
                <form>
                    <input placeholder="Email" />
                    <div className="button">
                        subscribe
                        <BsFillEnvelopeFill size="23" />
                    </div>
                </form>
            </div>
            2022 &copy; Adstoria - Cold Mountain Group
        </div>
    )
}

export default Footer
