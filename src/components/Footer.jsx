import React from 'react'
import './Styles/footer.css'

function Footer() {
  return (
    <footer className="footer relative" id='footer'>
        <div className="copyright"> &copy; Copyright{ ' '} <strong>
            <span>
                Michael Igbanesi
            </span>
        </strong>
        . All Rights Reserved
        </div>
        <div className="credits">Designed by <a href='https://github.com/JAmalMichael'>JAmalMichael</a></div>
    </footer>
  )
}

export default Footer