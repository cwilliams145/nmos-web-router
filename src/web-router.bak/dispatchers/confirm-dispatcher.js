export default (actions) => {
  return (senders) => {
    let receiverId = '7fd2cb0a-7c7f-4b70-989f-3d9c0378e7ed'
    let senderId = 'c700e7ed-047b-4cb6-999f-d09148906c44'
    let sender = senders.filter(sender => {
      return sender.id === senderId
    })[0]
    window.nmos
      .route(receiverId, sender)
      .then(data => {
        console.log(data)
      })
      .catch(error => {
        console.log(error)
      })
  }
}