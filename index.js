function countDown(num) {
    for (let i = num; i >= 0; i--) {
      console.log(i);
    }
  }


  function writeCards(names, gift) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
      const message = `Thank you, ${names[i]}, for the wonderful ${gift} gift!`;
      messages.push(message);
    }
    return messages;
  }
  
  
  
  
  
  
