// Initial fit to screen size
rescale_tabs();

window.onresize = function() {
  rescale_tabs();
}

function rescale_tabs () {
  var nav = document.getElementById("nav_menu_bar"),
      width = $(document.body).width(),
      tabs = nav.children,
      itemsRemaining = tabs.length,
      /* borderWidth rounded because a browser zoom will change this to
       * non-integer values, when we really want the original.
       * E.g.. 2px + zoom -> 1.8px, which screws up the math.
       * I've only seen values in [1.5, 2].*/
      borderWidth = Math.round(parseFloat($(tabs[0].children[0]).css("border-left-width"), 10)),
      minWidth = 768;

  // Keep wide enough to not have text overflow issues, even on a small screen.
  if(width >= minWidth) {
    /* Necessary to resolve rounding error that causes last tab to spill over
     * to next line when browser zoom isn't 100%. In this case the width will
     * report as 1px too large.
    */
    // TODO: Detect 100% browser width and get rid of -1 in that case only.
    startingWidth = width - 1;
  } else { // Width between 768 and max width (964)
    startingWidth = minWidth;
  }
  console.log("clientwidth" + width);
  var spaceRemaining = startingWidth - 2 * borderWidth * itemsRemaining;

  while (itemsRemaining > 0) {
    var itemWidth = Math.round(spaceRemaining / itemsRemaining);
    $(tabs[itemsRemaining - 1].children[0]).width(itemWidth);
    spaceRemaining -= itemWidth;
    itemsRemaining -= 1;
  }
}
