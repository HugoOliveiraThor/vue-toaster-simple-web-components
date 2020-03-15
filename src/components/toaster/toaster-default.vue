<template>
  <div 
    id="toast" 
    :style="{'background-color':`${whatColor} !important`}" 
    v-if="open">
    {{params.text}}
  </div>
</template>

<script src="./toaster.js"></script>
<style src="./styles.css" scoped></style>