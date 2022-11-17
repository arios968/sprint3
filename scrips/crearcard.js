export const crear_tarjetas = function(propiedad)  {
    const creador = `
    <a class="cuerpo-propiedad" href="../href.html?id=${propiedad.id}">
    <div class="cuerpo-img" style="background-image:url(/${propiedad.imagen})">
      <div class="cuerpo-top">
        <span class="cuerpo-propi-type">${propiedad.tipo_vivienda}</span>
        <span class="cuerpo-propi-status">${propiedad.estado_vivienda}</span>
        <div class="cuerpo-propi-square"></div>
      </div>
      <div class="cuerpo-bottom">
        <span class="cuerpo-propi-price">${propiedad.valor}</span>
      </div>
    </div>
    <div class="propi-info">
      <h4 class="cuerpo-propi-location
      ">${propiedad.ubicacion}</h4>
      <div class="cuerpo-propi-full-location"> 
      ${propiedad.direccion}</div>
        <div class="cuerpo-propi-owner">
          <img src= "https://i.pinimg.com/236x/57/70/4e/57704e0cf19b39be681f6add456ddf60--character-portraits-old-age.jpg" class="cuerpo-propi-owner-photo">
          <div class="cuerpo-propi-owner-name">${propiedad.propietario}</div>
          <div class="cuerpo-propi-date">${propiedad.tiempo}</div>
        </div>
        <div class="cuerpo-propi-features">
          <span class="cuerpo-propi-sq"><strong>${propiedad.area}</strong> mt2</span>
          <img src= "../img/propiedades/icos/Garage Icon.png" class="cuerpo-propi-owner-photo">
          <span>${propiedad.parqueadero}</span>
          <img src= "../img/propiedades/icos/Bathroom Icon.png" class="cuerpo-propi-owner-photo">
          <span>${propiedad.bats}</span>
          <img src= "../img/propiedades/icos/Bedroom Icon.png" class="cuerpo-propi-owner-photo">
          <span>${propiedad.habitaciones}</span>
        </div>
    </div>
  </a>
    `;

    return creador
}









