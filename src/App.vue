<template>
  <Header></Header>
  <main class="bg-violet-800 p-5">
    <article class="container mx-auto flex justify-center flex-wrap">
      <div class="flex flex-col self-center w-2/5 tagline">
        <div class="content-title mb-6">
          <h4 class="text-white font-bold text-2xl font-sans border-emerald-500 border-l-2 pl-2">Desenvolvedor Front-end</h4>
        </div>
        <h2 class="text-emerald-400 font-bold text-4xl font-sans mb-5">Aquiles Falcão</h2>
        <p class="text-white font-medium font-sans mb-7">Seja bem-vindo ao meu portfólio, aqui é onde vou mostrar minhas experiências e conhecimentos como desenvolvedor front-end.</p>
        <a class="bg-emerald-500 text-white rounded-full py-2 px-5 w-32 font-medium font-sans" href="../CV_Aquiles_Falcão.pdf" download >Currículo<i class="fa-solid fa-download ml-1.5"></i></a>
      </div>
      <figure class="flex justify-center my-5 headline">
        <img class="w-4/5" src="../src/assets/imgs/undraw_programming.png" draggable="false" alt="representação de um programador no computador">
      </figure>
    </article>
  </main>
  <section class="bg-violet-800 p-5" id="about-me">
    <h4 class="text-center text-emerald-400 font-bold text-4xl font-sans tagline my-8">Sobre Mim</h4>
    <article class="container mx-auto flex justify-center flex-wrap">
      <figure class="about-me-img headline">
        <img class="w-4/5" src="../src/assets/imgs/undraw_feeling_proud.png" alt="representação de um programador sentado a mesa" draggable="false">
      </figure>
      <div class="about-me-text my-5 w-2/5 flex flex-col self-center tagline">
        <p class="text-white font-medium text-lg font-sans leading-6">
          Olá! Meu nome é Aquiles Falcão, sou formado em Design Gráfico e no momento estou graduando em Sistemas de Informação, estou estagiando na empresa Bem+ como Desenvolvedor Front-end. Gosto sempre de aprender sobre novas ferramentas e tecnologias do mercado, e estou aberto a novos desafios. No momento estou estudando Angular, Vue e JavaScript, aprendendo sobre boas práticas e acessibilidade.
        </p>
      </div>
    </article>
  </section>
  <section class="bg-violet-800 p-5" id="knowledges">
    <h4 class="text-center text-emerald-400 font-bold text-4xl font-sans tagline mb-12">Conhecimentos</h4>
    <article class="container mx-auto flex justify-center flex-wrap">
      <figure class="tecnologies-tools grid grid-cols-4 justify-items-center gap-8">
        <img class="p-3 bg-white w-full h-28 object-contain tagline" src="../src/assets/imgs/HTML5.png" alt="HTML5">
        <img class="p-3 bg-white w-full h-28 object-contain headline" src="../src/assets/imgs/CSS3.png" alt="CSS3">
        <img class="p-3 bg-white w-full h-28 object-contain tagline" src="../src/assets/imgs/JavaScript.png" alt="JavaScript">
        <img class="p-3 bg-white w-full h-28 object-contain headline" src="../src/assets/imgs/TypeScript.png" alt="TypeScript">
        <img class="p-3 bg-white w-full h-28 object-contain tagline" src="../src/assets/imgs/Angular.png" alt="Angular">
        <img class="p-3 bg-white w-full h-28 object-contain headline" src="../src/assets/imgs/Vue.png" alt="Vue">
        <img class="p-3 bg-white w-full h-28 object-contain tagline" src="../src/assets/imgs/Bootstrap.png" alt="Bootstrap">
        <img class="p-3 bg-white w-full h-28 object-contain headline" src="../src/assets/imgs/Tailwind.png" alt="Tailwind">
        <img class="p-3 bg-white w-full h-28 object-contain tagline" src="../src/assets/imgs/Sass.png" alt="Sass">
        <img class="p-3 bg-white w-full h-28 object-contain headline" src="../src/assets/imgs/Gulp.png" alt="Gulp">
        <img class="p-3 bg-white w-full h-28 object-contain tagline" src="../src/assets/imgs/JQuery.png" alt="JQuery">
      </figure>
    </article>
  </section>
  <Footer></Footer>
</template>
<script>
import Header from "./components/Header.vue";
import Footer from './components/Footer.vue'

export default {
  name: "App",
  components: {
    Header,
    Footer
  },
};
</script>
