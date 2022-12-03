import { createGlobalStyle } from "styled-components";
const Globalstyles = createGlobalStyle`
:root{
  /* colors */
  --darkBlue_1: #3B447A;
  --darkBlue_2: #222B5F;
  --darkBlue_3: #0A0F19;
  --darkBlue_4: #101826;
  --mediumSlateBlue: #6C62E2;
  --lightBlue_1: #F3F1FE;
  --lightBlue_2: #ADBDE3;
  --white: #FFFFFF;
  --black: #000000;
  /* others */
    --header-height: 50px;
}
html{
    font-size:10px
}
body{
    background-colors: var(---lightBlue_1)
    font-family: 'Poppins', sans-serif;
}
*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
a{
  text-decoration: none;
  cursor: pointer;
}
ul, li{
  list-style: none;
}
.container{
  max-width: 1200px;  //! for larger screen
  width: 90%;  //! for smaller device width: 90% becuse then thir is 10% gap on bothside
  margin: 0 auto;  //! top-bottom  left-right
}

`;
export default Globalstyles;
