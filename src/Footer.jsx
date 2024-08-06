

const Footer = () => {
    return (
        <div>


<footer className="footer text-[#40F8FF] bg-[#030637]  p-10 border-[1px] border-[#40F8FF]">
  <aside>
     <img className=" h-[100px]" src="https://i.ibb.co/m5nvwbB/learning-1.png" alt="" />
    <p>
      Learnify
      <br />
      Education company since 1992
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
            
        </div>
    );
};

export default Footer;