<template>
  <header class="header">
    <NuxtLink class="header__logo" to="/">
      <img
        class="header__logo-img"
        src="./images/shared/logo.svg"
        width="80"
        height="63"
        alt="Логотип компании"
        loading="lazy"
      />
    </NuxtLink>
    <nav class="header__nav">
      <ul class="header__list">
        <li class="header__item">
          <NuxtLink class="header__link" to="#">Проекты</NuxtLink>
        </li>
        <li class="header__item">
          <NuxtLink class="header__link" to="#">Услуги</NuxtLink>
        </li>
        <li class="header__item">
          <NuxtLink class="header__link" to="#">Разработка</NuxtLink>
        </li>
      </ul>
    </nav>

    <div class="header__wrap">
      <ul class="header__langs">
        <li class="header__lang">
          <a class="header__lang-link" href="#">en</a>
        </li>
        <li class="header__lang">
          <a class="header__lang-link header__lang-link_active" href="#">ru</a>
        </li>
      </ul>

      <a class="header__info" href="#" aria-label="Задать вопрос">
        <Icon class="header__info-icon" name="question" />
      </a>
    </div>

    <button
      class="header__burger"
      :class="{ header__burger_active: isMenuOpen }"
      aria-label="Открыть меню"
      @click="toggleMenu"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  </header>
</template>

<script setup>
  const isMenuOpen = ref(false);

  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };
</script>

<style lang="scss">
  @import url(~/assets/scss/components/_header.scss);
</style>
