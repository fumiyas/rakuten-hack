// ==UserScript==
// @name            Rakuten: Uncheck "want mail magazines" checkboxes by default
// @namespace       http://www.sfo.jp/
// @description     Uncheck "want mail magazines" checkboxes in Rakuten ordering page
// @include         https://order.step.rakuten.co.jp/*
// @include         https://*.order.step.rakuten.co.jp/*
// @include         https://present.step.rakuten.co.jp/*
// ==/UserScript==

// Copyright (c) 2007-2009 SATOH Fumiyasu @ OSS Technology, Inc.
//               <http://www.osstech.co.jp/>
//
// License: GNU General Public License version 2
// Date: 2012-01-07, since 2007-01-06

(function() {
  var RakutenUncheckMailMagazinesCheckBoxes =
  {
    do: function()
    {
      var input = document.getElementsByTagName( "input" );
      for (var i = 0; i < input.length; i++) {
	name = input[i].getAttribute("name");
	type = input[i].getAttribute("type");
	if (!name || !type || type != "checkbox") {
	  continue;
	}
	if (name == "rmail_check" || name == "shop_rating_check" || name.match(/^newscheck_[0-9]+$/)) {
	  //input[i].setAttribute("checked", false);
	  input[i].checked = false;
	}
      }
    }
  }

  RakutenUncheckMailMagazinesCheckBoxes.do();
})();
