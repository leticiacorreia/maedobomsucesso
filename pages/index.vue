<template>
  <div class="flex flex-col py-2 bg-[#ece3ca] text-[#711E16] justify-center items-center">

    <div class="carousel w-5/5">
      <div id="item1" class="carousel-item w-full">
        <img
          src="~/assets/img/background.jpg"
          class="w-full" />
      </div>
      <div id="item2" class="carousel-item w-full">
        <img
          src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
          class="w-full" />
      </div>
    </div>
    <!--<div class="flex w-full justify-center gap-2 py-2">
      <a href="#item1" class="btn btn-xs">1</a>
      <a href="#item2" class="btn btn-xs">2</a>
    </div> -->

    <div class="w-3/5 text-center py-12 text-2xl font-semibold">
      <p> Os Arautos do Evangelho são uma Associação Internacional de Fiéis de Direito Pontifício, 
          a primeira a ser erigida pela Santa Sé no terceiro Milênio, o que ocorreu por ocasião 
          da festa litúrgica da Cátedra de São Pedro em 22/02/2001. 
      </p>
    </div>
    
    <div class="flex flex-col w-4/5 p-10 gap-5 justify-center items-center">
        <p class="text-5xl text-center italic font-semibold my-4">Construção da Capela Nossa Senhora do Bom Sucesso</p>
        <iframe 
          width="720" 
          height="445" 
          src="https://www.youtube.com/embed/gF927Rv4HSg?si=NHUv-1bbss5WhYbr" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin" 
          allowfullscreen>
        </iframe>
    </div>
   
    <div class="flex flex-col py-30 w-4/5 gap-10 justify-center text-[#711E16]">
        <div class="w-full h-28 text-center italic py-12 text-4xl">
            Ajude-nos neste projeto:
        </div>

        <div class="flex w-full justify-center py-2 text-2xl font-semibold">
          <div class="flex w-2/4 justify-end items-end">
            <p> Faça parte desta obra de Maria, <br>ajude à construção desta casa de Deus!</p>
          </div>
          <div class="flex items-end ps-10 w-2/4">
            <form action="" method="post" target="_top">
              <input name="hosted_button_id" type="hidden" value="">
              <span>
                <input title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" name="submit" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" type="image"></span><span><img loading="lazy" decoding="async" src="https://www.paypal.com/en_BR/i/scr/pixel.gif" alt="" width="1" height="1" border="0">&nbsp;
              </span>
            </form>
          </div>
        </div>
        <hr />
    </div>
  </div>
</template>

<style scoped>
div {
  font-family: "Cormorant Garamond", sans-serif, italic;
}
</style>