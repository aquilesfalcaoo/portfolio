<template>
  <Header></Header>
  <main class="bg-violet-800 p-5 pt-40">
    <article
      class="container mx-auto flex justify-center flex-wrap md:flex-nowrap"
    >
      <div
        class="flex flex-col self-center xl:w-2/5 lg:w-2/5 md:w-full tagline"
      >
        <div class="content-title mb-6">
          <h4
            class="
              text-white
              font-bold
              text-2xl
              font-sans
              border-emerald-500 border-l-2
              pl-2
            "
          >
            Desenvolvedor Front-end
          </h4>
        </div>
        <h2 class="text-emerald-400 font-bold text-4xl font-sans mb-5">
          Aquiles Falcão
        </h2>
        <p class="text-white font-medium font-sans mb-7">
          Seja bem-vindo ao meu portfólio, aqui é onde vou mostrar minhas
          experiências e conhecimentos como desenvolvedor front-end.
        </p>
        <a
          class="
            bg-emerald-600
            text-white
            rounded-full
            py-2
            px-5
            w-32
            font-medium font-sans
          "
          id="Curriculo"
          href="/files/CV_Aquiles_Falcão.pdf"
          download
          >Currículo<i class="fa-solid fa-download ml-1.5"></i
        ></a>
      </div>
      <figure class="flex justify-center my-5 headline">
        <img
          class="w-4/5"
          src="../src/assets/imgs/undraw_programming.png"
          draggable="false"
          alt="representação de um programador no computador"
          loading="lazy"
        />
      </figure>
    </article>
  </main>
  <section class="bg-violet-800 p-5" id="about-me">
    <h4
      class="
        text-center text-emerald-400
        font-bold
        text-4xl
        font-sans
        tagline
        mb-12
      "
    >
      Sobre Mim
    </h4>
    <article
      class="container mx-auto flex justify-center flex-wrap lg:flex-nowrap"
    >
      <figure class="about-me-img headline">
        <img
          class="xl:w-4/5 lg:w-4/5"
          src="../src/assets/imgs/undraw_feeling_proud.png"
          alt="representação de um programador sentado a mesa"
          draggable="false"
          loading="lazy"
        />
      </figure>
      <div
        class="
          about-me-text
          my-5
          xl:w-2/5
          lg:w-2/5
          md:w-full
          flex flex-col
          self-center
          tagline
        "
      >
        <p class="text-white font-medium text-lg font-sans leading-6">
          Olá! Meu nome é Aquiles Falcão, sou formado em Design Gráfico e no
          momento estou graduando em Sistemas de Informação, estou estagiando na
          empresa Bem+ como Desenvolvedor Front-end. Gosto sempre de aprender
          sobre novas ferramentas e tecnologias do mercado, e estou aberto a
          novos desafios. No momento estou estudando Angular, Vue e JavaScript,
          aprendendo sobre boas práticas e acessibilidade.
        </p>
      </div>
    </article>
  </section>
  <section class="bg-violet-800 p-5" id="knowledges">
    <h4
      class="
        text-center text-emerald-400
        font-bold
        text-4xl
        font-sans
        tagline
        mb-12
      "
    >
      Conhecimentos
    </h4>
    <article class="container mx-auto flex justify-center mb-12">
      <figure
        class="
          tecnologies-tools
          grid
          md:grid-cols-4
          grid-cols-2
          justify-items-center
          gap-8
        "
      >
        <img
          class="p-3 bg-white w-full h-28 object-contain tagline"
          src="../src/assets/imgs/HTML5.png"
          alt="HTML5"
          id="HTML5"
          loading="lazy"
        />
        <img
          class="p-3 bg-white w-full h-28 object-contain headline"
          src="../src/assets/imgs/CSS3.png"
          alt="CSS3"
          id="CSS3"
          loading="lazy"
        />
        <img
          class="p-3 bg-white w-full h-28 object-contain tagline"
          src="../src/assets/imgs/JavaScript.png"
          alt="JavaScript"
          id="JavaScript"
          loading="lazy"
        />
        <img
          class="p-3 bg-white w-full h-28 object-contain headline"
          src="../src/assets/imgs/TypeScript.png"
          alt="TypeScript"
          id="TypeScript"
          loading="lazy"
        />
        <img
          class="p-3 bg-white w-full h-28 object-contain tagline"
          src="../src/assets/imgs/Angular.png"
          alt="Angular"
          id="Angular"
          loading="lazy"
        />
        <img
          class="p-3 bg-white w-full h-28 object-contain headline"
          src="../src/assets/imgs/Vue.png"
          alt="Vue"
          id="Vue"
          loading="lazy"
        />
        <img
          class="p-3 bg-white w-full h-28 object-contain tagline"
          src="../src/assets/imgs/Bootstrap.png"
          alt="Bootstrap"
          id="Bootstrap"
          loading="lazy"
        />
        <img
          class="p-3 bg-white w-full h-28 object-contain headline"
          src="../src/assets/imgs/Tailwind.png"
          alt="Tailwind CSS"
          id="TailwindCSS"
          loading="lazy"
        />
        <img
          class="p-3 bg-white w-full h-28 object-contain tagline"
          src="../src/assets/imgs/Sass.png"
          alt="SASS"
          id="SASS"
          loading="lazy"
        />
        <img
          class="p-3 bg-white w-full h-28 object-contain headline"
          src="../src/assets/imgs/Gulp.png"
          alt="Gulp"
          id="Gulp"
          loading="lazy"
        />
        <img
          class="p-3 bg-white w-full h-28 object-contain tagline"
          src="../src/assets/imgs/JQuery.png"
          alt="jQuery"
          id="jQuery"
          loading="lazy"
        />
      </figure>
    </article>
  </section>
  <section class="bg-violet-800 p-5" id="projects">
    <h4
      class="
        text-center text-emerald-400
        font-bold
        text-4xl
        font-sans
        tagline
        mb-12
      "
    >
      Projetos
    </h4>
    <article class="container mx-auto flex justify-center flex-wrap">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-28 justify-items-center">
        <figure
          class="bg-neutral-800 rounded w-full mx-auto p-5 shadow-lg headline"
          id="Github"
        >
          <a
            href="https://github.com/aquilesfalcaoo/animals-feed"
            rel="noopener"
            target="_blank"
          >
            <div class="bg-violet-800 flex justify-center py-10">
              <img
                class="w-20"
                src="./assets/imgs/Github.png"
                draggable="false"
                alt="Github"
                loading="lazy"
              />
            </div>
            <h6
              class="
                text-center text-emerald-400
                my-2
                font-bold
                text-xl
                font-sans
              "
            >
              Animals Feed
            </h6>
            <figcaption class="text-white font-sans font-medium">
              Rede social de animais com sistema de autenticação de usuário e
              cadastro e busca de animais.
            </figcaption>
          </a>
        </figure>
        <figure
          class="bg-neutral-800 rounded w-full mx-auto p-5 shadow-lg headline"
          id="Github"
        >
          <a
            href="https://github.com/aquilesfalcaoo/unity-bank"
            rel="noopener"
            target="_blank"
          >
            <div class="bg-violet-800 flex justify-center py-10">
              <img
                class="w-20"
                src="./assets/imgs/Github.png"
                draggable="false"
                alt="Github"
                loading="lazy"
              />
            </div>
            <h6
              class="
                text-center text-emerald-400
                my-2
                font-bold
                text-xl
                font-sans
              "
            >
              Unity Bank
            </h6>
            <figcaption class="text-white font-sans font-medium">
              Aplicação de um banco utilizando o Angular e o TypeScript
              utilizando as requisições do HttpClient.
            </figcaption>
          </a>
        </figure>
        <figure
          class="bg-neutral-800 rounded w-full mx-auto p-5 shadow-lg headline"
          id="Github"
        >
          <a
            href="https://github.com/Rennan-sbarros/StationGames"
            rel="noopener"
            target="_blank"
          >
            <div class="bg-violet-800 flex justify-center py-10">
              <img
                class="w-20"
                src="./assets/imgs/Github.png"
                draggable="false"
                alt="Github"
                loading="lazy"
              />
            </div>
            <h6
              class="
                text-center text-emerald-400
                my-2
                font-bold
                text-xl
                font-sans
              "
            >
              Station Games
            </h6>
            <figcaption class="text-white font-sans font-medium">
              Website visando compartilhar recomendações dos jogos mais jogados
              do mês.
            </figcaption>
          </a>
        </figure>
      </div>
    </article>
  </section>
  <section class="bg-violet-800 p-5" id="contact">
    <h4
      class="
        text-center text-emerald-400
        font-bold
        text-4xl
        font-sans
        tagline
        mt-12
      "
    >
      Contato
    </h4>
    <article class="container mx-auto flex justify-center mb-12">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 justify-items-center">
        <div class="mt-12 flex self-center">
          <p class="text-white font-medium text-lg font-sans tagline">
            Entre em contato comigo por telefone, email ou me adicione no
            Linkedin.
          </p>
        </div>
        <div class="mt-12 flex items-center gap-10">
          <a
            href="https://www.linkedin.com/in/aquilesfalcaoo/"
            rel="noopener"
            target="_blank"
            id="Linkedin"
          >
            <img
              class="w-12 object-contain tagline"
              src="./assets/imgs/Linkedin.png"
              alt="Linkedin"
              loading="lazy"
            />
          </a>
          <a
            href="mailto:aquilesfalcaoo@gmail.com"
            rel="noopener"
            target="_blank"
            id="Email"
          >
            <img
              class="w-12 object-contain tagline"
              src="./assets/imgs/Email.png"
              alt="E-mail"
              loading="lazy"
            />
          </a>
          <a
            href="tel:+5581997452190"
            rel="noopener"
            target="_blank"
            id="Telefone"
          >
            <img
              class="w-12 object-contain tagline"
              src="./assets/imgs/WhatsApp.png"
              alt="WhatsApp"
              loading="lazy"
            />
          </a>
        </div>
      </div>
    </article>
  </section>
  <Footer></Footer>
</template>
<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>
