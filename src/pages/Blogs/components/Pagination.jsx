import React from 'react'

export default function Pagination() {
    return (
        <>
            <div className="dsn-pagination">
                <span className="page-numbers current ">
                    <span className="dsn-numbers">
                        <span className="number">1</span></span>
                </span>
                <a className="page-numbers" href="#">
                    <span className="dsn-numbers">
                        <span className="number">2</span>
                    </span>
                </a>
                <a className="page-numbers" href="#">
                    <span className="dsn-numbers">
                        <span className="number">3</span>
                    </span>
                </a>
                <a className="next page-numbers" href="#">
                    <span className="button-m">
                        <svg viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" width="100%"
                            height="100%">
                            <path
                                d="M3 26.7h39.5v3.5c0 .3.1.5.4.6.2.1.5.1.7-.1l5.9-4.2c.2-.1.3-.3.3-.5s-.1-.4-.3-.5l-5.9-4.2c-.1-.1-.3-.1-.4-.1-.1 0-.2 0-.3.1-.2.1-.4.3-.4.6v3.5H3c-.4 0-.7.3-.7.7 0 .3.3.6.7.6z">
                            </path>
                        </svg>
                        <span>NEXT</span>
                    </span>
                </a>
            </div>
        </>
    )
}
