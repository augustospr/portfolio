import asprLogo from "../assets/aspr-logo.png";
// import nomeLogo from "../assets/augusto-logo-nome.png";

const Header = () => {

  return (
    <>
      <section id="header" className="header">
        <div className="container">
          <div className="row">

            <div className="box-image">
              <a href="/">
                <figure>
                  <img src={asprLogo} alt="logo do nome Augusto Sérgio Pimenta Ramos" />
                </figure>
              </a>
            </div>

            <div className="box-clickable">
              <div className="box-click">
                <a href="">Tecnologias</a>
              </div>
              <div className="box-click">
                <a href="">Projetos</a>
              </div>
              <div className="box-click">
                <a href=""><button>Say Hello</button></a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Header;