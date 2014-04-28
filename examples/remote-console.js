
exports.remote = function(){
  // console.* calls relay to the local client
  var id = setInterval(function(){
    console.log({
      user: {
        name: {
          first: 'tobi',
          last: 'ferret'
        }
      }
    });
  }, 100);

  return function unsubscribe(){
    clearInterval(id);
  };
};
