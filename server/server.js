'use strict';

exports = {
  events: [{
    event: 'onTicketCreate',
    callback: 'onTicketCreateHandler'
  }],

  onTicketCreateHandler: function(payload) {
    const data = payload.data;
    let url = 'https://api.telegram.org/bot<%=iparam.telegramBotKey%>/sendMessage?chat_id=<%=iparam.chatId%>&text='+data.ticket.subject;
    $request.post(url, {})
    .then (
      function(data) {
        console.log(data);
      },
      function(error) {
        console.log(error);
      }
    );
  }
};


