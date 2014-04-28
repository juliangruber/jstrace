
exports.remote = function(){
  // console.* calls relay to the local client
  var id = setInterval(function(){
    console.dir({
      user: {
        name: {
          first: 'tobi',
          last: 'ferret'
        }
      }
    });
  }, 250);

  return function unsubscribe(){
    clearInterval(id);
  };
};
