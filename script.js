
function loadMore() {
  
  $.ajax({
    url: 'http://127.0.0.1:8080/data.json',
    type: 'GET',
  }).done(function (data) {
    // console.log(data.data[1].title);
    console.log(data.data.length);

    
    $.map(data.data, function (post, i) {
      // var post=data.data[1];
      $('#products').append(`<div class="col-12 col-md-4">
                                <div class="card mb-3">
                                  <img src="${post.img}" class="card-img-top" alt="...">
                                    <div class="card-body">
                                      <h5 class="card-title">${post.title}</h5>${(post.isHot)? '<button type="button" class=" btn-danger">Hot</button>':''}
                                      <p class="card-text">${ post.description } </p>
                                    </div>
                                </div>
                              </div>
                            `)
    
    });
    
  })
  
}

