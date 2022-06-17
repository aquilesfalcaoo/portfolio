<template>
  <header
    class="py-5 px-8 bg-violet-800 border-violet-900 border-b-2 fixed w-full"
  >
    <div class="container mx-auto">
      <nav class="menu-content flex flex-wrap justify-between items-center">
        <a href="#"
          ><img
            src=".././assets/imgs/logo.png"
            alt="Nome Portfólio"
            draggable="false"
        /></a>
        <div
          class="menu-hamburg cursor-pointer md:hidden block"
          id="menu-button"
        >
          <i class="fa-solid fa-bars fa-2xl" style="color: white"></i>
        </div>
        <div
          class="
            w-full
            flex
            justify-center
            md:flex md:items-center md:w-auto
            hidden
          "
          id="menu"
        >
          <ul
            class="
              flex
              md:gap-8
              flex-col
              md:flex-row
              items-center
              justify-center
              md:flex md:justify-between
            "
          >
            <a href="#about-me"
              ><li class="block mt-2 text-white font-medium font-sans text-lg">
                Sobre Mim
              </li></a
            >
            <a href="#knowledges"
              ><li class="block mt-2 text-white font-medium font-sans text-lg">
                Conhecimentos
              </li></a
            >
            <a href="#projects"
              ><li class="block mt-2 text-white font-medium font-sans text-lg">
                Projetos
              </li></a
            >
            <a href="#contact"
              ><li
                class="
                  text-white
                  mt-2
                  py-2
                  px-5
                  bg-emerald-600
                  rounded-full
                  font-medium font-sans
                  text-lg
                "
              >
                Contato
              </li></a
            >
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>