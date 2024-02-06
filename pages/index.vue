<template>
  <section class="main-hero">
    <h1 class="visually-hidden">Разработка программного обеспечения под ключ</h1>
    <div class="main-hero__container container">
      <div class="main-hero__wrapper">
        <div class="main-hero__content">
          <div class="main-hero__head">создаем решение для</div>
          <div class="main-hero__title">БИЗНЕСА</div>
          <div class="main-hero__text">
            выгодное решение для бизнеса. <br />
            полное сопровождение проекта <br />
            на любой стадии.
          </div>
          <div class="main-hero__more">
            <a class="main-hero__button" href="#">
              <div class="main-hero__button-wrap">
                <Icon class="main-hero__button-icon" name="light-arrow-right" />
              </div>
              Узнать больше
            </a>
          </div>
        </div>
        <div class="main-hero__outer">
          <div class="main-hero__picture">
            <img
              class="main-hero__image main-hero__image_1"
              src="/images/pages/main/hero/money.png"
              width="354"
              height="373"
              alt="Пачка денег"
            />
            <img
              class="main-hero__image main-hero__image_2"
              src="./images/pages/main/hero/paper.png"
              width="545"
              height="546"
              alt="Лист бумаги"
            />
            <img
              class="main-hero__image main-hero__image_3"
              src=".images/pages/main/hero/prize.png"
              width="373"
              height="388"
              alt="Приз"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  .main-hero {
    position: relative;
    &::before {
      content: "";
      position: absolute;
      right: 18.3rem;
      top: 0;
      width: 67rem;
      height: 80.8rem;
      background-image: url("images/pages/main/hero/bg.svg");
    }
  }
  .main-hero__wrapper {
    display: flex;
    padding-top: 24.7rem;
  }
  .main-hero__content {
  }
  .main-hero__head {
    display: flex;
    align-items: center;
    padding-left: 4.3rem;
    font-size: 3.2rem;
    letter-spacing: 0.14rem;

    &::before {
      content: "";
      width: 16rem;
      height: 2px;
      background-color: var(--color-orange);
      margin-right: 2rem;
    }
  }
  .main-hero__title {
    font-size: 12.8rem;
    font-weight: 500;
    line-height: 1.25;
    margin: 3.7rem 0;
    letter-spacing: -0.52rem;
    margin-left: -0.8rem;
  }
  .main-hero__text {
    font-size: 2.2rem;
    line-height: 1.33;
    margin-left: -1rem;
    letter-spacing: 0.08rem;
  }
  .main-hero__more {
    margin-top: 2.7rem;
  }
  .main-hero__button {
    display: flex;
    align-items: center;
    font-size: 24px;
    text-transform: uppercase;
    color: var(--color-white);
    text-decoration: none;
    letter-spacing: -0.03rem;
    transition: color 0.3s ease;

    &:hover {
      color: var(--color-orange);

      .main-hero__button-icon {
        background: rgba(77, 77, 77, 0.4);
      }
    }
  }
  .main-hero__button-wrap {
    position: relative;
    margin-right: 7rem;
    margin-left: 2.1rem;

    &::before {
      content: "";
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 135.5%;
      height: 135.5%;
      border: 1px solid #1a1a1a;
      opacity: 0.75;
      border-radius: 100%;
      transform-origin: center;
      animation: button-scale 2s ease infinite;
    }
    &::after {
      content: "";
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 200%;
      height: 200%;
      border: 1px solid #242424;
      opacity: 0.75;
      border-radius: 100%;
      animation: button-scale 2s ease infinite;
    }
  }
  .main-hero__button-icon {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 6.4rem;
    height: 6.4rem;
    box-shadow: 0px 0px 8px 0px #00000059;
    border: 1px solid #4d4d4d;
    background: rgba(77, 77, 77, 0.1);
    border-radius: 100%;
    transition: background 0.3s ease;
  }
  .main-hero__outer {
  }
  .main-hero__picture {
    position: relative;
    margin-left: 11rem;
  }
  .main-hero__image {
    display: block;
    max-width: 100%;
    &_1 {
      position: absolute;
      top: -12.3rem;
      left: 4.3rem;
      z-index: 2;
    }
    &_2 {
      position: relative;
      z-index: 1;
      margin-top: -0.7rem;
    }
    &_3 {
      position: absolute;
      bottom: 1.8rem;
      right: -13.1rem;
    }
  }

  @keyframes button-scale {
    0% {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0);
    }
    70% {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
    100% {
      opacity: 0;
    }
  }
</style>
