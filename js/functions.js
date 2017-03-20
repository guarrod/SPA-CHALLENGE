$(document).ready(function(){

   // Configuración de la consultar
   // El hash utilizado se generó con http://www.md5.cz/
   $.ajax({
    url: "http://gateway.marvel.com/v1/public/characters?apikey=940b04bf692c6f5beca5ef9fa55efed3&ts=1&hash=cb38b960136f724ce9cdae36516cb36a&limit=10",
    method: "GET"
   }).done(function(response) {

      $("div.characters-container").empty();

      //Loop para consultar el API y devolver la información del personaje
      $.each(response.data.results, function(index, element) {

         $("div.characters-container")
         .append($('<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 character-box">')
            .append($('<div class="box">')
               .append($('<div class="row">')
                  .append($('<div class="col-xs-4 col-sm-4 col-md-12 col-lg-5">')
                      .append($('<img>')
                        .attr('src', element.thumbnail.path + '/standard_xlarge.' + element.thumbnail.extension)
                      )
                  )
                  .append($('<div class="col-xs-8 col-sm-8 col-md-12 col-lg-7">')
                      .append($('<h1>')
                        .append(element.name)
                      )
                      .append($('<p>')
                        .append(element.description)
                      )
                      .append($('<a data-remodal-target="modal" class="more">')
                        .append('VIEW MORE')
                      )
                  )
               )
               .append($('<h2>')
                  .append('Related Comics')
               )

               .append($('<ul>')
               )
             )
         )
        //Loop para devolver 4 comics relacionados al personaje
         $.each(element.comics.items, function(i, comic){
            if (i < 4){
               $("div.characters-container ul:last")
               .append($('<li>')
                  .append(comic.name)
               )
            }
         })
        //


      })

   });
})
