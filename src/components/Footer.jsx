export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-sm-5 copyright">
            <p></p>
          </div>
          <div className="col-sm-2 top">
            <span id="to-top">
              <i className="fa fa-chevron-up" aria-hidden="true"></i>
            </span>
          </div>
          <div className="col-sm-5 social">
            <ul>
              <li>
                <a
                  href="https://github.com/yashrastogi"
                  rel="noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/yashrastogi-ml"
                  rel="noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
