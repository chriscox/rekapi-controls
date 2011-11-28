;(function (global) {
  var gk,
      $
      CONTROL_TEMPLATE = [
        '<div class="rekapi-controls">'
          ,'<button class="rekapi-controls-play">Play</button>'
          ,'<button class="rekapi-controls-pause">Pause</button>'
          ,'<div class="rekapi-controls-timeline"></div>'
          ,'<button class="rekapi-controls-stop">Stop</button>'
        ,'</div>'
      ].join('');

  if (!jQuery || !Kapi || !Mustache) {
    throw 'Rekapi, jQuery, and Mustache are needed for Rekapi Controls.';
  }

  gk = global.Kapi;
  $ = jQuery;

  gk.prototype.controlsCreate = function () {
    var self
        ,$controls
        ,$canvas
        ,$play
        ,$pause
        ,$stop
        ,$timeline;

    self = this;
    $canvas = $(this.canvas);
    $controls = $(Mustache.to_html(CONTROL_TEMPLATE));
    $play =     $controls.find('.rekapi-controls-play');
    $pause =    $controls.find('.rekapi-controls-pause');
    $stop =     $controls.find('.rekapi-controls-stop');
    $timeline = $controls.find('.rekapi-controls-timeline');
    $timeline.slider();
    $canvas.after($controls);

    $play.on('click', function (evt) {
      self.play();
    });

    $pause.on('click', function (evt) {
      self.pause();
    });

    $stop.on('click', function (evt) {
      self.stop(true);
    });

    return this;
  };
} (this));
