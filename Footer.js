export default function Footer({Company,link}){
   return(
    <>
   <div>
    <footer className="site-footer">
    <div className="footer-container">
      <nav>
        <a href="/about">About</a> | <br/>
        <a href="/privacy">Privacy</a> | <br/>
        <a href="/contact">Contact</a> |<br/>
        <a href="/copyRights">@CopyRights</a>  | <br />
        <a href={link}>{Company}</a><br />
      </nav>
    </div>
  </footer>
  </div>
   </>
   ) 
}