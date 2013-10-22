/*global window, document*/
define(["backbone", "jquery", "hammer"], function(Backbone, $, hammer) {
  "use strict";

  return {
    start: function() {
      $(function() {
        hammer(document.body).on("swipeleft", function() {
          window.location.reload();
        });
        window.alert("hola!");
      });

      return [Backbone];
    }
  };
});
