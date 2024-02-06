<template>
  <div class="wrapper">
    <Header />
    <main class="main">
      <slot />
    </main>
  </div>
</template>
<style>
  .wrapper {
    min-height: 1000000px;
  }
</style>
