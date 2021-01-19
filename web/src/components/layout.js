import React from 'react'
import Header from './header'

import '../styles/layout.css'
import styles from './layout.module.css'

const Layout = ({ children, companyInfo, onHideNav, onShowNav, showNav, siteTitle }) => (
  <>
    <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />

    <div className={styles.content}>{children}</div>
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.companyAddress}>
          {companyInfo && (
            <div>
              {companyInfo.name}
            
              {companyInfo.address1}
             
              {companyInfo.address2 && (
                <span>
                  {companyInfo.address2}
                  
                </span>
              )}
               
              
              {companyInfo.country && <span>, {companyInfo.country}</span>}
            </div>
          )}
        </div>
   

        
        <div className={styles.siteInfo}>
        <a href="https://twitter.com/miacodes" target="_blank"><i class="fab fa-twitter fa-2x py-3 px-3 my-3"></i></a>
        <a href="https://github.com/miadugas" target="_blank"><i class="fab fa-github fa-2x py-3 px-3 my-3"></i></a>
        <a href="https://www.linkedin.com/in/mia-dugas/" target="_blank"><i class="fab fa-linkedin-in fa-2x py-3 px-3 my-3"></i></a>
        <a href="https://dribbble.com/MiaInBatcountry" target="_blank"><i class="fas fa-basketball-ball fa-2x py-3 px-3 my-3"></i></a> 
        <br />              
          © {new Date().getFullYear()}, Built with 
          <a href='https://www.gatsbyjs.org'> <strong>Gatsby - </strong></a>
          Data from <a href='https://www.sanity.io'><strong>Sanity - </strong></a>
          Hosted on <a href='https://www.netlify.com'><strong>Netlify </strong></a>
        </div>
      </div>
    </footer> 
  </>
  
)


export default Layout
