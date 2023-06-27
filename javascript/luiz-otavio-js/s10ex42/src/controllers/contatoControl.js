exports.paginainicial = (req, res) => {
    res.send(req.params.iduser);
    console.log(req.params);
  };