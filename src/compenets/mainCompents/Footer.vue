<template>
  <div>
    <footer>
      <b-container>
        <b-row class="text-center">
            <b-col>
              <p>
                Copyright © 2019 InnovSquads. All rights reserved.
              </p>
            </b-col>
        </b-row>
      </b-container>
    </footer>
  </div>
</template>

<script>
export default {

  data () {
    return {

    }
  }
}
</script>

<style scoped>
footer{
background: #FFFFFF !important;
box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.1);
height: 80px;
padding: 3% 0;
/* position:absolute; bottom:0px;  left:0px; right:0px; overflow:hidden; */
    /* flex-shrink: 0; */
}
footer p{
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 14px;
text-align: center;

color: #747D88;
}
</style>
