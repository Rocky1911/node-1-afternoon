let messages = [];
let id = 0;

module.exports = {
  create: (req, res, next) => {
    const { time, text } = req.body;
    messages.push({ id, text, time });
    id++;
    res.status(200).send;
  },
  read: (req, res, next) => {
    res.status(200).send(messages);
  },
  update: (req, res, next) => {
    const { text } = req.body;
    const updateId = req.params.id;
    updateMessage = messages.indexOf(e => e.id === updateId);
    e = messages[updateMessage];

    messages[updateMessages] = {
      id: e.id,
      text: text || e.text,
      time: e.time
    };
    res.status(200).send(messages);
  },
  delete: (req, res, next) => {
    const deleteId = req.params.id;
    oldId = messages.indexOf(e => e.id === deleteId);
    messages.splice(oldId, 1);
    res.status(200).send(messages);
  }
};
