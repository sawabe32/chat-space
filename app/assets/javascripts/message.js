$(function(){ 
  function buildHTML(message){
   if ( message.image ) {
     var html =
      `<div class="chat-main__message-list__list">
        <div class="chat-main__message-list__list__name">
          ${message.user_name}
        </div>
        <div class="chat-main__message-list__list__date">
          ${message.created_at}
        </div>
      </div>
      <div class="chat-main__message-list__message">
        <p class="lower-message__content">
          ${message.content}
        </p>
         <img src=${message.image} >
      </div>`
     return html;
   } else {
     var html =
      `<div class="chat-main__message-list__list">
        <div class="chat-main__message-list__list__name">
          ${message.user_name}
        </div>
        <div class="chat-main__message-list__list__date">
          ${message.created_at}
        </div>
      </div>
      <div class="chat-main__message-list__message">
        <p class="lower-message__content">
          ${message.content}
        </p>
      </div>`
     return html;
   };
 }
$('#new_message').on('submit', function(e){
 e.preventDefault();
 var formData = new FormData(this);
 var url = $(this).attr('action')
 $.ajax({
   url: url,
   type: "POST",
   data: formData,
   dataType: 'json',
   processData: false,
   contentType: false
 })
  .done(function(data){
    var html = buildHTML(data);
    $('.chat-main__message-list').append(html);
    $('form')[0].reset();
    $('.chat-main__message-list').animate({ scrollTop: $('.chat-main__message-list')[0].scrollHeight});
  })
  .always(function(data){
    $('.submit-btn').prop('disabled', false);
  })
  .fail(function() {
    alert("メッセージ送信に失敗しました");
  })
})
});