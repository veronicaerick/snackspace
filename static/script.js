"use strict";
////////////////// ADD ATTRACTION to database///////////////////////////
$(document).ready(function(){


console.log("JS Connected");
function addAttractionSuccess (result) {
  console.log("added");
}

function addAttraction (evt) {
  var attractionId = $(this).data('id');
  var nameId = $(this).data('name');
  var locationId = $(this).data('location');
  var latitudeId = $(this).data('latitude');
  var longitudeId = $(this).data('longitude');
  var ratingId = $(this).data('rating');
  var reviewId = $(this).data('review-count');
  var urlId = $(this).data('url');
  var imageurlId = $(this).data('img');
  var phoneId = $(this).data('phone');
  

  var attr = {'id': attractionId,
              'name': nameId,
              'location': locationId,
              'latitude:': latitudeId,
              'longitude': longitudeId,
              'rating': ratingId,
              'review_count': reviewId,
              'url': urlId,
              'image_url': imageurlId,
              'phone': phoneId
            }
  // console.log(addAttraction)

  $.post("/add_to_attractions", attr, addAttractionSuccess)
  $(this).find(".glyphicon-heart").css("color", "salmon");

}

$('.saveAttractionModalBtn').click(addAttraction);



function makeAttModalMap(evt){
  var resultId = $(this).data('attractionId');
  console.log(resultId);
  initMaps[resultId]();
}

function populateAttModal(evt){
  var attractionId = $(this).data('attractionId');
  var modalToModalize = $('#attractionModal'+attractionId);
  modalToModalize.on('shown.bs.modal', makeAttModalMap).modal('show');
  //map things
}

$('.triggerAttModal').on('click', populateAttModal);


///////////////////Modal Details/Map Attraction /////////////////////////////

function makeEvModalMap(evt){
  var eventId = $(this).data('eventId');
  console.log(eventId);
  initMaps[eventId]();
}

function populateEvModal(evt){
  var eventId = $(this).data('eventId');
  var modalToModalize = $('#eventModal'+eventId);
  modalToModalize.on('shown.bs.modal', makeEvModalMap).modal('show');
  //map things
}

$('.triggerEvModal').on('click', populateEvModal);

/////////////////// Change Heart Color for SAVE /////////////////////////////
});