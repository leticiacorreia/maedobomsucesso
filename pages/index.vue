<template>
  <div class="flex flex-col py-12 bg-[#ece3ca] text-[#711E16] justify-center items-center">
    
    <div class="flex flex-col gap-5 justify-center items-center">
        <p class="text-5xl italic font-medium my-4">Conheça um pouco da nossa história: </p>
        <video width="720" height="440" controls>
            <source src="https://youtu.be/gF927Rv4HSg" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    </div>
   
    <div class="w-full h-28 text-center italic py-12 text-5xl">
        Conheça mais sobre os Arautos do Evangelho 
    </div>

    <div class="flex py-30 w-4/5 md:w-3/4 gap-5 justify-center text-[#711E16]">
        <div class="flex w-1/2 justify-end">
            <img src="~/assets/img/background.jpg" class="object-contain lg:object-cover h-26 md:h-48 w-102" alt="">
        </div>
        <div class="w-1/2 mb-10 ps-3">
        <time class="font-mono italic">2001</time>
        <div class="text-xl font-black">Início dos Arautos do Evangelho </div>
            Os Arautos do Evangelho são uma Associação Internacional de Fiéis de Direito Pontifício, <br>
            a primeira a ser erigida pela Santa Sé no terceiro Milênio, o que ocorreu por ocasião <br>
            da festa litúrgica da Cátedra de São Pedro em 22/02/2001.
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