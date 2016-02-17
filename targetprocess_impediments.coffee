class Dashing.TargetprocessImpediments extends Dashing.Widget

  ready: ->
    # This is fired when the widget is done being rendered
    @onData(this)

  onData: (data) ->
    widget = $(@node)
    if data.value == 0
      widget.css('background-color', 'rgb(0, 128, 0) !important')
    else
      widget.css('background-color', 'rgb(193, 50, 50) !important')
