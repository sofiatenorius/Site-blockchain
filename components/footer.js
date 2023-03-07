class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <style>
        .footer-menu {
            width: 100%;
            color: white;
            font-size: 15px;
            background-color: #1a1a1c;
            display: flex;
            padding: 25px;
        }

        .boxs {
            width: 320px;
            min-height: 150px;
            padding: 10px;
        }

        .footer-menu .boxs:nth-child(4) {
            width: 400px;
        }

        .boxs h2 {
            font-size: 20px;
            color: white;
            margin-bottom: 20px;
            font-weight: bolder;
            text-transform: uppercase;

        }

        .boxs ul li {
            margin: auto 0;
            list-style: none;
        }

        .boxs ul li a {
            color: white;
            text-decoration: none;
            cursor: pointer;

        }

        .boxs ul {
            padding-left: 0rem;
        }

        .boxs ul li a:hover {
            color: aliceblue;
            text-decoration: none;
        }

        .boxs p {
            text-align: justify;
        }

        @media(max-width:950px) {
            .footer-menu {
                flex-direction: column;
                width: 100%;

            }

            .footer-menu .boxs {
                width: 100%;
                text-align: center;
            }

            .footer-menu .boxs:nth-child(4) {

                width: 100%;
                padding: 25px;
                padding-bottom: 15px;
            }

            .boxs ul {
                padding-left: 0rem;
            }
        }

        .footer-social {
            width: 100%;
            height: 70px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0px 20px;
            background-color: #1a1a1c;
        }

        .footer-social img {
            height: 50px;
            width: 75px;
        }

        .footer-social .sociais {
            display: flex;
            margin-right: 5px;
        }

        .sociais .social {
            width: 40px;
            height: 40px;
            text-align: center;
            line-height: 40px;
            background: #ddd;
            border-radius: 10px;
            margin: 10px;
            cursor: pointer;
            transition: background.3s linear;
        }

        .sociais .social a {
            color: #000;
            font-size: 1.5em;
            transition: color.3s linear;
        }
    </style>
    <footer class="footer-menu">
        <div class="boxs">
          <h2>Início</h2>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="pag_contato.html">Contato</a></li>
          </ul>
        </div>
        <div class="boxs">
          <h2>Informações</h2>
          <ul>
            <li><a href="pag_contato.html">Contato</a></li>
            <li><a href="">Serviços</a></li>
          </ul>
        </div>
        <div class="boxs">
          <h2>Suporte</h2>
          <ul>
            <li><a href="">FAQ</a></li>
            <li><a href="">Telefone</a></li>
          </ul>
        </div>
        <div class="boxs">
          <h2>Sobre</h2>
          <p> Somos uma empresa de confiança ajudamos você a entender melhor
            sobre o mercado financeiro e somos especializados em criptomoedas e blockchain
          </p>
        </div>
      </footer>

      <div class="footer-social">
        <img src="img/logo.png" alt="">
        <div class="sociais">
          <div class="social">
            <a href="https://www.instagram.com" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a>
          </div>
          <div class="social">
            <a href="https://www.whatsapp.com" target="_blank"><i class="fa fa-whatsapp" aria-hidden="true"></i></a>
          </div>
          <div class="social">
            <a href="https://twitter.com" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i></a>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('footer-component', Footer);